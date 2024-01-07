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

function slideImage(){
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