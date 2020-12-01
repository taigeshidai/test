window.onload = function(){
    console.log(1);
    $.get('../js/xu-media.json',function(res){
        console.log(res);
        
        $.each(res,function(i,obj){
            $('.news').append(`<li class="list">
            <div class="list-left">
                <a href="#">
                    <img class="media-object" src=${obj.img} alt="..." width="150px" height="100px">
                </a>
            </div>
            <div class="list-right">
                <h4>${obj.tit}</h4>
                <div>${obj.artical}</div>
                <div>${obj.time}</div>
            </div>
        </li>`)
        })
    })

    $.get('../js/xu-info.json',function(res){
        console.log(res);
        
        $.each(res,function(i,obj){
            $('.info').append(`<li class="list">
            <div class="list-left">
                <a href="#">
                    <img class="media-object" src=${obj.img} alt="..." width="150px" height="100px">
                </a>
            </div>
            <div class="list-right">
                <h4>${obj.tit}</h4>
                <div>${obj.artical}</div>
                <div>${obj.time}</div>
            </div>
        </li>`)
        })
    })
}