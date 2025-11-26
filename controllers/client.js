
function d (q) { 

    
   fetch(`https://demo-project-production.up.railway.app/app/do`, {
    method : "POST",
    body: JSON.stringify({q}) ,
    headers: {
        'Content-Type':"application/json"
    }
   })
   .then((res) => res.json())
   .then(({message}) => {
    console.log(message);  
    setTimeout(() => {
  console.clear()
    },1300)
   })
} 

