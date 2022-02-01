class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.element)
        this.top = obj.top

        this.element.style.position = 'fixed';

        this.element.style.top = this.scroll()

        this.unit = obj.unit

        window.addEventListener('scroll', () => this.scroll())
    }


    scrollNumber() {
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        } else if (this.unit == '%' || this.unit == undefined) {
            return this.calc(window.innerHeight, this.top) - this.element.clientHeight
        }
    }

    calc(height, top) {
        return height / 100 * top;
    }

    scroll() {
        this.window = this.scrollNumber()

        if (this.window - scrollY > 0) {
            this.element.style.top = this.window - scrollY + 'px';
        } else {
            this.element.style.top = 0
        }
    }
}

const myScroll = new Scroll(
    {
        element: '.header__nav',
        top: 100
    }
)




 class Hover {
    constructor(selector) {
        this.element = document.querySelector(selector)

        this.element.addEventListener('mouseover', () => {
            this.move()
        })
    }

    move() {
        this.element.style = `
            margin-top: ${random(0, innerHeight - this.element.clientHeight)}px;
            margin-left: ${random(0, innerWidth - this.element.clientWidth)}px;
            transition: 0.5s;
        `
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
}

let hover = new Hover('.header__content')

const headerBtn = document.querySelectorAll('.header__nav-btn'),
      headerMenu = document.querySelector('.header__menu');

  headerBtn.forEach(item => {
      item.addEventListener('click', () => {
          headerMenu.classList.toggle('active')
      })
  })    



const title = document.querySelector('.header__content'),
      text = document.querySelector('.header__content .title'),
      textContent = text.innerHTML;
 text.style.display = 'none';
 for(let i = 0; i < textContent.length; i++) {
    (function(i) {
                setTimeout(function() {
                    let texts = document.createTextNode(textContent[i])
                    let span = document.createElement('span');
                    span.appendChild(texts);
                    title.appendChild(span);
                }, 100 * i);
            }(i));
 }     