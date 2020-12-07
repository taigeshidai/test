if (document.getElementsByClassName('show-banner-find')[0]) {
    !function () {
        var x1, x3 = 0, tt = 0, y = $('.show-banner>div>div>div').length / document.querySelectorAll('.show-banner>div>div').length;
        $('.show-banner-find>a')[1].onmousedown = move;
        function move() {
            clearInterval(set);
            if (window.innerWidth > 767) {
                x3 = (x3 >= y - 3) ? 0 : (++x3);
            } else if (window.innerWidth > 499) {
                x3 = (x3 >= y - 2) ? 0 : (++x3);
            } else {
                x3 = (x3 >= y - 1) ? 0 : (++x3);
            }
            $('.show-banner>div>div').animate({ 'left': -x3 * 100 + '%' })
            set = setInterval(function () {
                $('.show-banner-find>a')[1].onmousedown();
            }, 5000)
        }
        var set = setInterval(function () {
            $('.show-banner-find>a')[1].onmousedown();
        }, 5000)
        $('.show-banner-find>a')[0].onmousedown = function () {
            clearInterval(set);
            if (window.innerWidth > 767) {
                x3 = (x3 <= 0) ? y - 3 : (--x3);
            } else if (window.innerWidth > 499) {
                x3 = (x3 <= 0) ? y - 2 : (--x3);
            } else {
                x3 = (x3 <= 0) ? y - 1 : (--x3);
            }
            $('.show-banner>div>div').animate({ 'left': -x3 * 100 + '%' });
            set = setInterval(function () {
                $('.show-banner-find>a')[1].onmousedown();
            }, 5000)
        }

        var dom = document.getElementsByClassName('show-banner-find')[0],
            dom3 = $('.show-banner>div>div'),
            x4;
        dom.addEventListener('touchstart', function (event) {
            var e = event || window.event;
            x4 = e.changedTouches[0].pageX;
            x2 = dom3[0].offsetLeft;
            if (event.stopPropagation) { event.stopPropagation(); } else { event.cancelBubble = true };
        })

        dom.addEventListener('touchmove', function (event1) {
            var e1 = event1 || window.event;
            x1 = e1.changedTouches[0].pageX - x4;
            if (x1 > 30 || x1 < -30) {
                dom3.css('left', (x2 + x1) + 'px');
            }
        })
        dom.addEventListener('touchend', function (e) {
            if (x1 > 30) {
                $('.show-banner-find>a')[0].onmousedown();
            } else if (x1 < -30) {
                $('.show-banner-find>a')[1].onmousedown();
            }
        })
    } ()
}



if (document.getElementsByClassName('media1tab')) {
    !function () {
        var dom = document.getElementsByClassName('media1tab'),
            dom1 = document.getElementsByClassName('media2'),
            dom2 = $('.media1tab1'),
            dom3 = $('.media1tab1>a'),
            dom4 = $('.cpyj>div'),
            t1 = true,
            t = 0;
        for (var i = 0; i < dom.length; i++) {
            dom[i].index = i;
            dom[i].onclick = function () {
                var x = this.index;
                for (var ii = 0; ii < dom.length; ii++) {
                    dom1[ii].style.display = 'none';
                    dom[ii].style.borderColor = '#f3f3f3';
                    dom[ii].style.background = '#f3f3f3';
                }
                if (dom2[0]) {
                    if (t != x) {
                        t1 = true;
                        dom2.eq(t).animate({ 'height': '0' });
                        if (x==3){
                            dom2.eq(x).animate({ 'height': dom2[x].children.length * 32 + 'px' });
                        }else {
                            dom2.eq(x).animate({ 'height': dom2[x].children.length * 29 + 'px' });
                        }
                    } else if(t1){
                        t1 = false;
                        dom2.eq(t).animate({ 'height': '0' });
                    } else {
                        t1 = true;
                        if (x==3){
                            dom2.eq(x).animate({ 'height': dom2[x].children.length * 32 + 'px' });
                        }else{
                            dom2.eq(t).animate({ 'height': dom2[x].children.length * 29 + 'px' });
                        }
                    }
                    dom2[this.index].children[0].click();
                }
                dom1[x].style.display = 'block';
                this.style.borderColor = '#ce2a2b';
                this.style.background = '#fff';
                t = x;
            }
        }
        function tab() {
            for (var i = 0; i < dom3.length; i++) {
                dom3[i].style.color = '#666';
                dom4[i].style.display = 'none';
            }
            this.style.color = '#ce2a2b';
            dom4[this.index].style.display = 'block';
        }
        for (var i = 0; i < dom3.length; i++) {
            dom3[i].index = i;
            dom3[i].onclick = tab;
        }
        dom3[0].click();
    } ()
}