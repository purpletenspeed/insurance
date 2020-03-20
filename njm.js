



function submit_by_id() {

const uri = 'https://api.incontact.com/InContactAuthorizationServer/Token';

let h = new Headers();
h.append('Accept', 'application/json');
h.append('Authorization', 'basic TklDRWluQ29udGFjdERFVm9uZTRATklDRWluQ29udGFjdCBJbmMuOk5EYzJNVGMxWW1RdE1tRXhOaTAwT0RjeExUZzNNelF0TldRMk9UUTBNVEZqT0dGaQ==');

let req = new Request(uri, {
    method: 'POST',
    headers: h,
    body:JSON.stringify({'username':'jd@c32.com', 'password':'@BlueHens309', 'grant_type':'password'}),
    mode: 'cors'
});

fetch(req)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP!');
        }
    })
    .then( (jsonData) =>{
        console.log(jsonData);
        console.log(jsonData.access_token);  //this is working

    
    
const uri1 = 'https://api-c32.nice-incontact.com/inContactAPI/services/v18.0/queuecallback';

let h1 = new Headers();
h1.append('Accept', 'application/json');

h1.append('Authorization', 'bearer ' + jsonData.access_token)

let req1 = new Request(uri1, {
    method: 'POST',
    headers: h1,
    body:JSON.stringify({'phoneNumber':'6316179961', 'skill':'4020551'}),
    mode: 'cors'
});

fetch(req1)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }else{
            throw new Error('BAD HTTP!');
        }
    })
    .then( (jsonData1) =>{
        console.log(jsonData1);
     
       document.getElementById("demo").innerHTML = jsonData1.contactId;

    });
});


var x = document.getElementById("container");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}





};
