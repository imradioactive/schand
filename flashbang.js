    var i;      //counter

    window.addEventListener("scroll",function(){

    	var scrollTop = window.pageYOffset;
        var vh = window.innerHeight;
        if(scrollTop <= vh){
            if(scrollTop <= (1 - 15/100)* vh){
                document.getElementById("navbar").className = "before";
            }
            else{
                document.getElementById("navbar").className = "after";
            }
        }
        else{
            document.getElementById("navbar").className = "aftereffects";
        }

        if(scrollTop > 0.4 * vh && scrollTop <= 2.0 * vh){
            var middlebox = document.getElementsByClassName("midbox");
            var leftbox = document.getElementsByClassName("leftbox");
            var rightbox = document.getElementsByClassName("rightbox");

            if(scrollTop > 0.5 * vh){
                middlebox[0].style.opacity = "1";
            }
            else{
                middlebox[0].style.opacity = "0";
            }
            if(scrollTop > 0.6 * vh){
                leftbox[0].style.opacity = "1";
                leftbox[0].style.left = "5vw";

                rightbox[0].style.opacity = "1";
                rightbox[0].style.right = "5vw";
            }
            else{
                leftbox[0].style.opacity = "0";
                leftbox[0].style.left = "-40vw";

                rightbox[0].style.opacity = "0";
                rightbox[0].style.right = "-40vw";
            }

            if(scrollTop > 0.9 * vh){
                middlebox[1].style.opacity = "1";
            }
            else{
                middlebox[1].style.opacity = "0";
            }
            if(scrollTop > 1 *vh){
                leftbox[1].style.opacity = "1";
                leftbox[1].style.left = "5vw";

                rightbox[1].style.opacity = "1";
                rightbox[1].style.right = "5vw";
            }
            else{
                leftbox[1].style.opacity = "0";
                leftbox[1].style.left = "-40vw";

                rightbox[1].style.opacity = "0";
                rightbox[1].style.right = "-40vw";
            }

            if(scrollTop > 1.3 * vh){
                middlebox[2].style.opacity = "1";
            }
            else{
                middlebox[2].style.opacity = "0";
            }
            if(scrollTop > 1.4 * vh){
                leftbox[2].style.opacity = "1";
                leftbox[2].style.left = "5vw";

                rightbox[2].style.opacity = "1";
                rightbox[2].style.right = "5vw";
            }
            else{
                leftbox[2].style.opacity = "0";
                leftbox[2].style.left = "-40vw";

                rightbox[2].style.opacity = "0";
                rightbox[2].style.right = "-40vw";
            }
        }

        //Thi shit makes JS slower coz, scroll calls are very high
        // for(var k=0; k <= 10 ;k++){
        //     if( scrollTop > k*15/1000*window.innerHeight ){
        //         opacity = 0.015*k;
        //         document.getElementById("navbar").style.backgroundColor = "rgba(" + "0,0,0," + opacity +")" ;
        //     }
        // }

    });


    function swag(){
        swag1(0);
        function swag1(j){
            if(j === 20){
                j = 0;
                randomSwag();
                return;
            }
            var opacity = 0.2+Math.random()*0.2;
            document.getElementsByClassName("swag")[j].style.backgroundColor = "rgba(" + "0,0,0," + opacity +")" ;
            j++;
            setTimeout(function(){swag1(j);}, 50);
        }
    }

    function randomSwag(){
        random(0, 0);
    }
    
    function random(counter,j){
        
        j = Math.floor(Math.random()*20);
        if(counter === 40){
            counter =0;
            return;
        }
        // Hpw to elminate the opacity variable
        opacity = 0.25 +Math.random()*0.18;
        document.getElementsByClassName("swag")[j].style.backgroundColor = "rgba(" + "0,0,0," + opacity +")" ;
        counter++;
        setTimeout(function(){random(counter,j);}, 200);
    }

//least importatnt // 1. rotate menu 2.

    var rotate = false;
    document.getElementById("ham").addEventListener('click',function() {
        var clock = document.getElementsByClassName('clock')[0];
        var antiClock = document.getElementsByClassName('antiClock')[0];


        var deg1;
        var deg2;
        if(rotate === false){
            deg1 = -45;
            deg2 = 45;
            document.getElementsByClassName("dash top")[0].style.opacity = "0";
            document.getElementsByClassName("dash bottom")[0].style.opacity = "0";
            document.getElementsByClassName("dash menu")[0].style.opacity = "0";

            document.getElementById("flash").style.width = "30vw";
        }
        else{
            deg1 = 0;
            deg2 = 0;
            document.getElementsByClassName("dash top")[0].style.opacity = "1";
            document.getElementsByClassName("dash bottom")[0].style.opacity = "1";
            document.getElementsByClassName("dash menu")[0].style.opacity = "1";

            document.getElementById("flash").style.width = "0";
        }
        clock.style.webkitTransform = 'rotate('+deg1+'deg)';
        clock.style.mozTransform    = 'rotate('+deg1+'deg)';
        clock.style.msTransform     = 'rotate('+deg1+'deg)';
        clock.style.oTransform      = 'rotate('+deg1+'deg)';
        clock.style.transform       = 'rotate('+deg1+'deg)';

        antiClock.style.webkitTransform = 'rotate('+deg2+'deg)';
        antiClock.style.mozTransform    = 'rotate('+deg2+'deg)';
        antiClock.style.msTransform     = 'rotate('+deg2+'deg)';
        antiClock.style.oTransform      = 'rotate('+deg2+'deg)';
        antiClock.style.transform       = 'rotate('+deg2+'deg)';

        rotate = !rotate;
    });

    // function scrollFun(){
    //
    //     scrollTo(document.body, document.getElementById("back2").offsetTop, 600);
    // }
    //
    // function scrollTo(element, to, duration) {
    //     if (duration <= 0) return;
    //     var difference = to - element.scrollTop;
    //     var perTick = difference / duration * 10;
    //
    //     setTimeout(function() {
    //         element.scrollTop = element.scrollTop + perTick;
    //         if (element.scrollTop === to) return;
    //         scrollTo(element, to, duration - 10);
    //     }, 10);
    // }
    //

    //
    // function scrollFun() {
    // if(window.scrollY != window.innerHeight )
    // {
    //     setTimeout(function() {
    //        window.scrollTo(0,window.scrollY+5);
    //         scrollFun();
    //     }, 1);
    //    }
    // }

document.getElementById("authorButton").onclick = function() {
    document.getElementById('author').style.display = "block";                          //modal is class(of div)-->CSS-style-->displayProperties
}

document.getElementById("authorButton2").onclick = function() {
    document.getElementById('author').style.display = "block";                          //modal is class(of div)-->CSS-style-->displayProperties
}

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("closeModal")[0].onclick = function() {      //0because its className
    document.getElementById('author').style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('author')) {
        document.getElementById('author').style.display = "none";
    }
}
