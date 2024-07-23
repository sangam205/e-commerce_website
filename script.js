let me_nu = document.getElementById('menu');
let m_icon = document.getElementById('menu-icon');
let c_icon = document.getElementById('close-icon');

function openMenu() {
  me_nu.style.display = 'block';
  c_icon.style.display = 'block';
  m_icon.style.display = 'none';
}

function closeMenu() {
  me_nu.style.display = 'none';
  c_icon.style.display = 'none';
  m_icon.style.display = 'block';
}


document.querySelectorAll('.nav-links li').forEach(item => {
  item.addEventListener('mouseover', () => {
    const submenu = item.querySelector('ul');
    if (submenu) {
      submenu.style.display = 'block';
    }
  });

  item.addEventListener('mouseout', () => {
    const submenu = item.querySelector('ul');
    if (submenu) {
      submenu.style.display = 'none';
    }
  });

});




const scrollContainer = document.querySelectorAll('.category-items');
const prevBtn = document.querySelectorAll('.control-prev');
const nxtBtn = document.querySelectorAll('.control-next');

scrollContainer.forEach((item, i) => {
  let containerDimension = item.getBoundingClientRect();
  let containerWidth = containerDimension.width;

  prevBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
  })

  nxtBtn[i].addEventListener('click', () => {
    item.scrollLeft += containerWidth;
  })

})





const imgs = document.querySelectorAll('.header-slider ul img ');
const prev_arrow = document.querySelector('.previous-arrow');
const next_arrow = document.querySelector('.next-arrow');

let n=0;

function changeSlide(){
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none';
  }
  imgs[n].style.display = 'block';
}
changeSlide();

prev_arrow.addEventListener('click', (e) => {
  if(n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
})

next_arrow.addEventListener('click', (e) => {
  if (n <  imgs.length - 1) {
    n++;
  } else {
    n =0;
  }
  changeSlide();
})
