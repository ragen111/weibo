window.onload = () => {
    var lis = document.querySelectorAll('.dot-items li');
    var ul = document.querySelector('.pic-items');
    var carousel = document.querySelector('.carousel');

    var num = 0;

    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i);
        lis[i].addEventListener('click', function() {
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            var target = -index * ul.children[0].offsetWidth;
            ul.style.left = target + 'px';
        })
    }

    var timer = setInterval(() => {
        num++;
        if (num == 8) {
            num = 0;
        }
        lis[num].click();
    }, 1000)

    carousel.addEventListener('mouseover', function() {
        clearInterval(timer);
    })

    carousel.addEventListener('mouseout', function() {
        timer = setInterval(() => {
            num++;
            if (num == 8) {
                num = 0;
            }
            lis[num].click();
        }, 1000)
    })


    var searchInput = document.querySelector('.search-input');
    var searchBox = document.querySelector('.search-box');

    searchInput.addEventListener('focus', function() {
        searchBox.style.border = '1px solid #eb7350';
        searchBox.style.backgroundColor = '#fff';

    })
    searchInput.addEventListener('blur', function() {
        searchBox.style.border = '1px solid #ccc';
        searchBox.style.backgroundColor = '#f2f2f5';
    })


    var loginBtn = document.querySelector('.login-btn');
    var userInput = document.querySelector('.user');
    var pwdInput = document.querySelector('.pwd');
    var usertip = document.querySelector('.usertip');
    var pwdtip = document.querySelector('.pwdtip');
    var usertipClose = document.querySelector('.usertip .icon-guanbi');
    var pwdtipClose = document.querySelector('.pwdtip .icon-guanbi');
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (userInput.value.trim() === '') {
            usertip.style.display = 'block';
            return;
        }
        if (pwdInput.value.trim() === '') {
            pwdtip.style.display = 'block';
            return;
        }
        alert('登录成功！')
    })
    userInput.addEventListener('keydown', function() {
        usertip.style.display = 'none';
    })
    pwdInput.addEventListener('keydown', function() {
        pwdtip.style.display = 'none';
    })
    usertipClose.addEventListener('click', function() {
        usertip.style.display = 'none';
    })
    pwdtipClose.addEventListener('click', function() {
        pwdtip.style.display = 'none';
    })
}