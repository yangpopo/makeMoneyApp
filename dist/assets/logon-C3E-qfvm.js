import{d as b,y as k,i as I,j as y,o as V,c as C,b as t,z as u,A as m,u as a,a as f,w as _,p as R,g as j,e as l,f as g,_ as D}from"./index-BHC9SGJp.js";import{l as M}from"./userAccount-Df610Yq0.js";import{u as N}from"./axios-DLOumnlT.js";import{u as z,r as B,e as P,t as T}from"./moneyIntegral-BJdKw8xE.js";import{a as h}from"./function-call-BZ0bvZD1.js";import"./use-expose-DedaC2ld.js";import"./use-touch-Oq4AsWfP.js";import"./on-popup-reopen-C12nAhSj.js";import"./use-scope-id-BMLEpVgn.js";const v=n=>(R("data-v-501c967f"),n=n(),j(),n),U={class:"logon"},S=v(()=>t("div",{class:"title-h1"},"欢迎使用易赚",-1)),q={class:"phone input-box"},L={class:"password input-box"},O={class:"more-box"},A=v(()=>t("div",{class:"describe"},[t("svg",{class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"15526"},[t("path",{d:"M867.584 160.192c-149.632-16.928-262.208-57.408-334.592-120.352l-19.04-16.544-20.544 14.656C379.968 118.944 267.776 160 160 160H128v448c0 137.344 121.088 261.92 370.208 380.864l13.088 6.24 13.344-5.728C771.072 883.52 896 755.232 896 608V163.424l-28.416-3.232zM832 608c0 116.8-107.392 223.36-319.328 316.8C299.872 821.024 192 714.464 192 608V222.976c104.672-6.784 211.584-46.688 318.496-118.944C587.232 162.528 695.168 201.536 832 220.256V608zM359.776 468.672a32 32 0 1 0-47.968 42.4l121.792 137.824c12.608 14.24 30.176 21.568 47.904 21.568a64.384 64.384 0 0 0 49.696-23.52l197.6-242.72a32 32 0 0 0-49.632-40.416l-197.6 242.688-121.792-137.824z","p-id":"15527"})]),l(" 账号登录保护中 ")],-1)),E={name:"inletPage"},H=b({...E,setup(n){const r=z(),p=k(),w=I(),i=o=>{w.replace({name:o})};let s=y({username:"",password:""});const c=N();c.token&&i("important");const x=()=>{if(s.username.length<=0){h("请输入登录账号!");return}if(s.password.length<=0){h("请输入登录密码!");return}M(s).then(o=>{o.code==0&&(c.updateToken(o.data.token),c.updateUserInfo(o.data.user_info),B().then(e=>{e.code==0&&(r.money=e.data.money,r.score=e.data.score)}),P().then(e=>{e.code==0&&Object.assign(r.earningsRecordData,e.data)}),T().then(e=>{e.code==0&&Object.assign(r.taskRecordData,e.data)}),p.query.parentName?i(p.query.parentName):i("important"))})};return(o,e)=>(V(),C("div",U,[S,t("div",q,[u(t("input",{class:"input-obj","onUpdate:modelValue":e[0]||(e[0]=d=>a(s).username=d),maxlength:"25",placeholder:"请输入登录账号",type:"text"},null,512),[[m,a(s).username]])]),t("div",L,[u(t("input",{class:"input-obj","onUpdate:modelValue":e[1]||(e[1]=d=>a(s).password=d),maxlength:"16",type:"password",placeholder:"请输入登录密码"},null,512),[[m,a(s).password]]),f(a(g),{to:{name:"retrievePassword"},class:"button"},{default:_(()=>[l("忘记密码?")]),_:1})]),t("div",O,[A,f(a(g),{to:{name:"register"},class:"register-but"},{default:_(()=>[l("注册")]),_:1})]),t("div",{class:"submit-but",onClick:x},"登录")]))}}),Z=D(H,[["__scopeId","data-v-501c967f"]]);export{Z as default};
