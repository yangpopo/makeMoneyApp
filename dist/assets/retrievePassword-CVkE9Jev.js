import{d as D,r as y,j as _,o as d,c as p,b as t,z as u,A as m,u as e,t as V,B as I,m as h,k as x,a as v,w,p as S,g as z,e as i,I as g,f as b,_ as B}from"./index-BHC9SGJp.js";import{C as j}from"./index-Rxg4W2ZE.js";import"./use-expose-DedaC2ld.js";const f=c=>(S("data-v-e4f018f2"),c=c(),z(),c),M={class:"logon"},A=f(()=>t("div",{class:"title-h1"},"欢迎使用易赚",-1)),U={class:"phone input-box"},N={class:"code input-box"},P={key:1,class:"get-count-down"},R={class:"password input-box"},T=["type"],$={class:"more-box"},E=f(()=>t("div",{class:"describe"},[t("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"15526"},[t("path",{d:"M867.584 160.192c-149.632-16.928-262.208-57.408-334.592-120.352l-19.04-16.544-20.544 14.656C379.968 118.944 267.776 160 160 160H128v448c0 137.344 121.088 261.92 370.208 380.864l13.088 6.24 13.344-5.728C771.072 883.52 896 755.232 896 608V163.424l-28.416-3.232zM832 608c0 116.8-107.392 223.36-319.328 316.8C299.872 821.024 192 714.464 192 608V222.976c104.672-6.784 211.584-46.688 318.496-118.944C587.232 162.528 695.168 201.536 832 220.256V608zM359.776 468.672a32 32 0 1 0-47.968 42.4l121.792 137.824c12.608 14.24 30.176 21.568 47.904 21.568a64.384 64.384 0 0 0 49.696-23.52l197.6-242.72a32 32 0 0 0-49.632-40.416l-197.6 242.688-121.792-137.824z","p-id":"15527"})]),i(" 账号登录保护中 ")],-1)),H=f(()=>t("div",{class:"determine-but"},"确定",-1)),L={name:"inletPage"},O=D({...L,setup(c){let a=y(!0),n=_({phone:"",code:"",password:"",isAgree:!1}),l=_({isSendCode:!1,countDown:60});const C=()=>{l.isSendCode=!0,k()};let r;const k=()=>{clearInterval(r),l.countDown-=1,r=setInterval(()=>{l.countDown--,l.countDown<=0&&(l.countDown=60,clearInterval(r))},1e3)};return(q,o)=>(d(),p("div",M,[A,t("div",U,[u(t("input",{class:"input-obj","onUpdate:modelValue":o[0]||(o[0]=s=>e(n).phone=s),maxlength:"11",placeholder:"请输入登录账号",type:"text"},null,512),[[m,e(n).phone]])]),t("div",N,[u(t("input",{class:"input-obj","onUpdate:modelValue":o[1]||(o[1]=s=>e(n).code=s),maxlength:"30",type:"test",placeholder:"邮件验证码"},null,512),[[m,e(n).code]]),e(l).countDown==60?(d(),p("div",{key:0,class:"get-code-but",onClick:C},"发送验证码")):(d(),p("div",P,V(e(l).countDown)+"s",1))]),t("div",R,[u(t("input",{class:"input-obj","onUpdate:modelValue":o[2]||(o[2]=s=>e(n).password=s),maxlength:"16",type:e(a)?"password":"text",placeholder:"输入新密码"},null,8,T),[[I,e(n).password]]),e(a)==!1?(d(),h(e(g),{key:0,name:"eye-o",color:"#0034ef",size:"6vw",onClick:o[3]||(o[3]=s=>x(a)?a.value=!0:a=!0)})):(d(),h(e(g),{key:1,name:"closed-eye",color:"#0034ef",size:"6vw",onClick:o[4]||(o[4]=s=>x(a)?a.value=!1:a=!1)}))]),t("div",$,[E,v(e(b),{to:{name:"logon"},class:"logon-but"},{default:w(()=>[i("前往登录")]),_:1})]),H,v(e(j),{modelValue:e(n).isAgree,"onUpdate:modelValue":o[5]||(o[5]=s=>e(n).isAgree=s),"icon-size":"20px","checked-color":"#0034ef",class:"checkbox"},{default:w(()=>[i("已阅读并同意"),v(e(b),{to:"/",class:"register-but"},{default:w(()=>[i("《用户服务协议》")]),_:1})]),_:1},8,["modelValue"])]))}}),K=B(O,[["__scopeId","data-v-e4f018f2"]]);export{K as default};
