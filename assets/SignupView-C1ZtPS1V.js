import{_ as f,u as g,c as d,d as t,n as b,m as l,v as n,t as c,g as h,o as m}from"./index-D6hzASV6.js";import{c as w}from"./index-XTwohaX1.js";const _="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let y=(r=21)=>{let e="",o=crypto.getRandomValues(new Uint8Array(r|=0));for(;r--;)e+=_[o[r]&63];return e};async function I(r){const e=new FileReader;e.readAsDataURL(r),await new Promise(u=>{e.onload=()=>{u()}});const o=new Image;o.src=e.result,await new Promise(u=>{o.onload=()=>{u()}});const a=document.createElement("canvas");a.width=o.width,a.height=o.height,a.getContext("2d").drawImage(o,0,0);const p=a.toDataURL("image/webp"),i=await fetch(p).then(u=>u.blob());return URL.createObjectURL(i),i}const x={data(){return{firstname:"",lastname:"",username:"",email:"",password:"",bio:"",profile_image:"",error:"",success:"",selectedFile:null,supabase:null,uploadError:"",authStore:""}},mounted(){this.supabase=w("https://jzydvbxwyynlezjnqbbd.supabase.co/","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6eWR2Ynh3eXlubGV6am5xYmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNDY3MjEsImV4cCI6MjA0MDYyMjcyMX0.kY7-gqw6RK42QZZ46WrNw9YLD3qmK9Ct9G-9NuHuW8w"),this.authStore=g(),this.authStore.setCsrfToken()},methods:{async uploadFile(r){const e=await I(r),{data:o,error:a}=await this.supabase.storage.from("profilepics").upload("/",""+y(),e,{contentType:e.type});a?console.error("Error uploading file:",a):(console.log("File uploaded successfully:",o),this.profile_image=await this.supabase.storage.from("profilepics").getPublicUrl(o.path).data.publicUrl,console.log("Public URL:",this.profile_image))},async register(){try{await this.uploadFile(this.selectedFile),console.log(this.authStore.csrfToken);const r=await fetch("https://itter.pythonanywhere.com/api/create-user/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":this.authStore.csrfToken},body:JSON.stringify({firstname:this.firstname,lastname:this.lastname,email:this.email,password:this.password,bio:this.bio,username:this.username,profile_image:this.profile_image}),credentials:"include"}),e=await r.json();r.ok?(this.success="Registration successful! Please log in.",setTimeout(()=>{this.$router.push("/Signin")},1e3)):this.error=e.error||"Registration failed"}catch(r){this.error="An error occurred during registration: "+r}},async handleFileUpload(r){if(this.selectedFile=r.target.files[0],console.log(this.selectedFile),this.uploadError=null,this.uploadSuccess=null,this.selectedFile){if(!this.selectedFile.type.startsWith("image/")){this.uploadError="Please select a Proper image.",this.selectedFile=null,this.imageUrl=null;return}this.imageUrl=URL.createObjectURL(this.selectedFile)}else this.imageUrl=null}}},U={class:"form-holder"},F={class:"form-box"},v=t("span",{class:"title"},"Register",-1),R={class:"textInputWrapper"},S=t("label",{for:"firstname"},"First Name",-1),V={class:"textInputWrapper"},k=t("label",{for:"lastname"},"Last Name",-1),C={class:"textInputWrapper"},T=t("label",{for:"username"},"Username",-1),j={class:"textInputWrapper"},E=t("label",{for:"email"},"E-mail",-1),L={class:"textInputWrapper"},P=t("label",{for:"password"},"Password",-1),W={class:"textInputWrapper"},q=t("label",{for:"bio"},"Tell something about yourself",-1),N={class:"textInputWrapper"},J=t("label",{for:"pi"},"Profile Image",-1),M=t("button",{class:"sbutton",type:"submit"},"Register",-1),Y={key:0},D={key:1};function O(r,e,o,a,s,p){return m(),d("div",U,[t("div",F,[v,t("form",{onSubmit:e[7]||(e[7]=b((...i)=>p.register&&p.register(...i),["prevent"])),class:"form"},[t("div",R,[S,l(t("input",{"onUpdate:modelValue":e[0]||(e[0]=i=>s.firstname=i),placeholder:"First Name",type:"text",id:"firstname",name:"firstname",class:"textInput",required:""},null,512),[[n,s.firstname]])]),t("div",V,[k,l(t("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>s.lastname=i),placeholder:"Last name",type:"text",id:"lastname",name:"lastname",class:"textInput",required:""},null,512),[[n,s.lastname]])]),t("div",C,[T,l(t("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>s.username=i),placeholder:"Username",id:"username",type:"text",name:"username",class:"textInput",required:""},null,512),[[n,s.username]])]),t("div",j,[E,l(t("input",{"onUpdate:modelValue":e[3]||(e[3]=i=>s.email=i),placeholder:"E-mail",type:"email",id:"email",name:"email",class:"textInput",required:""},null,512),[[n,s.email]])]),t("div",L,[P,l(t("input",{"onUpdate:modelValue":e[4]||(e[4]=i=>s.password=i),placeholder:"Password",id:"password",type:"password",name:"password",class:"textInput",required:""},null,512),[[n,s.password]])]),t("div",W,[q,l(t("input",{"onUpdate:modelValue":e[5]||(e[5]=i=>s.bio=i),placeholder:"Tell about yourself",id:"bio",type:"textbox",name:"bio",class:"textInput",required:""},null,512),[[n,s.bio]])]),t("div",N,[J,t("input",{style:{padding:"0px"},onChange:e[6]||(e[6]=i=>p.handleFileUpload(i)),placeholder:"profile_image",id:"pi",type:"file",name:"profile_image",accept:"image/*",class:"textInput",required:"",capture:""},null,32),t("p",null,c(s.uploadError),1)]),M],32),s.error?(m(),d("p",Y,c(s.error),1)):h("",!0),s.success?(m(),d("p",D,c(s.success),1)):h("",!0)])])}const Z=f(x,[["render",O]]);export{Z as default};
