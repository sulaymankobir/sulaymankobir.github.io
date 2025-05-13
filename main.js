
/* toggle style switcher */
 const styleSwitcherToggle =document.querySelector(".style-switcher-toggler");
 styleSwitcherToggle.addEventListener("click", ()=> {
    d })
 // hide style witcher on scroll
 window.addEventListener("scroll",()=> {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
 })
 /* theme color */
 const alternateStyles =document.querySelectorAll(".alternate-style");

 function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
 }

 const dayNight = document.querySelector(".day-night");
 dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
 })
 window.addEventListener("load", ()=>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");

    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
 })


 /* typing effect */
 var typed = new Typed(".typing",{
    strings:[" ","Frontend Developer","MERN Developer","React Developer",],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
 })



 const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length; 
      for(let i=0;i<totalNavList;i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function(){
            for(let j=0;j<totalNavList;j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth<1200){
                asideSectionTogglerBtn();
            }
        })
      }



function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
  
}



function updateNav(element){
    for(let i=0;i<totalNavList;i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}



document.querySelector(".hire-me").addEventListener("click",()=>{
    showSection(this);
    updateNav(this);
})
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", ()=>{
        asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn(){
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.toggle("open");
        }
      }


//  for getting email response


 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbxAD5YKLgYXVUH2I8krUKp6mOWvnwkgdkVSS--32X02Mf15wDkyFaDVRoOkiFUrnfZ0pA/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => alert("Success!"))
      .catch(error => alert("something is wrong!"))
  })

