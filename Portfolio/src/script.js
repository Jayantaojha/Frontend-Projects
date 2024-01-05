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
        else if(window.innerWidth <= 700 && this.itemElementsArr.length === 3)
        {

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


