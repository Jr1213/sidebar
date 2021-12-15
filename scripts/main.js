// side bar 
let navLinks = document.querySelectorAll('.navtree');
let sidebtn = document.querySelector('.toggle');
let side = document.querySelector('nav')

navLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        let activeLink = document.querySelector('.navtree.active');
        let ul = link.children[1];
        let liCount = ul.children.length;
        let liHeight = ul.children[0].getBoundingClientRect().height;
        let ulHeight = liCount * liHeight;
        // user click link already active
        if(link.classList.contains('active')){
            link.classList.remove('active');
            // @ts-ignore
            ul.style.height = 0 + 'px';
        }else {
            if(activeLink != null){
                activeLink.classList.remove('active')
                // @ts-ignore
                activeLink.children[1].style.height = 0 + 'px';
            }
            link.classList.add('active')
            // @ts-ignore
            ul.style.height = ulHeight + 'px';
        }
    });
});

sidebtn.addEventListener('click',()=>{
    sidebtn.classList.toggle('active');
    side.classList.toggle('close')
})