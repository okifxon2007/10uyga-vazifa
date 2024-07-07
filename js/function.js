async function getData(url){
    try {
        let response = await fetch(url);
        let res = await response.json();
        return res
    } catch (error) {
        return error;
    }
}
 
function createcard(product){
    return `
    <div class="card" data-id = ${product.id}>
                <img src="${product.attributes.image}" alt="">
                <h2>${product.attributes.title}</h2>
                <p>$${product.attributes.price}</p>
            </div>
    `
}

function cretcards (pro){
    return `
    <div class="m1">
                <img src="${pro.attributes.image}" alt="">
            </div>
            <div class="m2">
                <h1>${pro.attributes.category}</h1>
                <h3>${pro.attributes.company}</h3>
                <h2>$${pro.attributes.price}</h2>
                <p>${pro.attributes.description}</p>
                <form id='form'>
                <select name="Amount" id="select">
                    <option value="1" >1</option>
                    <option value="1" >2</option>
                    <option value="1" >3</option>
                    <option value="1" >4</option>
                    <option value="1" >5</option>
                </select> <br>
                <button id='btn'>Add To Bag</button>
                </form>
            </div>
    `
}

function datastorage(){
    let data = []
    if (localStorage.getItem('products')) {
        data = JSON.parse(localStorage.getItem('products'))
    }
    return data;
}

export{getData, createcard, cretcards, datastorage};