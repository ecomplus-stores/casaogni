(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{238:function(e,i,t){var n=t(249);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,t(163).default)("2e497541",n,!0,{})},240:function(e,i,t){"use strict";var n=t(26),s=t(35),r=t(75);const a="object"==typeof window&&window.propsShippingLine||{};var o={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0},productionDeadline:{type:Number,default:0},getDeadlineStr:{type:Function,default:a.getDeadlineStr}},computed:{deadlineStr(){const e=this.shippingLine,i=e.posting_deadline&&e.posting_deadline.working_days||e.delivery_time&&e.delivery_time.working_days;let t=e.posting_deadline?e.posting_deadline.days:0;if(e.delivery_time&&(t+=e.delivery_time.days),t+=this.productionDeadline,this.getDeadlineStr){const e=this.getDeadlineStr({days:t,isWorkingDays:i,shippingLine:this.shippingLine});if(e)return e}return t>1?`${Object(s.a)(n.ne)} ${t} `+Object(s.a)(i?n.ue:n.gb).toLowerCase():Object(s.a)(1===t?n.me:e.pick_up?n.Zc:n.kd)},freightValueStr(){const{shippingLine:e}=this,i="number"==typeof e.total_price?e.total_price:e.price;return i?Object(r.a)(i):Object(s.a)(e.pick_up?n.Bb:n.Cb)}}},d=(t(248),t(46)),l=Object(d.a)(o,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"shipping-line"},[t("strong",{staticClass:"mr-2"},[e._v(" "+e._s(e.deadlineStr)+" ")]),t("span",{staticClass:"mr-2"},[e._v(" "+e._s(e.freightValueStr)+" ")]),e.shippingLine.delivery_instructions?t("small",[e._v(" "+e._s(e.shippingLine.delivery_instructions)+" ")]):e._e()])}),[],!1,null,null,null);i.a=l.exports},248:function(e,i,t){"use strict";t(238)},249:function(e,i,t){(i=t(162)(!0)).push([e.i,".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--text-muted);display:block;display:-webkit-box;line-height:var(--line-height-sm);overflow:hidden}.active .shipping-line>small{color:inherit}","",{version:3,sources:["ShippingLine.scss"],names:[],mappings:"AAAA,sBAAsB,oBAAoB,CAAC,eAAe,CAAC,oBAAoB,oBAAoB,CAAC,qBAAqB,oBAAoB,CAAC,2BAA2B,CAAC,uBAAuB,CAAC,aAAa,CAAC,mBAAmB,CAAC,iCAAiC,CAAC,eAAe,CAAC,6BAA6B,aAAa",file:"ShippingLine.scss",sourcesContent:[".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--text-muted);display:block;display:-webkit-box;line-height:var(--line-height-sm);overflow:hidden}.active .shipping-line>small{color:inherit}"]}]),e.exports=i},444:function(e,i,t){"use strict";t.r(i);t(6);var n=t(107),s=t(8),r=t(27),a=t(160),o={name:"confirmation",components:{EcOrderInfo:t(270).a},data:()=>({canUpsertCart:!0}),computed:{...Object(n.c)(["orders","customer"]),orderId(){return this.$route.params.id},order:{get(){return this.orders.find((e=>{let{_id:i}=e;return i===this.orderId}))||{_id:this.orderId}},set(e){if(e&&e._id===this.orderId){const i=this.orders.concat(),t=i.find((i=>{let{_id:t}=i;return t===e._id}));t?Object.assign(t,e):i.push(e),this.setOrders(i),this.$route.params.json||this.$router.push({params:{json:encodeURIComponent(JSON.stringify(e))}})}}}},methods:{...Object(n.d)(["addOrder","setOrders","resetCart"]),...Object(n.b)(["saveCustomer"]),handleUpsertCart(){if(this.canUpsertCart){this.canUpsertCart=!1;const{status:e}=this.order;e&&"cancelled"!==e&&(s.a.data.completed=!0,this.orderId&&(s.a.data.orders||(s.a.data.orders=[]),s.a.data.orders.push(this.orderId)),Object(a.c)().then(this.resetCart))}}},created(){const{customer:e}=this;r.default.checkAuthorization()||e.main_email&&e.doc_number&&r.default.fetchLogin(e.main_email,e.doc_number).then((()=>{this.saveCustomer({ecomPassport:r.default}),this.handleUpsertCart()}))},mounted(){r.default.checkAuthorization()&&this.handleUpsertCart()}},d=t(46),l=Object(d.a)(o,(function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"confirmation"}},[t("ec-order-info",{attrs:{order:e.order,isNew:!0},on:{"update:order":function(i){e.order=i}}})],1)}),[],!1,null,null,null);i.default=l.exports}}]);