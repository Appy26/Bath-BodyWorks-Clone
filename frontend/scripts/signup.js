// let su=document.getElementById("suoo")
// su.addEventListener("click",()=>{
//     Signup()
// })

function SignUp(){
    let email=document.getElementById("em").value;
    let name=document.getElementById("namee").value ;
    let password=document.getElementById("pass").value;
    console.log({email,name,password})
    addData({email,name,password})
}

async function addData({email,name,password}){
   let payload={name,email,password}
   console.log(payload)
    let res=await fetch("https://sore-puce-quail-gown.cyclic.app/user/register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    let out=await res.json()
    console.log(out)
   if(out.msg==="Successfully Registered"){
 alert(out.msg)
 
   }
   else
   {
    alert(out.msg)
   }
   window.location.href="signIn.html"
}