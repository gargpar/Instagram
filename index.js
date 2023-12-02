var close = document.getElementsByClassName("cross")[0];
var hidden = document.getElementsByClassName("create")[0];
var posts = document.getElementsByClassName("posts")[0];

posts.style.display = "none";

close.addEventListener('click', hide = function() {
    hidden.style.display = "none";
});

var create = document.getElementById("create");

create.addEventListener('click', function(){
    hidden.style.display = "flex";
});
let i = 0;
var confirm = document.getElementsByClassName("btn")[0];

confirm.addEventListener('click',(callback)=>{

    hide();
    posts.style.display = "block";

    var test = document.getElementsByClassName("post");
    var image = document.getElementById("imageInput").value;
    var imageUrl = image.split("\\")[image.split("\\").length-1];
    i++;
    if(i==1){
    
    test[i-1].style.backgroundImage = "url('" + imageUrl + "')";

    if(imageUrl.length==0){
                document.getElementById("1").style.display = "none"; 
            }
            else{
                document.getElementById("1").style.display = "block"; 
            }
    }
    else{
        var mainPost = document.querySelector(".mainP");
        mainPost.innerHTML +=`<div class="posts" id="${i}">
        <div class="title">
            <div class="photo"></div>
            <div class="name">
                <p>ayush_sa7</p>
            </div>
            <div class="more"><i class="i fa-solid fa-bars"></i></div>
        </div>
        <div class="post"></div>
    </div>`
    }
    test[i-1].style.backgroundImage = "url('" + imageUrl + "')";
});



const del  = document.querySelector(".delete");

var more = document.getElementsByClassName("i");

function showDel(){
    console.log("hi");
    del.style.display = "flex";
}

for(var j=0;j<more.length;j++){
    more[j].addEventListener('click',showDel);
}

const cancel = document.getElementsByClassName("cancel")[0];

cancel.addEventListener('click',()=>{
    del.style.display = "none";
})

