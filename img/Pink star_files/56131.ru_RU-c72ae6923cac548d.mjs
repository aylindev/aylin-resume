"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[56131,90907],{961239:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CarouselEllipsis_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{args:null,kind:"FragmentSpread",name:"useLogSwipe_pin"},{args:null,kind:"FragmentSpread",name:"usePinCarouselData_pin"}],type:"Pin",abstractKey:null};i.hash="d9fe632f7481dc91f9007bbd592d44c2";let n=i},377520:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CarouselSliders_pin",selections:[{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPdp",storageKey:null},{args:null,kind:"FragmentSpread",name:"useLogSwipe_pin"},{args:null,kind:"FragmentSpread",name:"usePinCarouselData_pin"},{args:null,kind:"FragmentSpread",name:"CarouselEllipsis_pin"}],type:"Pin",abstractKey:null};i.hash="4b0c4a7a095db0d3cc7f22f3f6c85086";let n=i},498594:(e,a,l)=>{var i,n,t;l.r(a),l.d(a,{default:()=>s});let r={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CollageChips_pin",selections:[{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,concreteType:"PinTagChipImagesPerSpec",kind:"LinkedField",name:"pinTagsChips",plural:!0,selections:[{alias:"entityId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"Thumbnails",kind:"LinkedField",name:"image",plural:!1,selections:[i={alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},n={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"CollectionPin",kind:"LinkedField",name:"collectionPin",plural:!1,selections:[{alias:null,args:null,concreteType:"CollectionPinItem",kind:"LinkedField",name:"itemData",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"pinId",storageKey:null},{alias:null,args:[{kind:"Literal",name:"spec",value:"750x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"images",plural:!1,selections:[n,t,i],storageKey:'images(spec:"750x")'}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"CloseupLink_pin"},{alias:null,args:null,kind:"ScalarField",name:"dpaCreativeType",storageKey:null}],type:"Pin",abstractKey:null};r.hash="c167093f5b3fc6181bc8b26792c3248c";let s=r},498896:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetStringifiedCommerceAuxData_pin",selections:[{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin2"}],type:"Pin",abstractKey:null};i.hash="6016b14b2081c4349ad3f3a910cc2ea7";let n=i},157485:(e,a,l)=>{var i;l.r(a),l.d(a,{default:()=>t});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetStringifiedCommerceAuxData_pin2",selections:[{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPdp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isOosProduct",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isStaleProduct",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"Brand",kind:"LinkedField",name:"brand",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"signature",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ShippingInfo",kind:"LinkedField",name:"shippingInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"freeShippingPrice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"freeShippingValue",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariantSet",kind:"LinkedField",name:"variantSet",plural:!1,selections:[{alias:null,args:null,concreteType:"DimensionMetadata",kind:"LinkedField",name:"dimensionMetadata",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"values",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariant",kind:"LinkedField",name:"variants",plural:!0,selections:i=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemSetId",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shoppingFlags",storageKey:null},{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isShopTheLook",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:i,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null}],type:"Pin",abstractKey:null};n.hash="4ffad4c63399ee2e54c9a3a86d114984";let t=n},22691:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useLogSwipe_pin",selections:[{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin"}],type:"Pin",abstractKey:null};i.hash="dbfca9820e0aa1302554a0137a270b16";let n=i},817985:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePinCarouselData_pin",selections:[{args:null,kind:"FragmentSpread",name:"usePinDefaultCarouselData_pin"},{args:null,kind:"FragmentSpread",name:"usePinProductCarouselData_pin"}],type:"Pin",abstractKey:null};i.hash="461a57fcc8f7958e3742c217e4cc45a2";let n=i},644566:(e,a,l)=>{var i;l.r(a),l.d(a,{default:()=>t});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePinDefaultCarouselData_pin",selections:[{alias:null,args:null,concreteType:"PinCarouselData",kind:"LinkedField",name:"carouselData",plural:!1,selections:[{alias:null,args:null,concreteType:"PinCarouselSlot",kind:"LinkedField",name:"carouselSlots",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"details",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageSignature",storageKey:null},{alias:"image236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"images",plural:!1,selections:i=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:'images(spec:"236x")'},{alias:"image474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"474x")'},{alias:"image564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"564x")'},{alias:"image736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"Thumbnails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"736x")'},{alias:"slotId",args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"title",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"entityId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"index",storageKey:null}],storageKey:null}],type:"Pin",abstractKey:null};n.hash="a3cbf6d55cf89d97d6e04c32195968d9";let t=n},537695:(e,a,l)=>{var i,n;l.r(a),l.d(a,{default:()=>r});let t={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"usePinProductCarouselData_pin",selections:[{alias:"image236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i=[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:'images(spec:"236x")'},{alias:"image474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"474x")'},{alias:"image564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"564x")'},{alias:"image736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"ImageDetails",kind:"LinkedField",name:"images",plural:!1,selections:i,storageKey:'images(spec:"736x")'},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:n=[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:"productId",args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"useRichPinProductMetadataCarouselSlots_richPinProductMetadata"}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:n,storageKey:null}],type:"Pin",abstractKey:null};t.hash="6588018e2880f2695fc6c4ba45aab606";let r=t},855237:(e,a,l)=>{var i;l.r(a),l.d(a,{default:()=>t});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useRichPinProductMetadataCarouselSlots_richPinProductMetadata",selections:[{alias:"image236x",args:[{kind:"Literal",name:"spec",value:"236x"}],concreteType:"AdditionalImagesPerSpec",kind:"LinkedField",name:"additionalImagesPerSpec",plural:!0,selections:i=[{alias:null,args:null,concreteType:"Thumbnails",kind:"LinkedField",name:"canonicalImage",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"imageSignature",storageKey:null}],storageKey:'additionalImagesPerSpec(spec:"236x")'},{alias:"image474x",args:[{kind:"Literal",name:"spec",value:"474x"}],concreteType:"AdditionalImagesPerSpec",kind:"LinkedField",name:"additionalImagesPerSpec",plural:!0,selections:i,storageKey:'additionalImagesPerSpec(spec:"474x")'},{alias:"image564x",args:[{kind:"Literal",name:"spec",value:"564x"}],concreteType:"AdditionalImagesPerSpec",kind:"LinkedField",name:"additionalImagesPerSpec",plural:!0,selections:i,storageKey:'additionalImagesPerSpec(spec:"564x")'},{alias:"image736x",args:[{kind:"Literal",name:"spec",value:"736x"}],concreteType:"AdditionalImagesPerSpec",kind:"LinkedField",name:"additionalImagesPerSpec",plural:!0,selections:i,storageKey:'additionalImagesPerSpec(spec:"736x")'}],type:"RichPinProductMetadata",abstractKey:null};n.hash="b49953855cdc69f6ee2c8d4925149d23";let t=n},598356:(e,a,l)=>{l.d(a,{Xx:()=>t});var i=l(667294);l(785893),(0,i.createContext)(void 0),l(214877);let n=(0,i.createContext)(void 0),t=()=>(0,i.useContext)(n)},663056:(e,a,l)=>{l.d(a,{P:()=>y,Z:()=>h}),l(167912);var i,n,t,r,s=l(986631);let d=void 0!==i?i:i=l(644566),u=void 0!==n?n:n=l(855237);var o=l(91402),c=l(953565);let g=void 0!==t?t:t=l(537695),p=!1,m=void 0!==r?r:r=l(817985);function h(e){let a=(0,s.Z)(m,e),l=function(e){let a=(0,s.Z)(d,e);return a?.carouselData?{index:a.carouselData.index,carouselId:a.carouselData.entityId,carouselSlots:a.carouselData.carouselSlots?.map(e=>({details:e.details,imageSignature:e.imageSignature,imageSizeMap:{"236x":e.image236x&&{height:e.image236x.height,url:e.image236x.url,width:e.image236x.width},"474x":e.image474x&&{height:e.image474x.height,url:e.image474x.url,width:e.image474x.width},"564x":e.image564x&&{height:e.image564x.height,url:e.image564x.url,width:e.image564x.width},"736x":e.image736x&&{height:e.image736x.height,url:e.image736x.url,width:e.image736x.width}},slotId:e.slotId,title:e.title}))??[]}:null}(a),i=function({pinKey:e,index:a}){let l=(0,s.Z)(g,e),i=(l?.richMetadata||l?.richSummary)?.products?.[0]||null,n=(l?.richMetadata?.products?.length??0)+(l?.richSummary?.products?.length??0);if(null!=e&&n>1&&!p){p=!0;let a=(0,o.oy)(e);(0,c.nP)("autoLegacyAdapter.overfetch.usePinProductCarouselData_pin",{sampleRate:.1,tags:{totalLength:n,isGraphQL:"GraphQL"===a}})}let t=function(e){let a=(0,s.Z)(u,e);if(!a)return[];let l={},{image236x:i,image474x:n,image564x:t,image736x:r}=a;return[[i,"236x"],[n,"474x"],[t,"564x"],[r,"736x"]].forEach(([e,a])=>{(Array.isArray(e)?e:[]).forEach(({canonicalImage:e,imageSignature:i})=>{i&&e&&(l={...l,[i]:{...l[i],[a]:{height:e.height,url:e.url,width:e.width}}})})}),Object.entries(l).map(([e,a])=>({imageSignature:e,imageSizeMap:a}))}(i);return i&&t.length?{carouselId:i.productId,carouselSlots:[{imageSignature:null,imageSizeMap:{"236x":l?.image236x&&{height:l.image236x.height,url:l.image236x.url,width:l.image236x.width},"474x":l?.image474x&&{height:l.image474x.height,url:l.image474x.url,width:l.image474x.width},"564x":l?.image564x&&{height:l.image564x.height,url:l.image564x.url,width:l.image564x.width},"736x":l?.image736x&&{height:l.image736x.height,url:l.image736x.url,width:l.image736x.width}}},...t],index:a}:null}({pinKey:a,index:l?.index});return i?{...i,carouselSlots:i.carouselSlots.map(e=>({...e,details:null,slotId:null,title:null}))}:l}function y({children:e,pinKey:a}){return e(h(a))}},190971:(e,a,l)=>{l.d(a,{c:()=>g});var i=l(667294),n=l(616550),t=l(839391),r=l(741983),s=l(624797),d=l(554786);let u=(e,a)=>((0,r.XU)(e)&&e.state?.from&&(e=e.state.from),(0,r.HV)(e))?a?1000503:1000558:(0,r.En)(e)?a?1000506:1000559:(0,r.L6)(e)?a?1000141:1000494:void 0,o=(e,a)=>{if(a&&(0,r.L6)(e))return 1000564},c=(e,a)=>{if(a){if((0,r.HV)(e))return 1000541;if((0,r.En)(e))return 1000542;if((0,r.L6)(e))return 1000140}else if((0,r.HV)(e))return 1000544;else if((0,r.En)(e))return 1000543;else if((0,r.L6)(e))return 1000540},g=()=>{let{mountPlacement:e,registerdAfterActionPlacements:a}=(0,t.Z)(),l=(0,d.HG)(),g=(0,n.TH)();return(0,i.useCallback)((i,n,t)=>{let d;switch(i){case"Save":d=n?.isRepinTakeover?1000578:u(g,l);break;case"Download":(0,r.L6)(g)&&(d=l?1000499:1000500);break;case"Clickthrough":d=c(g,l);break;case"NoAction":d=o(g,l)}null!=d&&((0,r.En)(g)&&(n={...n,search_query:(0,s.mB)(g.search)}),null!=d&&(a[d]||(0,r.XU)(g))&&e(d,n,t))},[a,e,g,l])}},807023:(e,a,l)=>{l.d(a,{Q:()=>r});var i=l(167912),n=l(91402),t=l(333739);function r(e,a,{useLegacyAdapter:l}){if(null==a)return{data:null,childDataKey__DEPRECATED:null};let r=(0,n.jc)(a);if("deprecated"===r.type){let{data:a}=r;return null==a?{data:null,childDataKey__DEPRECATED:r}:{data:(0,t.V4)(e,l)(a),childDataKey__DEPRECATED:r}}let s=(0,i.useFragment)(e,r.data);return{data:s,childDataKey__DEPRECATED:{type:"graphqlRef",data:s}}}},551501:(e,a,l)=>{l.d(a,{Z:()=>r});var i=l(658583),n=l(622541),t=l(337478);function r(e,a){let l=Math.round(1e3*Math.random())+"",r=Math.round(1e3*Math.random())+"";i.t8((0,n.GS)(l),r);let s={token:`${l}-${r}`,url:e,...a&&!a.params?a.queryParams:a?.params&&{pin:a.params.pinId??void 0,isThirdPartyAd:a.params.isThirdPartyAd??void 0,csr:a.params.csrId&&!a.params.pinId?a.params.csrId:void 0,client_tracking_params:a.params.clientTrackingParams,aux_data:a.params.auxData?JSON.stringify(a.params.auxData):void 0}};return`/offsite/?${(0,t.Z)(s)}`}},979606:(e,a,l)=>{l.d(a,{Z:()=>u});var i=l(29156),n=l(460270);let t=e=>"string"!=typeof e&&e?e.state:null;var r=l(940910),s=l(998449),d=l(797258);let u=({event:e,onHistoryChange:a,href:l,history:u,target:o})=>{let c=(0,n.Z)(l),g=t(l)??{},p=(0,r.Z)(c);p===d.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===o?(0,i.Z)(c,"blank"===o):u&&p===d.Z.SAME_ORIGIN&&(u.push((0,s.Z)({url:c}),{from:u.location,...g}),a&&a({event:e}))}},931090:(e,a,l)=>{l.d(a,{Z:()=>t});var i=l(29156),n=l(551501);function t(e,a){(0,i.Z)((0,n.Z)(e,a),!0,a?.features)}},546213:(e,a,l)=>{l.d(a,{Qy:()=>u,Wu:()=>c,ZP:()=>o});var i=l(616550),n=l(883119),t=l(5859),r=l(624797),s=l(149722),d=l(785893);let u=()=>{let e=(0,s.Z)(),{isInternalIP:a}=(0,t.B)(),l=(0,i.TH)();return(a||e.isAuth&&e.isEmployee)&&Object.keys((0,r.mB)(l.search)).some(e=>e.startsWith("deb_"))};function o({data:e}){return(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{border:"2px solid red"}},"data-test-id":"debug-info",overflow:"auto",children:(0,d.jsx)("pre",{children:JSON.stringify(e,null,2).replace(/\\n/g,"\n")})})}let c=e=>(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{marginTop:10}},width:236,children:(0,d.jsx)(o,{...e})})},998449:(e,a,l)=>{l.d(a,{Z:()=>t});let i=(e,a)=>0===e.lastIndexOf(a,0);var n=l(885896);let t=({url:e})=>{let a=(0,n.Z)("/");return i(e,a)?e.substr(a.length-1):e}},268127:(e,a,l)=>{l.d(a,{Y:()=>p,Z:()=>m});var i,n,t=l(667294);l(167912);var r=l(333739),s=l(807023);let d=void 0!==i?i:i=l(498896),u=void 0!==n?n:n=l(157485),o=e=>{let a=Symbol("SKIP"),l=e=>Object.entries(e).filter(([,e])=>e!==a).reduce((e,[a,l])=>({...e,[a]:l}),{});if("deprecated"!==e.type){let i=e.data;return l({...i.isEligibleForPdp||i.isOosProduct||i.isStaleProduct?{...(()=>{let e=i.richMetadata?.products?.[0];return{carousel_image_count:a,brand_signature:e?.brand?.signature||a,free_shipping_price:e?.shippingInfo?.freeShippingPrice||a,free_shipping_value:e?.shippingInfo?.freeShippingValue||a,num_variants:e?.variantSet?.variants?.length||a,total_dimension_option_count:e?.variantSet?.dimensionMetadata?.length||a,valid_dimension_option_count:a}})(),pin_show_pdp_oos:!!i.isOosProduct||a,pin_show_pdp_stale:!!i.isStaleProduct||a,pin_show_pdp:!!i.isEligibleForPdp||a}:{},pin_is_shop_the_look:!!(i.shoppingFlags?.includes(2)||i.aggregatedPinData?.isShopTheLook)||a,is_available:!!i.shoppingFlags?.includes(1)||a,is_product_pin_v2:!!i.shoppingFlags?.includes(5)||a,is_rich_product_pin:!!i.shoppingFlags?.includes(6)||a,is_organic_product_carousel:a,item_id:(i.richSummary?.products?.[0]||{}).itemId||a,item_set_id:(i.richSummary?.products?.[0]||{}).itemSetId||a,story_pin_id:i.storyPinData?i.storyPinDataId:a})}{let i=e.data;return i?l({...i.is_eligible_for_pdp||i.is_oos_product||i.is_stale_product?{...(()=>{let e=(i.rich_metadata||i.rich_summary)?.products?.[0],l=e?.additional_images?.length?(i.images?1:0)+e.additional_images.length:i.carousel_data?.carousel_slots?.length,n=i.rich_metadata?.products?.[0],t=n?.variant_set?.variants??[];return{carousel_image_count:l||a,brand_signature:n?.brand?.signature||a,free_shipping_price:n?.shipping_info?.free_shipping_price||a,free_shipping_value:n?.shipping_info?.free_shipping_value||a,num_variants:t.length||a,total_dimension_option_count:n?.variant_set?.dimension_metadata?.length||a,valid_dimension_option_count:(n?.variant_set?.dimension_metadata||[]).reduce((e,{name:a,values:l})=>e+(a&&l||[]).filter(e=>t.some(l=>l.dimensions?.[a??""]===e)).length,0)||a}})(),pin_show_pdp_oos:!!i.is_oos_product||a,pin_show_pdp_stale:!!i.is_stale_product||a,pin_show_pdp:!!i.is_eligible_for_pdp||a}:{},pin_is_shop_the_look:!!(i.shopping_flags?.includes(2)||i.aggregated_pin_data?.is_shop_the_look)||a,is_available:!!i.shopping_flags?.includes(1)||a,is_product_pin_v2:!!i.shopping_flags?.includes(5)||a,is_rich_product_pin:!!i.shopping_flags?.includes(6)||a,is_organic_product_carousel:!!(i.shopping_flags?.includes(10)||(i.product_pin_data?.items?.[0]||{}).additional_images)||a,item_id:(i.rich_summary?.products?.[0]||{}).item_id||a,item_set_id:(i.rich_summary?.products?.[0]||{}).item_set_id||a,story_pin_id:i.story_pin_data?i.story_pin_data_id:a}):{}}},c=e=>0===Object.keys(e).length?{}:{commerce_data:JSON.stringify(e)},g=e=>{let{childDataKey__DEPRECATED:a}=(0,s.Q)(d,e,{useLegacyAdapter:e=>({})}),{childDataKey__DEPRECATED:l}=(0,r.Zm)(u,null==a?{type:"deprecated",data:null}:a,{useGraphQLAdapter:e=>e,useLegacyAdapter:e=>e}),i=(0,t.useRef)(l);return(0,t.useEffect)(()=>{i.current=l}),(0,t.useCallback)(e=>c({...e?.default,...o(i.current),...e?.override}),[])},p=({children:e,pinKey:a})=>e(g(a)),m=g},171966:(e,a,l)=>{l.d(a,{Z:()=>t});var i=l(372085),n=l(931090);function t(e,a){let{auxData:l,clientTrackingParams:t,hasPin:r,pinId:s,isThirdPartyAd:d}=a||{},u={pin_id:s,check_only:!0,client_tracking_params:r?t:void 0,url:e,aux_data:JSON.stringify(l)};d&&(u.third_party_ad=s,delete u.pin_id),(0,i.Z)({url:"/v3/offsite/",data:u}).then(a=>{if(a&&a.resource_response&&!a.resource_response.error){let{resource_response:e}=a,{redirect_status:l,url:i}=e.data;if(!["blocked","suspicious","porn"].includes(l)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(i);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,n.Z)(e,{params:r?{pinId:s,clientTrackingParams:t,auxData:l,isThirdPartyAd:d}:{pinId:s}})})}},392071:(e,a,l)=>{l.d(a,{Z:()=>c}),l(167912);var i,n=l(883119),t=l(986631),r=l(340523),s=l(338813),d=l(785893);let u={chip:{marginRight:1,flex:"1 1 0"},chipInner:{paddingBottom:"100%"},chipContainer:{marginRight:-1}},o=void 0!==i?i:i=l(498594);function c({pinKey:e,enableCloseupLink:a}){let l=(0,t.Z)(o,e),{checkExperiment:i}=(0,r.F)(),{anyEnabled:c}=i("aid_web_collection_pin_data"),{aggregatedPinData:g,collectionPin:p,dpaCreativeType:m}=l,{pinTagsChips:h}=g||{},{itemData:y}=p||{},_=h&&h.length>=3?h.slice(0,3):[],x=y&&y.length>=3?y.slice(0,3):[];return c&&!m?(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:u.chipContainer},display:"flex",children:x.map(e=>{let i=e.images||{},t=(0,d.jsx)(n.Ee,{alt:"",fit:"cover",naturalHeight:i.height??1,naturalWidth:i.width??1,role:"presentation",src:i.url??""});return(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:u.chip},"data-test-id":"collageChip",children:(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:u.chipInner},position:"relative",children:(0,d.jsx)(n.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,children:(0,d.jsx)(n.zd,{height:"100%",wash:!0,width:"100%",children:a?(0,d.jsx)(s.Z,{collageChipId:e.pinId??"",pinKey:l,sizing:"fullSize",children:t}):t})})})},e.pinId)})}):(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:u.chipContainer},display:"flex",children:_.map(e=>{let i=e.image||{},t=(0,d.jsx)(n.Ee,{alt:"",fit:"cover",naturalHeight:i.height??1,naturalWidth:i.width??1,role:"presentation",src:i.url??""});return(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:u.chip},"data-test-id":"collageChip",children:(0,d.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:u.chipInner},position:"relative",children:(0,d.jsx)(n.xu,{bottom:!0,left:!0,position:"absolute",right:!0,top:!0,children:(0,d.jsx)(n.zd,{height:"100%",wash:!0,width:"100%",children:a?(0,d.jsx)(s.Z,{collageChipId:e.entityId??"",pinKey:l,sizing:"fullSize",children:t}):t})})})},e.entityId)})})}},879977:(e,a,l)=>{l.d(a,{B:()=>i,E:()=>n});let{Provider:i,useHook:n}=(0,l(342513).Z)("trackingParametersContext")},28156:(e,a,l)=>{l.r(a),l.d(a,{default:()=>p});var i,n=l(545007);l(167912);var t=l(883119),r=l(663056),s=l(986631),d=l(923368),u=l(256963),o=l(409403),c=l(785893);let g=void 0!==i?i:i=l(961239);function p({carouselData:e,carouselIndex:a,componentType:l,contextLogData:i,enablePagination:p=!1,handleCarouselSwipe:m,isCloseup:h,isEditMode:y,itemsPerPage:_,pinKey:x,viewParameter:S,viewType:k,variant:f}){let v=(0,s.Z)(g,x),P=(0,u.Z)(v),I=(0,r.Z)(v),F=e||I&&{carouselSlots:I.carouselSlots.map(({slotId:e,title:a})=>({id:e,title:a})),entityId:I.carouselId??"",index:I.index},D=(0,n.I0)();if(!F)return null;let K=(e,a,n)=>{y||void 0===o.yR||(e.preventDefault(),e.stopPropagation(),D((0,o.yR)(v?.entityId??"",n))),void 0!==m&&m(n),P({pinId:v?.entityId??"",currentIndex:a??0,nextIndex:n,carouselData:{carouselSlots:F.carouselSlots?.map(e=>({id:e.id})),entityId:F.entityId},viewParameter:S,viewType:k,componentType:l,contextLogData:i,isEditMode:y})},{carouselSlots:b,index:w}=F,L="number"==typeof a?a:w,C=b?.length&&_?Math.ceil(b?.length/_):void 0,E="default"===f,T=E?"white":"#555",A=E?"rgba(255, 255, 255, 0.5)":"lightGray",j=(e,a)=>(0,c.jsx)(t.xu,{paddingX:1,children:(0,c.jsx)(t.iP,{accessibilityLabel:(e||{}).title??"",fullWidth:!1,onTap:({event:e})=>K(e,L,a),rounding:"circle",children:(0,c.jsx)(t.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:a===L?T:A}},"data-test-id":"ellipsis-size",height:8,rounding:"circle",width:8})})},`${e?.id}-${a}`);return(0,c.jsx)(d.ZP.Consumer,{children:({closeupWithinMasonryEnabled:e,viewportSize:a})=>"sm"===a&&(e&&14339!==l&&14394!==l||!e)?null:b&&(0,c.jsx)(t.xu,{alignItems:"center","data-test-id":"carousel-ellipsis",display:"flex",justifyContent:h?"end":"center",paddingY:y?1:0,children:p?_&&[...Array(C).keys()].map(e=>j(b[e*_],e*_)):[...Array(b.length).keys()].map(e=>j(b[e],e))})})}},419128:(e,a,l)=>{l.r(a),l.d(a,{default:()=>x});var i,n=l(545007);l(167912);var t=l(883119),r=l(663056),s=l(986631),d=l(140017),u=l(923368),o=l(28156),c=l(256963),g=l(409403),p=l(785893);let m={cursor:"pointer",padding:"30px 16px",position:"relative",zIndex:1},h={cursor:"pointer",margin:"30px 16px 90px 16px",position:"relative",zIndex:1},y=(e,a,l,i,n,t)=>{t||void 0===i||(e.preventDefault(),e.stopPropagation(),i(a,l)),void 0!==n&&n(l)},_=void 0!==i?i:i=l(377520);function x({addEllipsis:e,alwaysShowNavigationArrows:a,carouselIndex:l,carouselData:i,ellipsisVariant:x,handleCarouselSwipe:S,height:k,isShowingLastSlide:f,pinKey:v,contextLogData:P,viewParameter:I,viewType:F,componentType:D,isEditMode:K,storyType:b,itemsPerPage:w,forwardNode:L,backNode:C,sliderStyleOverride:E,hideNavigationArrows:T}){let A=(0,d.ZP)(),j=(0,n.I0)(),{closeupWithinMasonryEnabled:Z}=(0,u.x4)(),O=(0,s.Z)(_,v),R=(0,c.Z)(O),M=(0,r.Z)(O),N=i||M&&{carouselSlots:M.carouselSlots.map(({slotId:e,title:a})=>({id:e,title:a})),entityId:M.carouselId??"",index:M.index};if(!N)return null;let H=(e,a)=>j((0,g.yR)(e,a)),{carouselSlots:G,index:B}=N,U=void 0!==l?l:B??0,W=Math.max(0,U-(w??1)),V=Math.min((G??[]).length-1,U+(w??1)),z=0===U,J=f||U===(G??[]).length-1,Q=(e,a)=>{let l=a<U?9315:9316,i="search_3p_ad_only_module"===b;y(e,O?.entityId??"",a,H,S,K),R({pinId:O?.entityId??"",currentIndex:U,nextIndex:a,carouselData:{carouselSlots:G?.map(({id:e})=>({id:e})),entityId:N.entityId},viewParameter:I,viewType:F,storyType:b,componentType:D,contextLogData:P,isEditMode:K,isEligibleForPdp:O?.isEligibleForPdp??!1,swipeEvent:i?l:108})},X=C||(0,p.jsx)(t.JO,{accessibilityLabel:A.bt("Просмотреть предыдущее изображение", "View Previous", "Button to advance carousel to the previous image", undefined, true),color:"inverse",icon:"arrow-back"}),Y=T?null:L||(0,p.jsx)(t.JO,{accessibilityLabel:A.bt("Просмотреть следующее изображение", "View Next", "Button to advance carousel to the next image", undefined, true),color:"inverse",icon:"arrow-forward"}),$=Z?h:m;return(0,p.jsxs)(t.xu,{alignItems:"center",bottom:!k,"data-test-id":"carousel-sliders",display:"flex",height:k,justifyContent:T?"center":"between",left:!0,position:"absolute",right:!0,top:!0,children:[!T&&(0,p.jsx)("div",{"data-test-id":"carousel-slider-left",onClick:e=>{Q(e,W)},onKeyUp:e=>{Q(e,W)},role:"presentation",style:{...$,...E,pointerEvents:z?"none":"auto"},children:(0,p.jsx)(t.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{visibility:z&&!a?"hidden":"visible",opacity:z&&a?"50%":"100%"}},display:"flex",height:"100%",justifyContent:"center",width:"100%",children:X})}),e&&(0,p.jsx)(o.default,{carouselData:{carouselSlots:N.carouselSlots?.map(({id:e,title:a})=>({id:e,title:a})),entityId:N.entityId,index:N.index},carouselIndex:l,componentType:D,handleCarouselSwipe:S,itemsPerPage:w,pinKey:O,variant:x||"default",viewParameter:I,viewType:F}),!T&&(0,p.jsx)("div",{"data-test-id":"carousel-slider-right",onClick:e=>{Q(e,V)},onKeyUp:e=>{Q(e,V)},role:"presentation",style:{...$,...E,pointerEvents:J?"none":"auto"},children:(0,p.jsx)(t.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{visibility:J&&!a?"hidden":"visible",opacity:J&&a?"50%":"100%"}},"data-test-id":"carousel-slider-right-box",display:"flex",height:"100%",justifyContent:"center",width:"100%",children:Y})})]})}},256963:(e,a,l)=>{l.d(a,{Z:()=>d}),l(167912);var i,n=l(214877),t=l(986631),r=l(268127);let s=void 0!==i?i:i=l(22691);function d(e){let{logContextEvent:a}=(0,n.v)(),l=(0,t.Z)(s,e),i=(0,r.Z)(l);return function({pinId:e,currentIndex:l,nextIndex:n,carouselData:t,viewParameter:r,viewType:s,storyType:d,componentType:u,contextLogData:o,isEditMode:c,swipeEvent:g}){if(!c){let{carouselSlots:c,entityId:p}=t,{objectIdStr:m,...h}=o??{};a({event_type:g??108,object_id_str:e??m,component:u,view_type:s,view_parameter:r,event_data:{pinCarouselSlotEventData:{carouselSlotId:c?.[l]&&Number(c[l].id),carouselDataId:Number(p),carouselSlotIndex:l,toCarouselSlotIndex:n}},aux_data:{story_type:d,...h,...i()}})}}}},622155:(e,a,l)=>{l.d(a,{_l:()=>S,cO:()=>x,t2:()=>k,w2:()=>f,xM:()=>_});var i=l(667294),n=l(616550),t=l(216167),r=l(741983),s=l(624797),d=l(554786),u=l(149722),o=l(785893);let c="UnauthDesktopSocialPinLandingPageContext",g="AthDesktopSocialPinLandingPageContext",p="AuthMobileSocialPinLandingPageContext",m=(0,i.createContext)(),h=({children:e})=>{let[a,l]=(0,i.useState)(!1),[n,t]=(0,i.useState)(!1),r=(0,i.useMemo)(()=>({hasSeenAuthMobileLandingToast:a,setHasSeenAuthMobileLandingToast:l,hasSeenAuthDesktopLandingToast:n,setHasSeenAuthDesktopLandingToast:t}),[a,l,n,t]);return(0,o.jsx)(m.Provider,{value:r,children:e})},y=(0,i.createContext)({key:"",data:null}),_=({children:e})=>{let a=(0,n.TH)(),l=(0,u.Z)(),m=l&&l.isAuth,_=(0,d.HG)(),x=(0,i.useRef)((0,r.fY)(a)&&(0,s.mB)(a.search).invite_code||null),S=(0,n.LX)(a.pathname,{path:"/pin/:id"}),k=S&&S.params.id||"",[f,v]=(0,i.useState)({key:"",data:null});return(0,i.useEffect)(()=>{(async function(){let e=x.current;if(e)try{let a=t.Z.create("InviteCodeMetadataResource",{invite_code:e}),i=(await a.callGet()).resource_response.data;if(i){let e=i.sender??null,a=m&&e.id!==l.id&&e?.should_show_messaging&&l.should_show_messaging;!m&&_?v({key:c,data:{inviter:e,popoverData:e&&![5,9,12,16].includes(i.invite_channel)?{inviterAvatarUrl:e.image_medium_url||"",inviterName:e.first_name||e.full_name}:null}}):a&&!_?v({key:p,data:{toastData:{inviter:{inviterAvatarUrl:e.image_medium_url||"",inviterName:e.first_name||e.full_name,inviterId:e.id},viewer:{viewerId:l.id||""},pin:{pinId:k}}}}):a&&_&&v({key:g,data:{toastData:{inviter:{inviterAvatarUrl:e.image_medium_url||"",inviterName:e.first_name||e.full_name,inviterId:e.id},viewer:{viewerId:l.id||""},pin:{pinId:k}}}})}else v({key:"",data:null})}catch{v({key:"",data:null})}})()},[m,_,l.id,k,l.should_show_messaging]),(0,o.jsx)(h,{children:(0,o.jsx)(y.Provider,{value:f,children:e})})},x=()=>{let e=(0,i.useContext)(y);return e.key===c?e:null},S=()=>{let e=(0,i.useContext)(y);return e.key===p?e:null},k=()=>{let e=(0,i.useContext)(y);return e.key===g?e:null},f=()=>(0,i.useContext)(m)},409403:(e,a,l)=>{function i(e,a){return{type:"CHANGE_CAROUSEL_SLOT_INDEX",payload:{id:e,index:a}}}function n(e,a){return{type:"SET_PIN_COMMENTS_DISABLED",payload:{id:e,pinCommentsDisabled:a}}}function t(e){return{type:"PIN_SAVE",payload:e}}function r(e,a){return{type:"PIN_UNSAVE",payload:{id:e,nodeId:a}}}function s(e){return{type:"PIN_SHOW_SUGGESTED_CREATOR_RECS",payload:{id:e,value:!0}}}function d({id:e,nodeId:a}){return{type:"PIN_SHOW_FEEDBACK",payload:{id:e,value:!1,nodeId:a}}}function u({id:e,text:a,nodeId:l}){return{type:"PIN_SHOW_FEEDBACK",payload:{id:e,value:!0,text:a,nodeId:l}}}function o({id:e,nodeId:a}){return{type:"PIN_SHOW_FEEDBACK_OVERLAY",payload:{id:e,value:!0,nodeId:a}}}function c({id:e,nodeId:a}){return{type:"PIN_SHOW_FEEDBACK_OVERLAY",payload:{id:e,value:!1,nodeId:a}}}function g(e){return{type:"PIN_SHOW_AD_REASONS_MODAL",payload:{id:e,value:!0}}}function p(e){return{payload:{id:e,value:!1},type:"PIN_SHOW_AD_REASONS_MODAL"}}l.d(a,{Gb:()=>r,I1:()=>d,Ib:()=>o,Ur:()=>t,Vw:()=>s,b9:()=>g,i0:()=>c,mO:()=>n,q1:()=>u,yR:()=>i,yj:()=>p})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/56131.ru_RU-c72ae6923cac548d.mjs.map