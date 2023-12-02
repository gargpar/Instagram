var create = document.getElementById("create");
var hidden = document.getElementsByClassName("create")[0];

create.addEventListener("click",function(){
    hidden.style.display='flex';
})

var close = document.getElementsByClassName("cross")[0];

close.addEventListener('click',function(){
    hidden.style.display="none";
})

var confirm = document.getElementsByClassName("btn")[0];
let i=0;

function addPhoto(){
    var test = document.getElementsByClassName("post");
    var image = document.getElementById("imageInput").value;
    var imageUrl = image.split("\\")[image.split("\\").length-1];
    test[i-1].style.backgroundImage = "url('"+imageUrl+""
};
let x ;
function show (){
    var del = document.querySelector(".delete");

var more = document.getElementsByClassName("more");


function showDel(e){
    del.style.display = "flex";
    x = e.target.parentElement.parentElement.parentElement.id;
    delBtn.id = 100 + + x;
    console.log(delBtn.id);
}

for(let j=0;j<more.length;j++){
    more[j].addEventListener("click",showDel);
}

const cancel = document.getElementsByClassName("cancel")[0];

cancel.addEventListener('click',()=>{
    del.style.display = "none";
})

}



confirm.addEventListener("click",(callback)=>{
    hidden.style.display="none";
    var mainPost = document.querySelector(".mainP");
    mainPost.innerHTML+=`<div class="posts" id="${i+1}">
    <div class="title">
        <div class="photo"></div>
        <div class="name">
            <p>ayush_sa7</p>
        </div>
        <div class="more" onclick="show()"><i class="i fa-solid fa-bars"></i></div>
    </div>
    <div class="post"></div>
</div>`;
    i++;
    addPhoto();
});

var delBtn = document.getElementsByClassName("del")[0];
var div;
delBtn.addEventListener("click",(e)=>{
    var del = document.querySelector(".delete");
    console.log("del");
    del.style.display = "none";

    var pos = delBtn.id - 100;

    var tar = document.getElementById(pos);

    tar.remove();
    i--;

    console.log(tar);

})


