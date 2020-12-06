window.onload = function(){
    var clickevent = ['.one','.two','.prev','.next']
    $.get('../data/xu-media.json',function(res){
        //初始化默认渲染
        render( res.slice(0,10))
        //挂载点击事件
        clickFn(clickevent,res)
    })
         //点击渲染
        function clickFn(clickevent,res){
            clickevent.forEach((item,index)=>{
                $(item).on('click',()=>{
                    render( res.slice((index%2*10),(index%2+1)*10));
            })
        })
    }
   

        $('.one').on('click',()=>{
            $('.page-name span').removeClass('act');
            $('.one').addClass('act');
        })
        
        $('.prev').on('click',()=>{
            // render( res.slice(0,10))
            $('.page-name span').removeClass('act');
            $('.one').addClass('act')
        })

        $('.two').on('click',()=>{
           
            
            // render( res.slice(10,20))
            $('.page-name span').removeClass('act');
            $('.two').addClass('act')
        })

        $('.next').on('click',()=>{
           
            // render( res.slice(10,20))
            $('.page-name span').removeClass('act');
            $('.two').addClass('act')
        })
    }
    function render(res){
        //每次渲染前先
        $('.news').html("")
        $.each(res,function(i,obj){
            $('.news').append(`<li class="list">
            <div class="list-left">
                <a href="#">
                    <img class="media-object" src=${obj.img} alt="..." width="150px" height="100px">
                </a>
            </div>
            <div class="list-right">

                <h4><a id="list-a" href="../html/x1-1-1.html">${obj.tit}</a></h4>
                <div>${obj.artical}</div>
                <div>${obj.time}</div>
            </div>
        </li>`)
        })
    }


    $.get('../data/xu-info.json',function(res){
        console.log(res);
        
        $.each(res,function(i,obj){
            $('.info').append(`<li class="list">
            <div class="list-left">
                <a href="#">
                    <img class="media-object" src=${obj.img} alt="..." width="150px" height="100px">
                </a>
            </div>
            <div class="list-right">
                <h4><a id="list-a" href="../html/x1-1-1.html">${obj.tit}</a></h4>
                <div>${obj.artical}</div>
                <div>${obj.time}</div>
            </div>
        </li>`)
        })
    })
