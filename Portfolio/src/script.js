class Curosal {
    constructor(iconElements, itemElements) {
        this.iconElements = iconElements;
        this.itemElements = itemElements;

        this.currIndexLeft = 0;
        this.currIndexRight = 1;

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

        if (window.innerWidth <= 700) {
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
    }
}

const recentIcons = document.querySelectorAll('#recent-icon i');
const recentItems = document.querySelectorAll('.recent-main-items');

const projectIcons = document.querySelectorAll('#project-icon i');
const projectItems = document.querySelectorAll('.project-main-items');

const recentCards = new Curosal(recentIcons, recentItems);
const projectCards = new Curosal(projectIcons, projectItems);
