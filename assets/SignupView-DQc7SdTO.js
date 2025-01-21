import{_ as h,u as f,c as u,d as e,n as g,m as o,v as l,t as d,g as c,o as m}from"./index-Bek3DcxR.js";import{a as _,c as b,n as y}from"./index-DF576gHl.js";const I={data(){return{firstname:"",lastname:"",username:"",email:"",password:"",bio:"",profile_image:"",error:"",success:"",selectedFile:null,supabase:null,uploadError:"",authStore:""}},mounted(){this.supabase=_("https://jzydvbxwyynlezjnqbbd.supabase.co/","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6eWR2Ynh3eXlubGV6am5xYmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUwNDY3MjEsImV4cCI6MjA0MDYyMjcyMX0.kY7-gqw6RK42QZZ46WrNw9YLD3qmK9Ct9G-9NuHuW8w"),this.authStore=f(),this.authStore.setCsrfToken()},methods:{async uploadFile(r){const s=await b(r),{data:a,error:n}=await this.supabase.storage.from("profilepics").upload("/"+y(),s,{contentType:s.type});n?console.error("Error uploading file:",n):(console.log("File uploaded successfully:",a),this.profile_image=await this.supabase.storage.from("profilepics").getPublicUrl(a.path).data.publicUrl,console.log("Public URL:",this.profile_image))},async register(){try{await this.uploadFile(this.selectedFile),console.log(this.authStore.csrfToken);const r=await fetch("https://itter.pythonanywhere.com/api/create-user/",{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":this.authStore.csrfToken},body:JSON.stringify({firstname:this.firstname,lastname:this.lastname,email:this.email,password:this.password,bio:this.bio,username:this.username,profile_image:this.profile_image}),credentials:"include"}),s=await r.json();r.ok?(this.success="Registration successful! Please log in.",setTimeout(()=>{this.$router.push("/Signin")},1e3)):this.error=s.error||"Registration failed"}catch(r){this.error="An error occurred during registration: "+r}},async handleFileUpload(r){if(this.selectedFile=r.target.files[0],console.log(this.selectedFile),this.uploadError=null,this.uploadSuccess=null,this.selectedFile){if(!this.selectedFile.type.startsWith("image/")){this.uploadError="Please select a Proper image.",this.selectedFile=null,this.imageUrl=null;return}this.imageUrl=URL.createObjectURL(this.selectedFile)}else this.imageUrl=null}}},w={class:"form-holder"},x={class:"form-box"},U=e("span",{class:"title"},"Register",-1),F={class:"textInputWrapper"},S=e("label",{for:"firstname"},"First Name",-1),v={class:"textInputWrapper"},k=e("label",{for:"lastname"},"Last Name",-1),T={class:"textInputWrapper"},V=e("label",{for:"username"},"Username",-1),C={class:"textInputWrapper"},R=e("label",{for:"email"},"E-mail",-1),W={class:"textInputWrapper"},j=e("label",{for:"password"},"Password",-1),q={class:"textInputWrapper"},E=e("label",{for:"bio"},"Tell something about yourself",-1),N={class:"textInputWrapper"},J=e("label",{for:"pi"},"Profile Image",-1),M=e("button",{class:"sbutton",type:"submit"},"Register",-1),P={key:0},Y={key:1};function L(r,s,a,n,t,p){return m(),u("div",w,[e("div",x,[U,e("form",{onSubmit:s[7]||(s[7]=g((...i)=>p.register&&p.register(...i),["prevent"])),class:"form"},[e("div",F,[S,o(e("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>t.firstname=i),placeholder:"First Name",type:"text",id:"firstname",name:"firstname",class:"textInput",required:""},null,512),[[l,t.firstname]])]),e("div",v,[k,o(e("input",{"onUpdate:modelValue":s[1]||(s[1]=i=>t.lastname=i),placeholder:"Last name",type:"text",id:"lastname",name:"lastname",class:"textInput",required:""},null,512),[[l,t.lastname]])]),e("div",T,[V,o(e("input",{"onUpdate:modelValue":s[2]||(s[2]=i=>t.username=i),placeholder:"Username",id:"username",type:"text",name:"username",class:"textInput",required:""},null,512),[[l,t.username]])]),e("div",C,[R,o(e("input",{"onUpdate:modelValue":s[3]||(s[3]=i=>t.email=i),placeholder:"E-mail",type:"email",id:"email",name:"email",class:"textInput",required:""},null,512),[[l,t.email]])]),e("div",W,[j,o(e("input",{"onUpdate:modelValue":s[4]||(s[4]=i=>t.password=i),placeholder:"Password",id:"password",type:"password",name:"password",class:"textInput",required:""},null,512),[[l,t.password]])]),e("div",q,[E,o(e("input",{"onUpdate:modelValue":s[5]||(s[5]=i=>t.bio=i),placeholder:"Tell about yourself",id:"bio",type:"textbox",name:"bio",class:"textInput",required:""},null,512),[[l,t.bio]])]),e("div",N,[J,e("input",{style:{padding:"0px"},onChange:s[6]||(s[6]=i=>p.handleFileUpload(i)),placeholder:"profile_image",id:"pi",type:"file",name:"profile_image",accept:"image/*",class:"textInput",required:"",capture:""},null,32),e("p",null,d(t.uploadError),1)]),M],32),t.error?(m(),u("p",P,d(t.error),1)):c("",!0),t.success?(m(),u("p",Y,d(t.success),1)):c("",!0)])])}const z=h(I,[["render",L]]);export{z as default};
