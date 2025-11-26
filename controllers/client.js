
function d (q) { 

    
   fetch(`http://localhost:8080/app/do`, {
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

