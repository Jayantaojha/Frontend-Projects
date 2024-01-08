// for nevigation menu icon
const navIcon = document.getElementById('header-icon');
const nevigationMenu = document.getElementById('nevigation-menu-container');

let counter = 0;

navIcon.addEventListener('click', () => {
    if (counter === 0) {
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-xmark');
        nevigationMenu.classList.remove('hidden');
        counter = 1;
    }
    else if (counter === 1) {
        navIcon.classList.remove('fa-xmark');
        navIcon.classList.add('fa-bars');
        nevigationMenu.classList.add('hidden');
        counter = 0;
    }

})

// -------------------------------------------------------------------------------------------


// for explore-button
const body = document.querySelector('body');
const exploreButton = document.getElementById('explore-button');
exploreButton.addEventListener('click', showApps);

function showApps() {
    const wapperDiv = document.createElement('div');
    const headerDiv = document.createElement('div');
    const contentDiv = document.createElement('div');
    const appDiv = document.createElement('div');

    // for wrapper div
    wapperDiv.style.height = "51vh";
    wapperDiv.style.width = "46vh";
    wapperDiv.style.margin = "0px 18px 0px 20px";
    wapperDiv.style.padding = "10px 6px";
    wapperDiv.style.backgroundColor = "#f2f5fc";
    wapperDiv.style.position = "absolute";
    wapperDiv.style.top = "70px";
    wapperDiv.style.borderRadius = "10px";


    // for header div
    headerDiv.style.height = "31px";
    headerDiv.style.width = "100%";
    headerDiv.style.fontSize = "18px";
    headerDiv.style.fontWeight = "600";
    headerDiv.style.color = "#525252";
    headerDiv.innerHTML = '<i class="fa-solid fa-xmark" id="app-cross-icon" style="font-size: 22px; margin-left: 4px; margin-top: 5px; "></i> <h3>Apps</h3>'
    headerDiv.style.display = "flex";
    headerDiv.style.columnGap = "100px";
    headerDiv.style.alignItems = "center";
    headerDiv.style.paddingLeft = "20px";

    // for content div
    contentDiv.style.height = "80%";
    contentDiv.style.width = "92%";
    contentDiv.style.paddingTop = "16px";
    contentDiv.style.fontSize = "18px";
    contentDiv.style.fontWeight = "600";
    contentDiv.style.color = "#525252";
    contentDiv.style.backgroundColor = "#ffffff";
    contentDiv.style.borderRadius = "10px";
    contentDiv.style.margin = "12px 10px 10px 14px";
    contentDiv.style.boxSizing = "border-box";
    contentDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
    contentDiv.style.display = "flex";
    contentDiv.style.alignContent = "start";
    contentDiv.style.justifyContent = "space-around";
    contentDiv.style.flexWrap = "wrap";
    contentDiv.style.gap = "30px";
    // contentDiv.style.rowGap = "10px";

    contentDiv.innerHTML = 
                            `<a href="#"><div id="app1"><i class="fa-solid fa-calendar-days" style="font-size: 26px; margin-left: 12px; text-align: center; "></i><p style="font-size: 12px">Calendar</p></div></a>

                            <a href="#"><div id="app2" ><i class="fa-solid fa-indian-rupee-sign" style="font-size: 26px; margin-left: 13px; text-align: center; "></i><p style="font-size: 12px">Currency</p></div></a>

                            <a href="#"><div id="app3" ><i class="fa-solid fa-calculator" style="font-size: 26px; margin-left: 18px; text-align: center; "></i><p style="font-size: 12px">Calculator</p></div></a>

                            <a href="#"><div id="app4" ><i class="fa-solid fa-cake-candles" style="font-size: 26px; margin-left: 12px; text-align: center; "></i><p style="font-size: 12px">Birthday</p></div></a>

                            <a href="#"><div id="app5" ><i class="fa-solid fa-heart-circle-check" style="font-size: 26px; margin-left: 13px; text-align: center; "></i><p style="font-size: 12px">BMI Check</p></div></a>

                            <a href="#"><div id="app6" ><i class="fa-solid fa-list-ol" style="font-size: 26px; margin-left: 12px; text-align: center; "></i><p style="font-size: 12px">To Do List</p></div></a>

                            <a href="#"><div id="app7" ><i class="fa-solid fa-note-sticky" style="font-size: 26px; margin-left: 12px; text-align: center; "></i><p style="font-size: 12px">&nbsp Notes</p></div></a>

                            <a href="#"><div id="app8" ><i class="fa-solid fa-bell" style="font-size: 26px; margin-left: 14px; text-align: center; "></i><p style="font-size: 12px">Reminder</p></div></a>

                            <a href="music.html"><div id="app9" style="margin-right: 6px;"><i class="fa-solid fa-music" style="font-size: 24px; margin-left: 4px; "></i><p style="font-size: 12px">Music</p></div></a>

                            `

    


    wapperDiv.appendChild(headerDiv);
    wapperDiv.appendChild(contentDiv);

    body.appendChild(wapperDiv);

    const appCrossIcon = document.getElementById('app-cross-icon');
    appCrossIcon.addEventListener('click', () => {
        body.removeChild('wrapperDiv');
    })

}




// ---------------------------------------------------------------------------------------------


// js code for Recent Activity, Projects and Activity of the month | Slider -----------------------------

class Curosal {
    constructor(iconElements, itemElements) {
        this.iconElements = iconElements;
        this.itemElements = itemElements;

        this.itemElementsArr = Array.from(this.itemElements);


        this.currIndexLeft = 0;
        this.currIndexRight = 1;
        this.currIndex = 0;


        this.iconElements.forEach((icon) => {
            icon.addEventListener('click', () => {
                if (icon.classList.contains('fa-circle-arrow-left')) {
                    this.slideBoxs('left');
                } else {
                    this.slideBoxs('right');
                }
            });
        });
    }

    slideBoxs(direction) {

        if (window.innerWidth <= 700 && this.itemElementsArr.length != 3) {
            if (direction === 'left' && this.currIndexLeft !== 0) {
                this.currIndexLeft -= 1;
                this.currIndexRight -= 1;
            } else if (direction === 'right' && this.currIndexRight !== 3) {
                this.currIndexLeft += 1;
                this.currIndexRight += 1;
            }

            this.itemElements.forEach((item) => {
                item.classList.add('hidden');
            });

            this.itemElements[this.currIndexLeft].classList.remove('hidden');
            this.itemElements[this.currIndexRight].classList.remove('hidden');
        }

        // for acivity cards
        else if (window.innerWidth <= 700 && this.itemElementsArr.length === 3) {

            this.itemElements.forEach((item) => {
                item.classList.add('hidden');
            });

            if (direction === 'left' && this.currIndex !== 0) {
                this.currIndex -= 1;

            } else if (direction === 'right' && this.currIndex !== this.itemElementsArr.length - 1) {
                this.currIndex += 1;
            }

            this.itemElements[this.currIndex].classList.remove('hidden');

        }

    }
}

const recentIcons = document.querySelectorAll('#recent-icon i');
const recentItems = document.querySelectorAll('.recent-main-items');

const projectIcons = document.querySelectorAll('#project-icon i');
const projectItems = document.querySelectorAll('.project-main-items');

const activityIcons = document.querySelectorAll('#activity-icon i');
const activityItems = document.querySelectorAll('.activity-main-items');


const recentCards = new Curosal(recentIcons, recentItems);
const projectCards = new Curosal(projectIcons, projectItems);
const activityCards = new Curosal(activityIcons, activityItems);

// --------------------------------------------------------------------------------------------------------------


// ++++++++++++++++++++++++++++++++ Peoples says about me section ++++++++++++++++++++++++++++++++++++++++

const peoplesImagesDivs = document.querySelectorAll('.peoples-says-image-div');
const peoplesSaysPara = document.querySelector('#peoples-says-p');

let currIndex = 0;

function slideImage() {
    peoplesImagesDivs.forEach((div) => {
        div.style.display = "none";
    })

    peoplesImagesDivs[currIndex].style.display = "block";

    switch (currIndex) {
        case 0:
            peoplesSaysPara.innerHTML = "<i>Jayanta Ojha is an exceptional software engineer and skilled web developer. <br> His meticulous approach and technical prowess create digital wonders that surpass expectations.</i>"
            break;

        case 1:
            peoplesSaysPara.innerHTML = "<i>Meet Jayanta Ojha, a talented software engineer renowned for his expertise in web development. <br>His commitment to innovation and precise coding elevate every project he touches.</i>"
            break;

        case 2:
            peoplesSaysPara.innerHTML = "<i>Jayanta Ojha, a standout software engineer and dedicated web developer. <br>His solutions resonate with efficiency and brilliance.</i>"
            break;

        default:
            break;
    }

    currIndex = (currIndex + 1) % peoplesImagesDivs.length;

}

slideImage();

setInterval(slideImage, 3000);