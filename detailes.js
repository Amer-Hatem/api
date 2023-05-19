var queryString = window.location.search;
var params = new URLSearchParams(queryString)
var id = params.get('id');
var data = {}

var httpreq = new XMLHttpRequest()
var ing = []
getData2(id)
function getData2(id) {
    httpreq.open('get', `https://forkify-api.herokuapp.com/api/get?rId=${id}`)
    httpreq.send()
    httpreq.onreadystatechange = function () {
        if (httpreq.readyState == 4 && httpreq.status == 200) {
            data = JSON.parse(httpreq.response).recipe
            ing = JSON.parse(httpreq.response).recipe.ingredients
            display()
            displaying()
        }
    }
}

function display() {

    document.getElementById('content').innerHTML = `
        <div class="row">
        <div class="col-md-7">
            <h2>${data.title}</h2>
            <img src="${data.image_url}" alt="">
        </div>
        <div class="col-md-5">
            <h3>${data.publisher}</h3>
          <p>Recipe ingredients</p>
          <div id="ingredients"></div>
          <a class="btn btn-info" href="${data.publisher_url}">publisher url</a>   
              </div>
    </div>
        
        `
}
function displaying() {
    for (let index = 0; index < ing.length; index++) {
        var ele = document.createElement('p')
ele.innerText = ing[index]
document.getElementById('ingredients').append(ele)
        
    }
}