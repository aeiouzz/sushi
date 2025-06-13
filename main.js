document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
  });
});

/* 📍 header */
let scrollHeader = () => {
  let header = document.querySelector('#header');
  pageYOffset >= 50 ?
    // 조건문이 참이면 a가 실행되고 거짓이면 b가 실행된다.
    header.classList.add('bg-header') :
    header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader)
// window.addEventListener("scroll",()=>{})//위랑같음


/* 📍 배경 테마 변경 */
let themeButton = document.getElementById("theme-button");
let iconTheme = "ri-sun-line";
let darkTheme = "dark-theme";

let getCurrentTheme = () => {
  // document.body.classList.contains(darkTheme)==>body가 class명 dark-theme를 가지고 있는가? true/false 삼항연산자 다크 클래스가 있으면 다크, 없으면 라이트
  let result = document.body.classList.contains(darkTheme) ? "dark" : "light";
  return result;
};

let getCurrentIcon = () => {
  let result = themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

  return result;
};

// 웹의 스토어에 값셋팅
// localStorage.setItem() --> 웹 스토어에 값을 입력
// localStorage.getItem() --> 웹 스토어의 값을 가져올 때

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");
console.log(selectedTheme);



// 새로고침해도 계속 다크모드 유지
if (selectedTheme) {
  if (selectedTheme == "dark") {
    document.body.classList.add(darkTheme);
  } else {
    document.body.classList.remove(darkTheme);
  }

  // 다크모드일 때 해 아이콘
  if (selectedIcon == "ri-moon-line") {
    themeButton.classList.add(iconTheme);
    themeButton.classList.remove("ri-moon-line");
  } else {
    themeButton.classList.remove(iconTheme);
  }
}


// 📍 모바일 메뉴 보이기
let navToggle = document.getElementById("nav_toggle");
let navMenu = document.getElementById("nav_menu");
let navClose = document.getElementById("nav_close");

navToggle.addEventListener("click", () => {
  navMenu.classList.add('show-menu')
})

navClose.addEventListener("click", () => {
  navMenu.classList.remove('show-menu')
})



// 📍 전체화면 애니메이션
ScrollReveal().reveal('.home_img,.home_data,.about_data,.about_img,.popular_card,.recently_data,.recently_img,.footer_description,footer_content,.footer_info,.footer_links,.footer_title,.footer_logo,.footer_social',{
  delay: 0,
  duration: 1500,
  origin: 'top',
  distance: '60px',
  reset: true, // false 기본값 : 애니메이션이 반복된다
});

ScrollReveal().reveal('.home_data', {
  origin: 'bottom',
});

ScrollReveal().reveal('.about_data', {
  origin: 'left',
});

ScrollReveal().reveal('.about_img', {
  origin: 'right',
});


ScrollReveal().reveal('.popular_card', {
  interval: 400,
});

ScrollReveal().reveal('.recently_data', {
  origin: 'top',
});

ScrollReveal().reveal('.recently_img', {
  origin: 'bottom',
});





/* 📍 scrollup */
let scrollup = () => {
  let scrollup = document.getElementById('scroll-up')
  pageYOffset >= 350 ?
    scrollup.classList.add('show-scroll') :
    scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup)



// menu
let scrollActive = () => {
  let scrollY = pageYOffset;

  let sections = document.querySelectorAll('section[id]');
  // section 태그들을 가져오는데 속성 중 id가 있는 section을 가져와라 
  // console.log(sections)
  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    // 현재 불어온 item인 section의 높이값
    let sectionTop = current.offsetTop - 60;
    // 현재 불러온 item의 머리인 top인 화면의 top인 위치
    let sectionId = current.getAttribute('id');
    // console.log(sectionId)

    let sectionClass = document.querySelector(`.nav_menu a[href*="${sectionId}"]`)
    console.log(sectionClass)
    // a[href*="home"] href 태그 안에 "home"이 포함되어 있는가?

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionClass.classList.add('active-link')

    } else {
      sectionClass.classList.remove('active-link')
    }
  })
}
window.addEventListener("scroll", scrollActive)
