//---------------------------------------------Glide.js activators
new Glide(".glide", {
    type: "carousel",
    autoplay: 8000,
    perView: 1,
    gap: 0,
    hoverpause: false,
    animationDuration: 2000,
}).mount();


new Glide(".categoriesGlide", {
    type: "carousel",
    perView: 3,
    gap: 0,
    hoverpause: false,
    focusAt: 'center',
    animationDuration: 1000,
    breakpoints: {
        1302: {
            perView: 2
        },
        600: {
            perView: 1,
        }
    },
}).mount();


new Glide(".reviewGlide", {
    type: "carousel",
    autoplay: 5000,
    perView: 3,
    gap: 0,
    hoverpause: false,
    focusAt: 'center',
    animationDuration: 1000,
    breakpoints: {
        1302: {
            perView: 2
        },
        600: {
            perView: 1,
        }
    },
}).mount();



//-------------------------------------------------Theme Controls
const themeToggler = document.getElementById("themeToggler");

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  themeToggler.innerHTML = `<i class="fa-solid fa-moon text-white text-2xl"></i>`;
} else {
  document.documentElement.classList.remove('dark');
  themeToggler.innerHTML = `<i class="fa-solid fa-sun text-white text-2xl"></i>`;
}

// Giving the user the ability to manually select a mode
themeToggler.addEventListener("click", function () {
    if (themeToggler.innerHTML === `<i class="fa-solid fa-sun text-white text-2xl"></i>`) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      themeToggler.innerHTML = `<i class="fa-solid fa-moon text-white text-2xl"></i>`;
    } 
    else if (themeToggler.innerHTML ===`<i class="fa-solid fa-moon text-white text-2xl"></i>`) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      themeToggler.innerHTML = `<i class="fa-solid fa-sun text-white text-2xl"></i>`;
    }
})



//-------------------------------------Toggling the mobile navigation menu
const openM = document.querySelectorAll(".openM");
const navMenu = document.getElementById("navMenu");
const closeM = document.getElementById("closeM");

openM.forEach(button => {
    button.addEventListener("click", function () {
        navMenu.classList.remove("allIL:-right-full");
        navMenu.classList.add("allIL:right-0");
    })
});

closeM.addEventListener("click", function () {
    navMenu.classList.remove("allIL:right-0");
    navMenu.classList.add("allIL:-right-full");
})