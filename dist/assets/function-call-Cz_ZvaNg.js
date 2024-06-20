import{C as I,d as B,M as k,aB as T,aZ as z,a as l,P as O,a4 as M,G as g,D as v,a_ as L,a2 as w,I as N,L as j,ac as U,a$ as A,s as D,Y as C,as as E,aR as V,r as _,aL as q}from"./index-DOklq4cR.js";import{u as G}from"./use-expose-Ds_Trjn3.js";import{P as H}from"./index-BbiEO6h5.js";let d=0;function R(e){e?(d||document.body.classList.add("van-toast--unclickable"),d++):d&&(d--,d||document.body.classList.remove("van-toast--unclickable"))}const[Y,c]=I("toast"),Z=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],$={icon:String,show:Boolean,type:g("text"),overlay:Boolean,message:v,iconSize:v,duration:L(2e3),position:g("middle"),teleport:[String,Object],wordBreak:String,className:w,iconPrefix:String,transition:g("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:w,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:v};var F=B({name:Y,props:$,emits:["update:show"],setup(e,{emit:n,slots:t}){let i,o=!1;const r=()=>{const a=e.show&&e.forbidClick;o!==a&&(o=a,R(o))},u=a=>n("update:show",a),y=()=>{e.closeOnClick&&u(!1)},f=()=>clearTimeout(i),m=()=>{const{icon:a,type:s,iconSize:h,iconPrefix:P,loadingType:x}=e;if(a||s==="success"||s==="fail")return l(N,{name:a||s,size:h,class:c("icon"),classPrefix:P},null);if(s==="loading")return l(j,{class:c("loading"),size:h,type:x},null)},S=()=>{const{type:a,message:s}=e;if(t.message)return l("div",{class:c("text")},[t.message()]);if(U(s)&&s!=="")return a==="html"?l("div",{key:0,class:c("text"),innerHTML:String(s)},null):l("div",{class:c("text")},[s])};return k(()=>[e.show,e.forbidClick],r),k(()=>[e.show,e.type,e.message,e.duration],()=>{f(),e.show&&e.duration>0&&(i=setTimeout(()=>{u(!1)},e.duration))}),T(r),z(r),()=>l(H,O({class:[c([e.position,e.wordBreak==="normal"?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:y,onClosed:f,"onUpdate:show":u},M(e,Z)),{default:()=>[m(),S()]})}});function J(){const e=D({show:!1}),n=o=>{e.show=o},t=o=>{C(e,o,{transitionAppear:!0}),n(!0)},i=()=>n(!1);return G({open:t,close:i,toggle:n}),{open:t,close:i,state:e,toggle:n}}function K(e){const n=A(e),t=document.createElement("div");return document.body.appendChild(t),{instance:n.mount(t),unmount(){n.unmount(),document.body.removeChild(t)}}}const Q={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let p=[],W=!1,b=C({},Q);const X=new Map;function ee(e){return V(e)?e:{message:e}}function te(){const{instance:e,unmount:n}=K({setup(){const t=_(""),{open:i,state:o,close:r,toggle:u}=J(),y=()=>{},f=()=>l(F,O(o,{onClosed:y,"onUpdate:show":u}),null);return k(t,m=>{o.message=m}),q().render=f,{open:i,close:r,message:t}}});return e}function ne(){if(!p.length||W){const e=te();p.push(e)}return p[p.length-1]}function le(e={}){if(!E)return{};const n=ne(),t=ee(e);return n.open(C({},b,X.get(t.type||b.type),t)),n}export{le as a,F as s};
