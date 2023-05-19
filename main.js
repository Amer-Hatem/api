var req = new XMLHttpRequest()
var data
var links = document.querySelectorAll('.nav-link')
for (var index = 0; index < links.length; index++){
links[index].onclick =function(e){
    getData(e.target.innerText)
}
}
function getData(type) {
    req.open('get', `https://forkify-api.herokuapp.com/api/search?q=${type}`)
    req.send()
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            data = JSON.parse(req.response).recipes
            display()
        }
    }
}

getData('pizza')
function display(){
var content=``
for (var index = 0; index < data.length; index++) {
    content +=`
    <div class="col-md-4">
                    <div class="card m-2 mb-4 p-4">
                        <h2>${data[index].title}</h2>
                        <p>${data[index].publisher}</p>
                        <img src="${data[index].image_url}" class="w-100 " alt="">
                        <a href="details.html?id=${data[index].recipe_id}" class="btn btn-outline-success mt-4 mb-2">Show Recipe Details</a>
                        </div>
                   </div>
    
    `
    
}
document.getElementById('content').innerHTML = content
}

