import{aP as he,aD as be,aQ as ve,a7 as ye,aR as Ie,C as Se,D as _,G as M,H as Ce,Y as Ve,a2 as ke,d as xe,s as Ee,r as P,a0 as Me,K as I,aH as we,M as Te,aB as Le,ab as E,ag as Pe,a as d,W as Ae,ac as S,aS as Re,E as A,I as R,aT as Be,aU as H,a5 as K,P as _e,e as De,aV as ze,h as Ne}from"./index-DOklq4cR.js";import{c as Oe,C as We}from"./index-BHuMVt-K.js";import{u as Fe}from"./use-id-P2NRv5Or.js";import{u as qe}from"./use-expose-Ds_Trjn3.js";function G(t){return Array.isArray(t)?!t.length:t===0?!1:!t}function $e(t,r){if(G(t)){if(r.required)return!1;if(r.validateEmpty===!1)return!0}return!(r.pattern&&!r.pattern.test(String(t)))}function je(t,r){return new Promise(l=>{const f=r.validator(t,r);if(ve(f)){f.then(l);return}l(f)})}function U(t,r){const{message:l}=r;return ye(l)?l(t,r):l||""}function He({target:t}){t.composing=!0}function Y({target:t}){t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}function Ke(t,r){const l=he();t.style.height="auto";let f=t.scrollHeight;if(Ie(r)){const{maxHeight:i,minHeight:c}=r;i!==void 0&&(f=Math.min(f,i)),c!==void 0&&(f=Math.max(f,c))}f&&(t.style.height=`${f}px`,be(l))}function Ue(t){return t==="number"?{type:"text",inputmode:"decimal"}:t==="digit"?{type:"tel",inputmode:"numeric"}:{type:t}}function v(t){return[...t].length}function B(t,r){return[...t].slice(0,r).join("")}const[Ye,m]=Se("field"),Ge={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:_,formatter:Function,clearIcon:M("clear"),modelValue:Ce(""),inputAlign:String,placeholder:String,autocomplete:String,autocapitalize:String,autocorrect:String,errorMessage:String,enterkeyhint:String,clearTrigger:M("focus"),formatTrigger:M("onChange"),spellcheck:{type:Boolean,default:null},error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Je=Ve({},Oe,Ge,{rows:_,type:M("text"),rules:Array,autosize:[Boolean,Object],labelWidth:_,labelClass:ke,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var Qe=xe({name:Ye,props:Je,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(t,{emit:r,slots:l}){const f=Fe(),i=Ee({status:"unvalidated",focused:!1,validateMessage:""}),c=P(),D=P(),w=P(),{parent:h}=Me(Ae),y=()=>{var e;return String((e=t.modelValue)!=null?e:"")},u=e=>{if(S(t[e]))return t[e];if(h&&S(h.props[e]))return h.props[e]},J=I(()=>{const e=u("readonly");if(t.clearable&&!e){const n=y()!=="",a=t.clearTrigger==="always"||t.clearTrigger==="focus"&&i.focused;return n&&a}return!1}),z=I(()=>w.value&&l.input?w.value():t.modelValue),Q=I(()=>{var e;const n=u("required");return n==="auto"?(e=t.rules)==null?void 0:e.some(a=>a.required):n}),X=e=>e.reduce((n,a)=>n.then(()=>{if(i.status==="failed")return;let{value:o}=z;if(a.formatter&&(o=a.formatter(o,a)),!$e(o,a)){i.status="failed",i.validateMessage=U(o,a);return}if(a.validator)return G(o)&&a.validateEmpty===!1?void 0:je(o,a).then(s=>{s&&typeof s=="string"?(i.status="failed",i.validateMessage=s):s===!1&&(i.status="failed",i.validateMessage=U(o,a))})}),Promise.resolve()),C=()=>{i.status="unvalidated",i.validateMessage=""},N=()=>r("endValidate",{status:i.status,message:i.validateMessage}),O=(e=t.rules)=>new Promise(n=>{C(),e?(r("startValidate"),X(e).then(()=>{i.status==="failed"?(n({name:t.name,message:i.validateMessage}),N()):(i.status="passed",n(),N())})):n()}),T=e=>{if(h&&t.rules){const{validateTrigger:n}=h.props,a=H(n).includes(e),o=t.rules.filter(s=>s.trigger?H(s.trigger).includes(e):a);o.length&&O(o)}},Z=e=>{var n;const{maxlength:a}=t;if(S(a)&&v(e)>+a){const o=y();if(o&&v(o)===+a)return o;const s=(n=c.value)==null?void 0:n.selectionEnd;if(i.focused&&s){const g=[...e],b=g.length-+a;return g.splice(s-b,b),g.join("")}return B(e,+a)}return e},V=(e,n="onChange")=>{const a=e;e=Z(e);const o=v(a)-v(e);if(t.type==="number"||t.type==="digit"){const g=t.type==="number";e=Re(e,g,g)}let s=0;if(t.formatter&&n===t.formatTrigger){const{formatter:g,maxlength:b}=t;if(e=g(e),S(b)&&v(e)>+b&&(e=B(e,+b)),c.value&&i.focused){const{selectionEnd:x}=c.value,j=B(a,x);s=v(g(j))-v(j)}}if(c.value&&c.value.value!==e)if(i.focused){let{selectionStart:g,selectionEnd:b}=c.value;if(c.value.value=e,S(g)&&S(b)){const x=v(e);o?(g-=o,b-=o):s&&(g+=s,b+=s),c.value.setSelectionRange(Math.min(g,x),Math.min(b,x))}}else c.value.value=e;e!==t.modelValue&&r("update:modelValue",e)},p=e=>{e.target.composing||V(e.target.value)},L=()=>{var e;return(e=c.value)==null?void 0:e.blur()},W=()=>{var e;return(e=c.value)==null?void 0:e.focus()},k=()=>{const e=c.value;t.type==="textarea"&&t.autosize&&e&&Ke(e,t.autosize)},ee=e=>{i.focused=!0,r("focus",e),E(k),u("readonly")&&L()},te=e=>{i.focused=!1,V(y(),"onBlur"),r("blur",e),!u("readonly")&&(T("onBlur"),E(k),ze())},F=e=>r("clickInput",e),ne=e=>r("clickLeftIcon",e),ae=e=>r("clickRightIcon",e),re=e=>{A(e),r("update:modelValue",""),r("clear",e)},q=I(()=>{if(typeof t.error=="boolean")return t.error;if(h&&h.props.showError&&i.status==="failed")return!0}),ie=I(()=>{const e=u("labelWidth"),n=u("labelAlign");if(e&&n!=="top")return{width:K(e)}}),le=e=>{e.keyCode===13&&(!(h&&h.props.submitOnEnter)&&t.type!=="textarea"&&A(e),t.type==="search"&&L()),r("keypress",e)},$=()=>t.id||`${f}-input`,oe=()=>i.status,se=()=>{const e=m("control",[u("inputAlign"),{error:q.value,custom:!!l.input,"min-height":t.type==="textarea"&&!t.autosize}]);if(l.input)return d("div",{class:e,onClick:F},[l.input()]);const n={id:$(),ref:c,name:t.name,rows:t.rows!==void 0?+t.rows:void 0,class:e,disabled:u("disabled"),readonly:u("readonly"),autofocus:t.autofocus,placeholder:t.placeholder,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,enterkeyhint:t.enterkeyhint,spellcheck:t.spellcheck,"aria-labelledby":t.label?`${f}-label`:void 0,onBlur:te,onFocus:ee,onInput:p,onClick:F,onChange:Y,onKeypress:le,onCompositionend:Y,onCompositionstart:He};return t.type==="textarea"?d("textarea",n,null):d("input",_e(Ue(t.type),n),null)},ce=()=>{const e=l["left-icon"];if(t.leftIcon||e)return d("div",{class:m("left-icon"),onClick:ne},[e?e():d(R,{name:t.leftIcon,classPrefix:t.iconPrefix},null)])},ue=()=>{const e=l["right-icon"];if(t.rightIcon||e)return d("div",{class:m("right-icon"),onClick:ae},[e?e():d(R,{name:t.rightIcon,classPrefix:t.iconPrefix},null)])},de=()=>{if(t.showWordLimit&&t.maxlength){const e=v(y());return d("div",{class:m("word-limit")},[d("span",{class:m("word-num")},[e]),De("/"),t.maxlength])}},fe=()=>{if(h&&h.props.showErrorMessage===!1)return;const e=t.errorMessage||i.validateMessage;if(e){const n=l["error-message"],a=u("errorMessageAlign");return d("div",{class:m("error-message",a)},[n?n({message:e}):e])}},ge=()=>{const e=u("labelWidth"),n=u("labelAlign"),a=u("colon")?":":"";if(l.label)return[l.label(),a];if(t.label)return d("label",{id:`${f}-label`,for:l.input?void 0:$(),onClick:o=>{A(o),W()},style:n==="top"&&e?{width:K(e)}:void 0},[t.label+a])},me=()=>[d("div",{class:m("body")},[se(),J.value&&d(R,{ref:D,name:t.clearIcon,class:m("clear")},null),ue(),l.button&&d("div",{class:m("button")},[l.button()])]),de(),fe()];return qe({blur:L,focus:W,validate:O,formValue:z,resetValidation:C,getValidationStatus:oe}),we(Be,{customValue:w,resetValidation:C,validateWithTrigger:T}),Te(()=>t.modelValue,()=>{V(y()),C(),T("onChange"),E(k)}),Le(()=>{V(y(),t.formatTrigger),E(k)}),Pe("touchstart",re,{target:I(()=>{var e;return(e=D.value)==null?void 0:e.$el})}),()=>{const e=u("disabled"),n=u("labelAlign"),a=ce(),o=()=>{const s=ge();return n==="top"?[a,s].filter(Boolean):s||[]};return d(We,{size:t.size,class:m({error:q.value,disabled:e,[`label-${n}`]:n}),center:t.center,border:t.border,isLink:t.isLink,clickable:t.clickable,titleStyle:ie.value,valueClass:m("value"),titleClass:[m("label",[n,{required:Q.value}]),t.labelClass],arrowDirection:t.arrowDirection},{icon:a&&n!=="top"?()=>a:null,title:o,value:me,extra:l.extra})}}});const tt=Ne(Qe);export{tt as F,Ge as f};
