import{_ as g,u as b,c,d as e,n as _,m as l,v as a,t as m,j as I,g as h,k as y,o as n,p as w,h as x,i as U}from"./index-DyWrf654.js";import{a as S,c as v,n as F}from"./index-B_OgwVUv.js";const k={data(){return{firstname:"",lastname:"",username:"",email:"",password:"",bio:"",profile_image:"",error:"",success:"",selectedFile:null,supabase:null,uploadError:"",authStore:"",isRegistering:!1}},mounted(){this.supabase=S("https://jzydvbxwyynlezjnqbbd.supabase.co/","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6eWR2Ynh3eXlubGV6am5xYmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNDY3MjEsImV4cCI6MjA0MDYyMjcyMX0.kY7-gqw6RK42QZZ46WrNw9YLD3qmK9Ct9G-9NuHuW8w"),this.authStore=b(),this.authStore.setCsrfToken()},methods:{async uploadFile(o){const s=await v(o),{data:p,error:u}=await this.supabase.storage.from("profilepics").upload("/"+F(),s,{contentType:s.type});u?console.error("Error uploading file:",u):(console.log("File uploaded successfully:",p),this.profile_image=await this.supabase.storage.from("profilepics").getPublicUrl(p.path).data.publicUrl,console.log("Public URL:",this.profile_image))},async register(){try{this.isRegistering=!0,await this.uploadFile(this.selectedFile),console.log(this.authStore.csrfToken);const o=await fetch("https://itter.pythonanywhere.com/api/create-user/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":this.authStore.csrfToken},body:JSON.stringify({firstname:this.firstname,lastname:this.lastname,email:this.email,password:this.password,bio:this.bio,username:this.username,profile_image:this.profile_image}),credentials:"include"}),s=await o.json();o.ok?(this.success="Registration successful! Please log in.",setTimeout(()=>{this.$router.push("/Signin")},1e3)):this.error=s.error||"Registration failed",this.isRegistering=!1}catch(o){this.error="An error occurred during registration: "+o}},async handleFileUpload(o){if(this.selectedFile=o.target.files[0],console.log(this.selectedFile),this.uploadError=null,this.uploadSuccess=null,this.selectedFile){if(!this.selectedFile.type.startsWith("image/")){this.uploadError="Please select a Proper image.",this.selectedFile=null,this.imageUrl=null;return}this.imageUrl=URL.createObjectURL(this.selectedFile)}else this.imageUrl=null}}},r=o=>(w("data-v-2fbb2bd8"),o=o(),x(),o),R={class:"form-holder"},T={class:"form-box"},V=r(()=>e("span",{class:"title"},"Register",-1)),C={class:"textInputWrapper"},j=r(()=>e("label",{for:"firstname"},"First Name",-1)),N={class:"textInputWrapper"},W=r(()=>e("label",{for:"lastname"},"Last Name",-1)),q={class:"textInputWrapper"},E=r(()=>e("label",{for:"username"},"Username",-1)),J={class:"textInputWrapper"},L=r(()=>e("label",{for:"email"},"E-mail",-1)),M={class:"textInputWrapper"},P=r(()=>e("label",{for:"password"},"Password",-1)),Y={class:"textInputWrapper"},O=r(()=>e("label",{for:"bio"},"Tell something about yourself",-1)),X={class:"textInputWrapper"},z=r(()=>e("label",{for:"pi"},"Profile Image",-1)),B={class:"sbutton",type:"submit",name:"submit"},D={key:0},Z={key:1};function A(o,s,p,u,t,d){const f=U("IconLoading");return n(),c("div",R,[e("div",T,[V,e("form",{onSubmit:s[7]||(s[7]=_((...i)=>d.register&&d.register(...i),["prevent"])),class:"form"},[e("div",C,[j,l(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>t.firstname=i),placeholder:"First Name",type:"text",id:"firstname",name:"firstname",class:"textInput",required:""},null,512),[[a,t.firstname]])]),e("div",N,[W,l(e("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>t.lastname=i),placeholder:"Last name",type:"text",id:"lastname",name:"lastname",class:"textInput",required:""},null,512),[[a,t.lastname]])]),e("div",q,[E,l(e("input",{"onUpdate:modelValue":s[2]||(s[2]=i=>t.username=i),placeholder:"Username",id:"username",type:"text",name:"username",class:"textInput",required:""},null,512),[[a,t.username]])]),e("div",J,[L,l(e("input",{"onUpdate:modelValue":s[3]||(s[3]=i=>t.email=i),placeholder:"E-mail",type:"email",id:"email",name:"email",class:"textInput",required:""},null,512),[[a,t.email]])]),e("div",M,[P,l(e("input",{"onUpdate:modelValue":s[4]||(s[4]=i=>t.password=i),placeholder:"Password",id:"password",type:"password",name:"password",class:"textInput",required:""},null,512),[[a,t.password]])]),e("div",Y,[O,l(e("input",{"onUpdate:modelValue":s[5]||(s[5]=i=>t.bio=i),placeholder:"Tell about yourself",id:"bio",type:"textbox",name:"bio",class:"textInput",required:""},null,512),[[a,t.bio]])]),e("div",X,[z,e("input",{style:{padding:"0px"},onChange:s[6]||(s[6]=i=>d.handleFileUpload(i)),placeholder:"profile_image",id:"pi",type:"file",name:"profile_image",accept:"image/*",class:"textInput",required:"",capture:""},null,32),e("p",null,m(t.uploadError),1)]),e("button",B,[t.isRegistering?(n(),I(f,{key:0})):h("",!0),y(" Register ")])],32),t.error?(n(),c("p",D,m(t.error),1)):h("",!0),t.success?(n(),c("p",Z,m(t.success),1)):h("",!0)])])}const Q=g(k,[["render",A],["__scopeId","data-v-2fbb2bd8"]]);export{Q as default};
