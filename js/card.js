import {getData, cretcards, datastorage} from "./function.js";

let main = document.querySelector('.main1')

document.addEventListener('DOMContentLoaded', function(){

    let url = window.location.href;
    let id = url.split('id=')[1];
    
   if (id) {
    getData(`https://strapi-store-server.onrender.com/api/products/${id}`)
    .then(data =>{
        if (data.data.id) {
            const cards = cretcards(data.data)
            main.innerHTML = cards;



            let form = document.getElementById('form')
            let select = document.getElementById('select')
            let btn = document.getElementById('btn')
            
            
            form.addEventListener('submit', function(event){
                event.preventDefault()
                let product = {
                    id: data.data.id,
                    time: Date.now(),
                    count:select.value,
                    attribute: data.data.attribute
                }
                let products = datastorage();
                let isexist = products.find(element =>{
                    return element.id == product.id
                })
                
                if (isexist && isexist.id) {
                    products = products.map(element =>{
                        if (element.id == product.id) {
                            element.count += product.count
                            return element
                        }else{
                            products.push(product)
                        }
                        
                    })
                    localStorage.setItem('products', JSON.stringify(products))
                }
                
            })


        }
        
    })
    .catch(error =>{
        console.log(error);
    })
   }else{
    console.log('urlda id parametri topilmadi');
   }
   let but = document.querySelector('#but3');


    but.addEventListener('click', function(){
        window.location.assign(`http://127.0.0.1:5500/xisob.html`)
    })
    
})

