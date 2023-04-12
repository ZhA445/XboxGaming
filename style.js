const SiteText = document.querySelector('.Leatest-site-text');

function Slide(e){
    const top = SiteText.offsetTop;
    // const isPass = window.scrollY > top;
    // const isnotPass = window.scrollY < (top + 1000);

    // if(isPass && isnotPass){
    //     SiteText.classList.add('fix');
    //     console.log('Show')
    // }
    
}
window.addEventListener('scroll',Slide);


const Videos = document.querySelectorAll('.vd-item');

Videos.forEach(function(vdo){
    vdo.addEventListener('click',function(){
        
        //remove classes form all images
        Videos.forEach(function(img){
            img.classList.remove('card');
            const childElement = img.querySelector('.card-body');
            if(childElement){
                childElement.classList.remove('active');
            }
        });

        //add classes to clicked image
        vdo.classList.add('card');

     

        const childElement = vdo.querySelector('.card-body') ;
        if(childElement){
            childElement.classList.add('active')
        }
    })
})


// CAtegories ON click show DAta

const categories = document.querySelector('.categories');
const cateItem =  document.querySelector('.cate');

categories.onmouseover = function(){
    cateItem.classList.toggle('show');
}

categories.onmouseout = function(){
    if(cateItem.onmouseover){
        return;
    }
    cateItem.classList.remove('show');
}

cateItem.onmouseover= function(){
    cateItem.classList.add('show')
}

cateItem.onmouseout = function(){
    cateItem.classList.remove('show');
}

