/*! For license information please see chunk.78aececa7ce07444d9f6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23,33],{229:function(t,i,e){var s=e(242);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e(163).default)("9248a57e",s,!0,{})},231:function(t,i,e){"use strict";var s=e(26),a=e(35),n={name:"AAlert",props:{canShow:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},data:()=>({count:1}),computed:{i19close:()=>Object(a.a)(s.P)},watch:{canShow(t){t&&this.count++}}},r=e(46),o=Object(r.a)(n,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("transition",{attrs:{"enter-active-class":"animated fadeInDown fast"}},[t.canShow?e("div",{key:t.count},[t._m(0)]):t._e()])],1)}),[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"alert alert-dismissible fade show",class:"alert-"+t.variant,attrs:{role:"alert"}},[t._t("default"),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":t.i19close},on:{click:function(i){return t.$emit("dismiss")}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])],2)}],!1,null,null,null);i.a=o.exports},233:function(t,i,e){"use strict";i.a=function(t){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;for(;t.offsetParent;)i+=t.offsetTop,t=t.offsetParent;return window.scroll({top:i,behavior:"smooth"})}},237:function(t,i,e){"use strict";i.a=(t,i)=>t.sort(((t,e)=>{if(t.app_id===e.app_id)return 0;const s=i.indexOf(t.app_id),a=i.indexOf(e.app_id);return s>-1?a>-1?s<a?-1:1:s>-1?-1:1:a>-1?1:0}))},241:function(t,i,e){"use strict";e(229)},242:function(t,i,e){(i=e(162)(!0)).push([t.i,".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__label{padding:var(--spacer-3) var(--spacer-2)}.shipping-calculator__label i{animation-duration:2s;animation-iteration-count:infinite;color:var(--primary-light);font-size:var(--font-size-lg);margin-right:var(--spacer-2)}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}","",{version:3,sources:["ShippingCalculator.scss"],names:[],mappings:"AAAA,4BAA4B,eAAe,CAAC,+BAA+B,6BAA6B,CAAC,eAAe,CAAC,uCAAuC,WAAW,CAAC,4BAA4B,uCAAuC,CAAC,8BAA8B,qBAAqB,CAAC,kCAAkC,CAAC,0BAA0B,CAAC,6BAA6B,CAAC,4BAA4B,CAAC,6BAA6B,YAAY,CAAC,6BAA6B,CAAC,UAAU,CAAC,mCAAmC,cAAc,CAAC,gBAAgB,CAAC,yBAAyB,6BAA6B,aAAa,CAAC,iBAAiB,CAAC,mCAAmC,iBAAiB,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,sCAAsC,0BAA0B,CAAC,gDAAgD,aAAa,CAAC,0BAA0B,CAAC,oDAAoD,4BAA4B",file:"ShippingCalculator.scss",sourcesContent:[".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__label{padding:var(--spacer-3) var(--spacer-2)}.shipping-calculator__label i{animation-duration:2s;animation-iteration-count:infinite;color:var(--primary-light);font-size:var(--font-size-lg);margin-right:var(--spacer-2)}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}"]}]),t.exports=i},244:function(t,i,e){"use strict";e(6);var s=e(26),a=e(25),n=e(35),r=e(75),o=e(29),c=e(4),l=e(237),p=e(234),u=e.n(p),d=e(240);const _="object"==typeof window&&window.localStorage,h="shipping-to-zip",m="object"==typeof window&&window.propsShippingCalculator||{},g=t=>{const i={};return["product_id","variation_id","sku","name","quantity","inventory","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach((e=>{void 0!==t[e]&&(i[e]=t[e])})),i};var v={name:"ShippingCalculator",components:{CleaveInput:u.a,ShippingLine:d.a},props:{zipCode:String,canSelectServices:Boolean,canAutoSelectService:{type:Boolean,default:"boolean"!=typeof m.canAutoSelectService||m.canAutoSelectService},canInputZip:{type:Boolean,default:"boolean"!=typeof m.canInputZip||m.canInputZip},countryCode:{type:String,default:a.$ecomConfig.get("country_code")},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})},skipAppIds:Array,shippingAppsSort:{type:Array,default:()=>window.ecomShippingApps||[]}},data:()=>({localZipCode:null,localShippedItems:[],amountSubtotal:null,shippingServices:[],selectedService:null,hasPaidOption:!1,freeFromValue:null,isScheduled:!1,retryTimer:null,isWaiting:!1,hasCalculated:!1}),computed:{i19add$1ToEarn:()=>Object(n.a)(s.j),i19calculateShipping:()=>Object(n.a)(s.E),i19zipCode:()=>Object(n.a)(s.xe),i19freeShipping:()=>Object(n.a)(s.Cb).toLowerCase(),i19selectShippingMsg:()=>Object(n.a)({pt_br:"Selecione uma forma de envio abaixo",en_us:"Select a shipping method below"}),cleaveOptions(){return"BR"===this.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},freeFromPercentage(){return this.hasPaidOption&&this.amountSubtotal<this.freeFromValue?Math.round(100*this.amountSubtotal/this.freeFromValue):null},productionDeadline(){let t=0;return this.shippedItems.forEach((i=>{if(i.quantity&&i.production_time){const{days:e,cumulative:s}=i.production_time,a=s?e*i.quantity:e;a>t&&(t=a)}})),t}},methods:{formatMoney:r.a,updateZipCode(){this.$emit("update:zip-code",this.localZipCode)},parseShippingOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freeFromValue=null,this.shippingServices=[],t.length&&(t.forEach((i=>{const{validated:e,error:s,response:a}=i;if(!e||s)return;if(this.skipAppIds&&this.skipAppIds.includes(i.app_id)&&t.filter((t=>{let{app_id:i}=t;return!this.skipAppIds.includes(i)})).length)return;a.shipping_services.forEach((t=>{this.shippingServices.push({app_id:i.app_id,...t})}));const n=a.free_shipping_from_value;n&&(!this.freeFromValue||this.freeFromValue>n)&&(this.freeFromValue=n)})),this.shippingServices.length?(this.shippingServices=this.shippingServices.sort(((t,i)=>{const e=t.shipping_line.total_price-i.shipping_line.total_price;return e<0?-1:e>0?1:t.shipping_line.delivery_time&&i.shipping_line.delivery_time&&t.shipping_line.delivery_time.days<i.shipping_line.delivery_time.days?-1:1})),this.canAutoSelectService&&this.setSelectedService(0),this.hasPaidOption=Boolean(this.shippingServices.find((t=>t.shipping_line.total_price||t.shipping_line.price))),Array.isArray(this.shippingAppsSort)&&this.shippingAppsSort.length&&(this.shippingServices=Object(l.a)(this.shippingServices,this.shippingAppsSort))):i?this.scheduleRetry():this.fetchShippingServices(!0))},scheduleRetry(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;clearTimeout(this.retryTimer),this.retryTimer=setTimeout((()=>{this.localZipCode&&!this.shippingServices.length&&this.shippedItems.length&&this.fetchShippingServices(!0)}),t)},fetchShippingServices(t){this.isScheduled||(this.isScheduled=!0,setTimeout((()=>{this.isScheduled=!1;const{storeId:i}=this;let e="/calculate_shipping.json";this.skipAppIds&&this.skipAppIds.length&&(e+="?skip_ids=",this.skipAppIds.forEach(((t,i)=>{i>0&&(e+=","),e+=`${t}`})));const s={...this.shippingData,to:{zip:this.localZipCode,...this.shippingData.to}};this.localShippedItems.length&&(s.items=this.localShippedItems,s.subtotal=this.amountSubtotal),this.isWaiting=!0,Object(c.c)({url:e,method:"POST",storeId:i,data:s}).then((i=>{let{data:e}=i;return this.parseShippingOptions(e.result,t)})).catch((i=>{t||this.scheduleRetry(4e3),console.error(i)})).finally((()=>{this.hasCalculated=!0,this.isWaiting=!1}))}),this.hasCalculated?150:50))},submitZipCode(){this.updateZipCode(),_&&_.setItem(h,this.localZipCode),this.fetchShippingServices()},setSelectedService(t){this.canSelectServices&&(this.$emit("select-service",this.shippingServices[t]),this.selectedService=t)}},watch:{shippedItems:{handler(){setTimeout((()=>{this.localShippedItems=this.shippedItems.map(g);const{amountSubtotal:t}=this;this.amountSubtotal=this.shippedItems.reduce(((t,i)=>t+Object(o.a)(i)*i.quantity),0),this.hasCalculated&&(this.canSelectServices||t!==this.amountSubtotal||!this.shippingServices.length&&!this.isWaiting)&&this.fetchShippingServices()}),50)},deep:!0,immediate:!0},localZipCode(t){"BR"===this.countryCode&&8===t.replace(/\D/g,"").length&&this.submitZipCode()},zipCode:{handler(t){t&&(this.localZipCode=t)},immediate:!0},skipAppIds(){this.fetchShippingServices()},shippingResult:{handler(t){t.length&&this.parseShippingOptions(t)},immediate:!0}},created(){if(!this.zipCode&&_){const t=_.getItem(h);t&&(this.localZipCode=t)}}},f=v,y=(e(241),e(46)),b=Object(y.a)(f,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"shipping-calculator"},[t.canInputZip?e("form",{staticClass:"shipping-calculator__form",on:{submit:function(i){return i.preventDefault(),t.submitZipCode.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"shipping-calculator-zip"}},[t._v(" "+t._s(t.i19calculateShipping)+" ")]),e("div",{staticClass:"input-group"},[e("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:t.i19zipCode,"aria-label":t.i19zipCode,options:t.cleaveOptions},model:{value:t.localZipCode,callback:function(i){t.localZipCode=i},expression:"localZipCode"}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit","aria-label":t.i19calculateShipping}},[e("i",{staticClass:"i-shipping-fast"})])])],1)])]):t._e(),e("div",{staticClass:"shipping-calculator__services"},[e("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[t.isWaiting?e("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])]):e("div",{key:"services",staticClass:"list-group"},[e("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[t.canSelectServices&&!t.canAutoSelectService&&null===t.selectedService?e("div",{staticClass:"shipping-calculator__label"},[e("i",{staticClass:"i-arrow-down animated wobble"}),t._v(" "+t._s(t.i19selectShippingMsg)+" ")]):t._e()]),t._l(t.shippingServices,(function(i,s){return e(t.canSelectServices?"a":"div",{key:s,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":t.canSelectServices,active:t.canSelectServices&&t.selectedService===s},attrs:{href:t.canSelectServices&&"#"},on:{click:function(i){return i.preventDefault(),t.setSelectedService(s)}}},[e("span",{staticClass:"shipping-calculator__option"},[t._t("option",(function(){return[e("shipping-line",{attrs:{"shipping-line":i.shipping_line,"production-deadline":t.productionDeadline,"data-service-code":i.service_code}}),t.canSelectServices&&!t.canAutoSelectService?e("div",{staticClass:"custom-control custom-radio"},[e("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"shipping-method-"+i.service_code,name:"shipping-method-select"},domProps:{checked:t.selectedService===s}}),e("label",{staticClass:"custom-control-label",attrs:{for:"shipping-method-"+i.service_code}},[e("small",[t._v(t._s(i.label))])])]):e("small",[t._v(t._s(i.label))])]}),null,{service:i})],2)])}))],2)]),e("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[t.freeFromPercentage?e("div",{staticClass:"shipping-calculator__free-from-value"},[t._t("free-from-value",(function(){return[e("span",[t._v(" "+t._s(t.i19add$1ToEarn.replace("$1",t.formatMoney(t.freeFromValue-t.amountSubtotal)))+" "),e("strong",[t._v(t._s(t.i19freeShipping))])]),t.freeFromPercentage>=33?e("div",{staticClass:"progress"},[e("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+t.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":t.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[e("span",[t._v(" "+t._s(t.i19freeShipping)+" "),e("i",{staticClass:"i-truck mx-1"}),e("strong",[t._v(t._s(t.freeFromPercentage)+"%")])])])]):t._e()]}),null,{amountSubtotal:t.amountSubtotal,freeFromValue:t.freeFromValue,freeFromPercentage:t.freeFromPercentage})],2):t._e()])],1)])}),[],!1,null,null,null);i.a=b.exports},245:function(t,i,e){"use strict";i.a=t=>{"object"==typeof window&&"function"==typeof window.requestIdleCallback?window.requestIdleCallback(t):setTimeout(t,500)}},272:function(t,i,e){"use strict";e.d(i,"a",(function(){return s})),e.d(i,"b",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"product",attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku,"data-selected-variation":t.selectedVariationId}},[e("a-alert",{attrs:{"can-show":t.hasLoadError,variant:"danger"}},[t._v(" "+t._s(t.i19loadProductErrorMsg)+" "),e("a",{staticClass:"alert-link",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.fetchProduct.apply(null,arguments)}}},[t._v(" "+t._s(t.i19retry)+" ")])]),e("transition",{attrs:{"enter-active-class":"animated fadeIn slower"}},[t.body._id?e("div",{staticClass:"row"},[t._t("gallery-col",(function(){return[e("div",{class:t.galleryColClassName},[e(t.isSSR?"portal":"div",{tag:"component",attrs:{selector:"#product-gallery"}},[t._t("stamps"),e("product-gallery",{attrs:{product:t.body,"can-add-to-cart":t.canAddToCart&&t.body.available&&t.isInStock,"current-slide":t.currentGalleyImg,"is-s-s-r":t.isSSR},on:{"update:currentSlide":function(i){t.currentGalleyImg=i},"update:current-slide":function(i){t.currentGalleyImg=i}}},[t._t("first-picture")],2),t._t("gallery-footer")],2)],1)]})),e("div",{ref:"actions",staticClass:"col"},[t.isSSR?t._e():t._t("heading",(function(){return[e(t.headingTag,{tag:"component",staticClass:"product__name"},[t._v(" "+t._s(t.name)+" ")]),e("p",{staticClass:"product__sku"},[t._v(" COD: "+t._s(t.body.sku)+" ")])]})),e(t.isSSR?"portal":"div",{tag:"component",attrs:{selector:"#product-actions"}},[t._t("rating",(function(){return[t._m(0)]})),t.body.available?t.isInStock?t.isWithoutPrice?e("div",{staticClass:"product__without-price"},[t._t("without-price",(function(){return[t.quoteLink?e("a",{attrs:{target:"_blank",rel:"noopener",href:t.quoteLink}},[t._v(" "+t._s(t.i19quoteProduct)+" ")]):t._e()]}))],2):[t.hasVariations?t._t("variations",(function(){return[e("product-variations",{attrs:{product:t.body,"selected-id":t.selectedVariationId,"max-options-btns":t.maxVariationOptionsBtns},on:{"update:selectedId":function(i){t.selectedVariationId=i},"update:selected-id":function(i){t.selectedVariationId=i},"select-option":t.handleGridOption}}),e("a-alert",{attrs:{"can-show":t.hasClickedBuy&&!t.selectedVariationId}},[t._v(" "+t._s(t.i19selectVariationMsg)+" ")]),t._t("variations-info")]})):t._e(),t.body.customizations?t._t("customizations",(function(){return t._l(t.body.customizations,(function(i){return i.custom_value?e("div",{key:i._id,staticClass:"product__customization form-group",class:i.grid_id?"product__customization--"+i.grid_id:null},[e("label",{attrs:{for:"c-"+i._id}},[t._v(" "+t._s(i.label)+" "),i.add_to_price?e("span",{staticClass:"badge badge-secondary"},[t._v(" "+t._s(t.formatAdditionalPrice(i.add_to_price))+" ")]):t._e()]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"c-"+i._id},on:{keyup:function(e){return t.setCustomizationOption(i,e.target.value)}}})]):t._e()}))})):t._e(),t._t("prices",(function(){return[e("p",{staticClass:"product__prices"},[e("a-prices",{attrs:{product:t.ghostProductForPrices,"is-literal":!0,"is-big":!0},on:{"fix-price":function(i){return t.fixedPrice=i}}}),t._t("discount-tag",(function(){return[t.discount>0?e("span",{staticClass:"product__discount"},[t._v(" "+t._s(t.i19discountOf)+" "),e("strong",[t._v(t._s(t.discount)+"%")])]):t._e()]}),null,{discount:t.discount})],2)]})),t.isKit?e("div",{staticClass:"product__kit"},[t._t("kit",(function(){return[e("transition",{attrs:{"enter-active-class":"animated fadeInUp"}},[t.kitItems.length&&!t.isKitWithVariations?e("quantity-selector",{attrs:{items:t.kitItems,min:t.body.min_quantity,max:t.body.quantity,slug:t.body.slug,"kit-product-id":t.body._id,"kit-name":t.name,"kit-price":t.fixedPrice},on:{buy:function(i){return t.$emit("buy",i)}},scopedSlots:t._u([{key:"buy-button-content",fn:function(){return[t._t("buy-button-content")]},proxy:!0}],null,!0)}):t._e(),t.kitItems.length&&t.isKitWithVariations?e("kit-product-variations",{attrs:{items:t.kitItems,min:t.body.min_quantity,max:t.body.quantity,slug:t.body.slug,"kit-product-id":t.body._id,"kit-name":t.name,"kit-price":t.fixedPrice,"max-options-btns":t.maxVariationOptionsBtns},scopedSlots:t._u([{key:"buy-button-content",fn:function(){return[t._t("buy-button-content")]},proxy:!0}],null,!0)}):t._e()],1),t.kitItems.length?t._e():e("span",{staticClass:"product__kit-loading spinner-border",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])])]}),null,{kitItems:t.kitItems})],2):[t.isVariationInStock?t.hasBuyButton?e("div",{ref:"buy",staticClass:"product__buy"},[e(t.hasQuantitySelector?"quantity-selector":"div",{tag:"component",attrs:{items:t.hasQuantitySelector?[{_id:t.body._id,quantity:t.body.min_quantity||1}]:null,min:t.body.min_quantity,max:t.body.quantity,"has-buy-button":!1},on:{"set-quantity":function(i){var e=i.quantity;return t.qntToBuy=e}}},[e("span",{on:{click:t.buy}},[t._t("buy",(function(){return[e("button",{staticClass:"btn btn-lg btn-primary",attrs:{type:"button",disabled:t.hasClickedBuy&&!t.isOnCart}},[t._t("buy-button-content",(function(){return[e("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")]}))],2)]}),null,{hasClickedBuy:t.hasClickedBuy,isOnCart:t.isOnCart})],2)])],1):t._e():e("div",{staticClass:"product__out-of-stock"},[t._t("out-of-stock",(function(){return[t._v(" "+t._s(t.i19outOfStock)+" ")]}))],2),t.isLowQuantity?e("p",{staticClass:"product__short-stock"},[e("i",{staticClass:"i-forward mr-1"}),t._v(" "+t._s(t.i19only)+" "),e("strong",[t._v(t._s(t.productQuantity))]),t._v(" "+t._s(t.i19unitsInStock)+" ")]):t._e()],t._t("sale-timer",(function(){return[t.isOnSale?e("div",{staticClass:"product__sale-timer mb-3"},[e("div",[t._v(" "+t._s(t.i19offer)+" "),e("br"),e("small",[t._v(t._s(t.i19endsIn))])]),e("div",{ref:"timer",staticClass:"h1 ml-3 mb-0"},[t._v(" 00:00:00 ")])]):t._e()]})),t._e(),e("div",{staticClass:"theme-share"},[t._t("share",(function(){return[t.body.slug?e("a-share",{staticClass:"mb-3",attrs:{url:"/"+t.body.slug,title:t.body.name,description:t.body.short_description}}):t._e()]}))],2),e("transition",{attrs:{"enter-active-class":"animated fadeInUp"}},[(!t.isQuickview&&t.paymentOptions.length,t._e())],2),t.body.production_time&&t.body.production_time.days?e("p",{staticClass:"product__production"},[e("i",{staticClass:"i-info-circle mr-1"}),t._v(" "+t._s(t.i19productionDeadline)+": "),e("strong",[t._v(" "+t._s(t.body.production_time.days)+" "+t._s(t.body.production_time.working_days?t.i19workingDays:t.i19days)+" "),t.body.production_time.cumulative?[t._v(" "+t._s(t.i19perUnit)+" ")]:t._e()],2)]):t._e(),t.isQuickview||t.isKit&&!t.kitItems.length?t._e():t._t("shipping",(function(){return[e("shipping-calculator",{attrs:{shippedItems:t.isKit?t.kitItems:[Object.assign({},t.body,t.selectedVariation,{product_id:t.body._id,quantity:t.qntToBuy||t.body.min_quantity||1})]},scopedSlots:t._u([{key:"free-from-value",fn:function(i){var s=i.amountSubtotal,a=i.freeFromValue;return[e("div",{staticClass:"product__free-shipping-from"},[t._v(" "+t._s(t.i19freeShippingFrom)+" "),e("strong",[t._v(" "+t._s(Math.ceil(a/s))+" "+t._s(t.i19units)+" ")])])]}}],null,!1,3999804120)})]})),t._t("track-price",(function(){return[t._m(1)]}))]:e("div",{staticClass:"product__out-of-stock"},[t._t("out-of-stock",(function(){return[t._v(" "+t._s(t.i19outOfStock)+" ")]}))],2):e("div",{staticClass:"product__unavailable"},[t._t("unavailable",(function(){return[t._v(" "+t._s(t.i19unavailable)+" ")]}))],2)],2),!t.isSSR&&t.body.short_description?t._t("short-description",(function(){return[e("p",{staticClass:"product__info lead"},[t._v(" "+t._s(t.body.short_description)+" ")])]})):t._e()],2)],2):t._e()]),!t.isQuickview&&t.hasStickyBuyButton&&t.body.available&&t.isInStock?[e("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut fast"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isStickyBuyVisible,expression:"isStickyBuyVisible"}],ref:"sticky",staticClass:"product__sticky"},[e("div",{staticClass:"product__sticky-container container"},[e("div",{staticClass:"product__sticky-info"},[e("a-picture",{staticClass:"product__sticky-picture",attrs:{"can-calc-height":!1,src:t.thumbnail}}),e("h5",[t._v(t._s(t.name))])],1),e("div",{staticClass:"product__sticky-buy"},[e("a-prices",{attrs:{product:t.ghostProductForPrices,"is-literal":!1,"can-show-price-options":!0}}),e("a",{staticClass:"btn btn-lg btn-primary",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.buyOrScroll.apply(null,arguments)}}},[e("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")])],1)])])])]:t._e(),t.body._id?t._e():t._t("default")],2)},a=[function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"product__rating",attrs:{"data-sku":t.body.sku}})},function(){var t=this,i=t.$createElement;return(t._self._c||i)("div",{staticClass:"product__track-price",attrs:{"data-sku":t.body.sku}})}]},273:function(t,i,e){"use strict";e.d(i,"a",(function(){return s})),e.d(i,"b",(function(){return a}));var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("section",{staticClass:"gallery"},[e("div",{staticClass:"gallery__thumbs"},[t.videoSrc?e("div",{staticClass:"gallery__item gallery__item--video",class:{"gallery__item--selected":t.localPictures.length===t.activeIndex},on:{click:function(i){t.activeIndex=t.localPictures.length}}},[e("i",{staticClass:"i-play"}),e("span",[t._v(t._s(t.i19video))])]):t._e(),t._l(t.localPictures,(function(i,s){return e("div",{key:"img-"+s,staticClass:"gallery__item",class:{"gallery__item--selected":s===t.activeIndex},on:{click:function(i){t.activeIndex=s}}},[s<4?e("a-picture",{staticClass:"gallery__thumb",attrs:{src:t.getImg(i,null,"small")}}):t._e()],1)})),t.localPictures.length>4?e("button",{staticClass:"gallery__open btn btn-dark",style:t.zoomLinkStyle,attrs:{type:"button",title:t.i19openGallery},on:{click:function(i){return i.preventDefault(),t.openZoom(4)}}},[t._v(" +"+t._s(t.localPictures.length-4)+" ")]):t._e()],2),e("div",{staticClass:"gallery__stage"},[e("div",{ref:"glide",staticClass:"glide"},[e("div",{staticClass:"glide__track",attrs:{"data-glide-el":"track"}},[e("ul",{staticClass:"glide__slides"},[t._l(t.localPictures,(function(i,s){return e("li",{key:"slide-"+s,staticClass:"glide__slide"},[e("div",{on:{click:function(i){return t.openZoom(s)}}},[0!==s||t.isSliderMoved?e("a-picture",{staticClass:"gallery__big-image",attrs:{src:t.getImg(i,null,"big")}}):t._t("default",(function(){return[t.elFirstPicture?e("div",{ref:"firstPicture",refInFor:!0,staticClass:"gallery__big-image",style:t.zoomLinkStyle}):e("a-picture",{staticClass:"gallery__big-image",style:t.zoomLinkStyle,attrs:{src:t.getImg(i,null,"big")}})]}))],2)])})),t.videoSrc?e("li",{key:"slide-"+t.localPictures.length,staticClass:"glide__slide"},[e("div",{staticClass:"embed-responsive",class:"embed-responsive-"+t.videoAspectRatio},[t.activeIndex===t.localPictures.length?e("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[e("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t.activeIndex===t.localPictures.length?e("iframe",{staticClass:"embed-responsive-item",attrs:{src:t.videoSrc,allowfullscreen:""}}):t._e()])]):t._e()],2),e("div",{staticClass:"glide__arrows glide__arrows--outer d-md-none d-block",attrs:{"data-glide-el":"controls"}},[e("button",{staticClass:"btn glide__arrow glide__arrow--left circle",attrs:{"data-glide-dir":"<"}},[e("svg",{attrs:{width:"42",height:"44",viewBox:"0 0 42 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{x:"0.399994",width:"41.25",height:"44",rx:"20.625",fill:"white"}}),e("path",{attrs:{d:"M26.1812 33L15.8687 22L26.1812 11",stroke:"#AA644B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]),e("button",{staticClass:"btn glide__arrow glide__arrow--right circle",attrs:{"data-glide-dir":">"}},[e("svg",{attrs:{width:"42",height:"44",viewBox:"0 0 42 44",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("rect",{attrs:{width:"41.25",height:"44",rx:"20.625",transform:"matrix(-1 0 0 1 41.65 0)",fill:"white"}}),e("path",{attrs:{d:"M15.8688 33L26.1813 22L15.8688 11",stroke:"#AA644B","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])])])])]),t._m(4)])},a=[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"pswp__container"},[i("div",{staticClass:"pswp__item"}),i("div",{staticClass:"pswp__item"}),i("div",{staticClass:"pswp__item"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"pswp__preloader"},[i("div",{staticClass:"pswp__preloader__icn"},[i("div",{staticClass:"pswp__preloader__cut"},[i("div",{staticClass:"pswp__preloader__donut"})])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[i("div",{staticClass:"pswp__share-tooltip"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"pswp__caption"},[i("div",{staticClass:"pswp__caption__center"})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"pswp",staticClass:"pswp",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[e("div",{staticClass:"pswp__bg"}),e("div",{staticClass:"pswp__scroll-wrap"},[t._m(0),e("div",{staticClass:"pswp__ui pswp__ui--hidden"},[e("div",{staticClass:"pswp__top-bar"},[e("div",{staticClass:"pswp__counter"}),e("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:t.i19close+" (Esc)"}}),e("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:t.i19share}}),e("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:t.i19fullscreen}}),e("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),t._m(1)]),t._m(2),e("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:t.i19previous}}),e("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:t.i19next}}),t._m(3),t.canAddToCart?e("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.buy}},[e("i",{staticClass:"i-shopping-cart"}),e("span",{staticClass:"d-none d-md-inline ml-1"},[t._v(" "+t._s(t.i19addToCart)+" ")])]):t._e()])])])}]},427:function(t,i,e){"use strict";e.r(i);var s=e(28),a=e(77),n=e(317),r=e(2);i.default=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product";const e=document.getElementById(i);if(e){const o=document.getElementById(`${i}-dock`),c=Boolean(o),{storefront:l}=window;let p,u,d,_;l&&(p=l.getScopedSlots,u=l.context&&l.context.body,d=l.theme&&l.theme.product);const h=()=>{const t=document.getElementById("product-loading");t&&t.remove(),delete e.dataset.toRender};c&&(_=h);const{buyText:m,strHasQuantitySelector:g,strHasPromotionTimer:v,lowQuantityToWarn:f,maxVariationOptionsBtns:y,quoteInfo:b}=t,C=(t,i)=>"_"===t?Boolean(d&&d[i]):!!t&&Boolean(t.trim()),A=t=>{if(t&&-1===t.indexOf("http")){const i=t.replace(/\D/g,"");return"https://"+(r.isMobile?"api":"web")+".whatsapp.com/send?phone="+encodeURIComponent(i)+`&text=Cotar produto: ${encodeURIComponent(window.location.href)}`}return t};new s.a({render:s=>s(n.default,{attrs:{id:o?null:i},props:{...t.props,product:c&&u&&u.available&&Object(a.a)(u)?u:null,buyText:m,hasQuantitySelector:C(g,"hasQuantitySelector"),hasPromotionTimer:C(v,"hasPromotionTimer"),lowQuantityToWarn:f,maxVariationOptionsBtns:y,quoteLink:A(b),isSSR:c},on:{"update:product"(i){c||h(),t.$emit&&t.$emit("update:product",i)}},scopedSlots:Object.assign({buy:t.buy?function(){return s("span",{domProps:{innerHTML:t.buy}})}:void 0},"function"==typeof p?p(e,s,!o):{})}),mounted:_}).$mount(o||e)}}}},0,[40,41]]);
//# sourceMappingURL=chunk.78aececa7ce07444d9f6.js.map