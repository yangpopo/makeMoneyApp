import{d as S,i as V,j as B,r as w,o as l,c as a,a as f,w as I,b as o,u as e,F as x,z as u,A as h,k as _,t as g,v as M,p as N,g as j,_ as z}from"./index-BHC9SGJp.js";import{n as L}from"./navBox-C2g8fvgp.js";import{a as R}from"./function-call-BZ0bvZD1.js";import{N as P}from"./index-K9fFoL6k.js";import"./use-expose-DedaC2ld.js";import"./use-touch-Oq4AsWfP.js";import"./on-popup-reopen-C12nAhSj.js";import"./use-scope-id-BMLEpVgn.js";const d=i=>(N("data-v-02bd8ff7"),i=i(),j(),i),U={class:"call-center"},F={class:"container-box"},T=d(()=>o("dl",{class:"title-h1"},[o("dt",null,"验证手机"),o("dd",null,"检测到您当前登录的手机号为:")],-1)),A=d(()=>o("dl",{class:"title-h2"},[o("dt",null,"13333333333"),o("dd",null,"请验证身份")],-1)),E={class:"code-box"},O=d(()=>o("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4000"},[o("path",{d:"M834.869 175.034c-7.668 0.278-15.222 0.385-22.612 0.385h-0.032c-194.413 0-280.058-89.102-280.771-89.87L512.027 64.28l-19.454 21.268c-0.848 0.932-91.22 96.715-303.444 89.486l-27.255-0.93v403.924c0 105.752 35.307 260.001 340.618 378.013l9.509 3.68 9.504-3.68C826.815 838.03 862.123 683.78 862.123 578.028V174.104l-27.254 0.93zM477.186 697.78L273.372 517.181l54.153-43.882 108.368 79.957s149.63-154.798 294.097-227.034l20.636 23.245s-180.57 149.635-273.44 348.312z","p-id":"4001"})],-1)),q={key:1,class:"count-down"},G=d(()=>o("div",{class:"note"},"如果原手机收不到验证码,请联系客服进行修改手机号操作",-1)),H={class:"code-box"},J=d(()=>o("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4000"},[o("path",{d:"M834.869 175.034c-7.668 0.278-15.222 0.385-22.612 0.385h-0.032c-194.413 0-280.058-89.102-280.771-89.87L512.027 64.28l-19.454 21.268c-0.848 0.932-91.22 96.715-303.444 89.486l-27.255-0.93v403.924c0 105.752 35.307 260.001 340.618 378.013l9.509 3.68 9.504-3.68C826.815 838.03 862.123 683.78 862.123 578.028V174.104l-27.254 0.93zM477.186 697.78L273.372 517.181l54.153-43.882 108.368 79.957s149.63-154.798 294.097-227.034l20.636 23.245s-180.57 149.635-273.44 348.312z","p-id":"4001"})],-1)),K={key:1,class:"count-down"},Q={name:"callCenter"},W=S({...Q,setup(i){const m=()=>{C.go(-1)},C=V();let s=B({isSendCode:!1,countDown:60}),t=w("");const v=()=>{if(s.isSendCode=!0,!/^1[2,3,4,5,6,7,8,9][0-9]{9}$/.test(t.value)){R("请输入正确的手机号!");return}k()};let r;const k=()=>{clearInterval(r),s.countDown-=1,r=setInterval(()=>{s.countDown--,s.countDown<=0&&(s.countDown=60,clearInterval(r))},1e3)};let p=w(1);const y=()=>{p.value=2},b=()=>{m()};return(D,c)=>(l(),a("div",U,[f(L,{class:"nav-box"},{default:I(()=>[f(e(P),{"left-arrow":"",title:"更换手机号",onClickLeft:m})]),_:1}),o("div",F,[e(p)==1?(l(),a(x,{key:0},[T,A,o("div",E,[O,u(o("input",{class:"input-obj","onUpdate:modelValue":c[0]||(c[0]=n=>_(t)?t.value=n:t=n),type:"text",placeholder:"请输入验证码",maxlength:"6"},null,512),[[h,e(t)]]),e(s).countDown==60?(l(),a("span",{key:0,class:"send-phone-code",onClick:v},"发送验证码")):(l(),a("span",q,g(e(s).countDown)+"s",1))]),G,o("div",{class:"confirm-modify-but",onClick:y},"确定")],64)):e(p)==2?(l(),a(x,{key:1},[u(o("input",{class:"input-phone-obj","onUpdate:modelValue":c[1]||(c[1]=n=>_(t)?t.value=n:t=n),type:"text",placeholder:"请输入新手机号",maxlength:"11"},null,512),[[h,e(t)]]),o("div",H,[J,u(o("input",{class:"input-obj","onUpdate:modelValue":c[2]||(c[2]=n=>_(t)?t.value=n:t=n),type:"text",placeholder:"请输入验证码",maxlength:"6"},null,512),[[h,e(t)]]),e(s).countDown==60?(l(),a("span",{key:0,class:"send-phone-code",onClick:v},"发送验证码")):(l(),a("span",K,g(e(s).countDown)+"s",1))]),o("div",{class:"confirm-modify-but",onClick:b},"确定")],64)):M("",!0)])]))}}),no=z(W,[["__scopeId","data-v-02bd8ff7"]]);export{no as default};
