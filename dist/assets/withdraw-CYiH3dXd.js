import{d as j,i as F,r as v,j as m,o as _,c as f,a as d,w,b as t,u as o,e as $,z as b,A as C,k as x,t as E,p as P,g as T,I as U,_ as z}from"./index-BHC9SGJp.js";import{n as K}from"./navBox-C2g8fvgp.js";import{p as L,P as A}from"./popupBox-Ec92Owaq.js";import{a as k}from"./function-call-BZ0bvZD1.js";import{N as M}from"./index-K9fFoL6k.js";import{N as O}from"./index-CRh0P18f.js";import"./use-expose-DedaC2ld.js";import"./use-touch-Oq4AsWfP.js";/* empty css                                                                 */import"./on-popup-reopen-C12nAhSj.js";import"./use-scope-id-BMLEpVgn.js";const Q=""+new URL("card-bg-BPEQDNhE.png",import.meta.url).href,r=u=>(P("data-v-6d66d5d0"),u=u(),T(),u),q={class:"withdraw"},G={class:"container-box"},H={class:"card-box"},J={class:"card"},W=r(()=>t("img",{class:"card-bg",src:Q,alt:""},null,-1)),X={class:"edit-but"},Y={class:"illustrate"},Z=r(()=>t("dt",null,"提现至:",-1)),tt={class:"withdraw-info"},st=r(()=>t("div",{class:"title-h1"},"可提现余额: ¥0.00",-1)),et={class:"input-box sum"},ot=r(()=>t("span",{class:"title"},"¥",-1)),nt={class:"input-box code"},at=r(()=>t("span",{class:"title"},"验证码",-1)),lt={key:1,class:"count-down"},it=r(()=>t("div",{class:"input-box cost"},[t("span",{class:"title"},"提现费用:"),t("span",{class:"val"},"0.00")],-1)),rt=r(()=>t("div",{class:"hint"},"温馨提示：系统处理可能存在时间差，请耐心等待",-1)),dt={name:"withdraw"},ut=j({...dt,setup(u){const h=F(),N=()=>{h.go(-1)};let a=v(!1);const g=n=>{if(Number.parseFloat(s.sum)>99999){k("超过了最大数值!");return}s.sum.includes(".")?n.toString().includes(".")||s.sum.split(".")[1].length<2&&(s.sum+=n.toString()):s.sum+=n.toString()},D=n=>{s.sum&&(s.sum=s.sum.substr(0,s.sum.length-1))},S=()=>{h.push({name:"bankCard"})},c=v();let I=m([{text:"工商银行",value:"工商银行"},{text:"建设银行",value:"建设银行"},{text:"农业银行",value:"农业银行"},{text:"中国银行",value:"中国银行"}]);const y=n=>{console.log(n.selectedValues[0],"-*-*-*-*"),c.value.isShow=!1};let s=m({sum:"",code:""}),l=m({isSendCode:!1,countDown:60});const B=()=>{l.isSendCode=!0,R()};let p;const R=()=>{clearInterval(p),l.countDown-=1,p=setInterval(()=>{l.countDown--,l.countDown<=0&&(l.countDown=60,clearInterval(p))},1e3)},V=()=>{if(s.sum=Number.parseFloat(s.sum).toString()=="NaN"?"0":Number.parseFloat(s.sum).toString(),Number.parseFloat(s.sum)<=0){k("请输入正确的提现金额!");return}};return(n,e)=>(_(),f("div",q,[d(K,{class:"head"},{default:w(()=>[d(o(M),{"left-arrow":"",title:"提现",onClickLeft:N})]),_:1}),t("div",G,[t("div",H,[t("div",J,[W,t("div",{class:"card-number",onClick:S},"点击绑定银行卡"),t("div",X,[d(o(U),{name:"records-o",color:"#fff",size:"15"}),$("编辑")])]),t("dl",Y,[Z,t("dd",{onClick:e[0]||(e[0]=i=>c.value.isShow=!0)},"切换")])]),t("div",tt,[st,t("div",et,[ot,b(t("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>o(s).sum=i),readonly:"",class:"input-obj",type:"text",placeholder:"请输入提现金额",onClick:e[2]||(e[2]=i=>x(a)?a.value=!0:a=!0)},null,512),[[C,o(s).sum]])]),t("div",nt,[at,b(t("input",{"onUpdate:modelValue":e[3]||(e[3]=i=>o(s).code=i),maxlength:"6",class:"input-obj",type:"text",placeholder:"短信验证码"},null,512),[[C,o(s).code]]),o(l).countDown==60?(_(),f("span",{key:0,class:"send-code",onClick:B},"发送验证码")):(_(),f("span",lt,E(o(l).countDown)+"s",1))]),it,t("div",{class:"withdraw-deposit-but",onClick:V},"提现"),rt])]),d(L,{ref_key:"bankCardRef",ref:c,option:{position:"bottom",round:!0}},{default:w(()=>[d(o(A),{onCancel:e[4]||(e[4]=i=>c.value.isShow=!1),title:"选择银行卡",columns:o(I),onConfirm:y},null,8,["columns"])]),_:1},512),d(o(O),{show:o(a),onBlur:e[5]||(e[5]=i=>x(a)?a.value=!1:a=!1),"extra-key":".",onInput:g,onDelete:D},null,8,["show"])]))}}),kt=z(ut,[["__scopeId","data-v-6d66d5d0"]]);export{kt as default};
