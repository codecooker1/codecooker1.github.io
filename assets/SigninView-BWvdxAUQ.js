import{r,u as h,b as v,c as d,e,q as f,n as u,v as c,t as w,h as b,o as p,m as x}from"./index-D0xtKl5b.js";const y={class:"form-holder"},g={class:"form-box"},S=e("span",{class:"title"},"Register",-1),V={class:"textInputWrapper"},I=e("label",{for:"email"},"E-mail",-1),k={class:"textInputWrapper"},q=e("label",{for:"password"},"Password",-1),B=e("button",{class:"sbutton",type:"submit"},"Login",-1),E={key:0},D={__name:"SigninView",setup(M){const t=r(""),o=r(""),n=r(""),l=h(),m=x(),_=async()=>{try{await l.login(t.value,o.value,m)}catch(i){console.error(i)}};return v(async()=>{await l.fetchUser()}),(i,s)=>(p(),d("div",y,[e("div",g,[S,e("form",{onSubmit:f(_,["prevent"]),class:"form"},[e("div",V,[I,u(e("input",{"onUpdate:modelValue":s[0]||(s[0]=a=>t.value=a),placeholder:"E-mail",type:"email",id:"email",name:"email",class:"textInput",required:""},null,512),[[c,t.value]])]),e("div",k,[q,u(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o.value=a),placeholder:"Password",id:"password",type:"password",name:"password",class:"textInput",required:""},null,512),[[c,o.value]])]),B],32),n.value?(p(),d("p",E,w(n.value),1)):b("",!0)])]))}};export{D as default};
