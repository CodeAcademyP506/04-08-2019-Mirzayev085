var kart = document.querySelectorAll('.workcard');
var add = document.querySelectorAll('.add');
var link = document.querySelectorAll('.link');
var skill = document.getElementById('skill');
var hanimate = document.querySelectorAll('.hanimate');
var kartim = document.querySelectorAll('.cardhover')

for(let i = 0; i<kart.length; i++){
   // for(let i = 0; i<add.length; i++){
       // for(let i = 0; i<link.length; i++){
           // for(let i = 0; i<hanimate.length; i++){
              //  for(let i = 0; i<kartim.length; i++){
        kart[i].addEventListener('mouseover', function(){
        add[i].style.transform = 'translate(60px,0px)';
        add[i].style.transition = '0.3s ease-in-out';
        add[i].style.opacity = '1';

        link[i].style.transform = 'translate(-60px,0px)';
        link[i].style.transition = '0.3s ease-in-out';
        link[i].style.opacity = '1';

        hanimate[i].style.transform = 'translate(0px,45px)';
        hanimate[i].style.transition = '0.3s ease-in-out';
        hanimate[i].style.opacity = '1';
        
        kartim[i].style.background = '#764ef9de';
        kartim[i].style.transition = '0.3s ease-in-out';

    })

        kart[i].addEventListener('mouseout', function(){
            add[i].style.transform = 'translate(0px,0px)';
            add[i].style.transition = '0.3s ease-in-out';
            add[i].style.opacity = '0';
    
            link[i].style.transform = 'translate(0px,0px)';
            link[i].style.transition = '0.3s ease-in-out';
            link[i].style.opacity = '0';
            
            hanimate[i].style.transform = 'translate(0px,0px)';
            hanimate[i].style.transition = '0.3s ease-in-out';
            hanimate[i].style.opacity = '0';
    
            kartim[i].style.background = '';
            kartim[i].style.transition = '0.3s ease-in-out';
        
    })
}
//}
//}
//}
//}


window.addEventListener("scroll",function(){
   var tops= $("#aboutme").offset().top;
   skill.style.display = 'block'
  
    
})
