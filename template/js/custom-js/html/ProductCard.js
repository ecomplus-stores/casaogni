import {
  i19addToFavorites,
  i19buy,
  i19connectionErrorProductMsg,
  i19outOfStock,
  i19unavailable
} from '@ecomplus/i18n'

import {
  i18n,
  name as getName,
  inStock as checkInStock,
  onPromotion as checkOnPromotion,
  price as getPrice
} from '@ecomplus/utils'

import Vue from 'vue'
import { store } from '@ecomplus/client'
import ecomCart from '@ecomplus/shopping-cart'
import ALink from '@ecomplus/storefront-components/src/ALink.vue'
import APicture from '@ecomplus/storefront-components/src/APicture.vue'
import APrices from '@ecomplus/storefront-components/src/APrices.vue'
import ecomPassport from '@ecomplus/passport-client'
import { toggleFavorite, checkFavorite } from '@ecomplus/storefront-components/src/js/helpers/favorite-products'
import { lazyLoad } from '@ecomplus/storefront-template/template/js/lib/lazy-load'

const getExternalHtml = (varName, product) => {
  if (typeof window === 'object') {
    varName = `productCard${varName}Html`
    const html = typeof window[varName] === 'function'
      ? window[varName](product)
      : window[varName]
    if (typeof html === 'string') {
      return html
    }
  }
  return undefined
}

export default {
  name: 'ProductCard',

  components: {
    ALink,
    APicture,
    APrices
  },

  props: {
    product: Object,
    productId: String,
    isSmall: Boolean,
    headingTag: {
      type: String,
      default: 'h3'
    },
    buyText: String,
    transitionClass: {
      type: String,
      default: 'animated fadeIn'
    },
    canAddToCart: {
      type: Boolean,
      default: true
    },
    ecomPassport: {
      type: Object,
      default () {
        return ecomPassport
      }
    },
    accountUrl: {
      type: String,
      default: '/app/#/account/'
    },
    isLoaded: Boolean,
    installmentsOption: Object,
    discountOption: Object
  },

  data () {
    return {
      body: {},
      isLoading: false,
      isWaitingBuy: false,
      isHovered: false,
      isFavorite: false,
      error: ''
    }
  },

  computed: {
    i19addToFavorites: () => i18n(i19addToFavorites),
    i19outOfStock: () => i18n(i19outOfStock),
    i19unavailable: () => i18n(i19unavailable),
    i19uponRequest: () => 'Sob consulta',

    isWithoutPrice () {
      return !getPrice(this.body)
    },

    ratingHtml () {
      return getExternalHtml('Rating', this.body)
    },

    buyHtml () {
      return getExternalHtml('Buy', this.body)
    },

    footerHtml () {
      return getExternalHtml('Footer', this.body)
    },

    name () {
      return getName(this.body)
    },

    strBuy () {
      return this.buyText ||
        (typeof window === 'object' && window.productCardBuyText) ||
        i18n(i19buy)
    },

    isInStock () {
      return checkInStock(this.body)
    },

    isActive () {
      return this.body.available && this.body.visible && this.isInStock
    },

    isLogged () {
      return ecomPassport.checkAuthorization()
    },

    discount () {
      const { body } = this
      return checkOnPromotion(body)
        ? Math.round(((body.base_price - getPrice(body)) * 100) / body.base_price)
        : 0
    }
  },

  methods: {
    setBody (data) {
      this.body = Object.assign({}, data)
      delete this.body.body_html
      delete this.body.body_text
      delete this.body.inventory_records
      delete this.body.price_change_records
      this.isFavorite = checkFavorite(this.body._id, this.ecomPassport)
    },

    fetchItem () {
      if (this.productId) {
        this.isLoading = true
        store({ url: `/products/${this.productId}.json` })
          .then(({ data }) => {
            this.$emit('update:product', data)
            this.setBody(data)
            this.$emit('update:is-loaded', true)
          })
          .catch(err => {
            console.error(err)
            if (!this.body.name || !this.body.slug || !this.body.pictures) {
              this.error = i18n(i19connectionErrorProductMsg)
            }
          })
          .finally(() => {
            this.isLoading = false
          })
      }
    },

    toggleFavorite () {
      this.isFavorite = toggleFavorite(this.body._id, this.ecomPassport)      
    },

    buy () {
      const product = this.body
      window.location = `/${product.slug}`
      // this.$emit('buy', { product })
      // if (this.canAddToCart) {
      //   this.isWaitingBuy = true
      //   store({ url: `/products/${product._id}.json` })
      //     .then(({ data }) => {
      //       const selectFields = ['variations', 'customizations', 'kit_composition']
      //       for (let i = 0; i < selectFields.length; i++) {
      //         const selectOptions = data[selectFields[i]]
      //         if (selectOptions && selectOptions.length) {
      //           return import('@ecomplus/storefront-components/src/ProductQuickview.vue')
      //             .then(quickview => {
      //               new Vue({
      //                 render: h => h(quickview.default, {
      //                   props: {
      //                     product: data
      //                   }
      //                 })
      //               }).$mount(this.$refs.quickview)
      //             })
      //         }
      //       }
      //       const { quantity, price } = data
      //       ecomCart.addProduct({ ...product, quantity, price })
      //     })
      //     .catch(err => {
      //       console.error(err)
      //       window.location = `/${product.slug}`
      //     })
      //     .finally(() => {
      //       this.isWaitingBuy = false
      //     })
      // }
    },
    updateFavoriteStatus() {
      this.isFavorite = checkFavorite(this.body._id, this.ecomPassport);
    },
  },

  created () {
    if (this.product) {
      this.setBody(this.product)
      if (this.product.available === undefined) {
        this.body.available = true
      }
      if (this.product.visible === undefined) {
        this.body.visible = true
      }
    }
    if (!this.isLoaded) {
      this.fetchItem()
    }
  },
  mounted(){
    window.addEventListener('updateFavoriteList', this.updateFavoriteStatus);
    // if(window.innerWidth > 990){
    //     setTimeout(() => {
    //     $(this.$refs.productGallery).slick({
    //       infinite: true,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       lazyLoad:false,
    //       dots:true,
    //       prevArrow:'<button type="button" class="a-prev"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 15L7.5 10L12.5 5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    //       nextArrow:'<button type="button" class="a-next"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 15L12.5 10L7.5 5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
    //     });
    //   },50)
    // }else{
    //   this.body.pictures = this.body.pictures.slice(0,1)
    // }
    
  }
}