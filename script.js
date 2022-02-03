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





const headerBtn = document.querySelectorAll('.header__nav-btn'),
      headerMenu = document.querySelector('.header__menu');

  headerBtn.forEach(item => {
      item.addEventListener('click', () => {
          headerMenu.classList.toggle('active')
      })
  })    



 

 class Hover {
    constructor(selector) {
        this.headerContent = document.querySelector(selector)


        this.headerContent.addEventListener('mouseover', () => this.move())
    }

    move() {
        this.headerContent.style.marginLeft = this.random(0, innerWidth - this.headerContent.clientWidth) + 'px'
        this.headerContent.style.marginTop = this.random(0, innerHeight - this.headerContent.clientHeight) + 'px'
    }


    random(min, max) {
        return Math.floor(Math.random() * (max + 1 - min) + min)
    }
}


const hover = new Hover('.header__content')


class Typing {
    constructor(obj) {
        this.element = document.querySelector(obj.h1)

        this.content = this.element.innerHTML
        this.fullText = ''
        this.type()
    }

    type(i = 0) {
        this.fullText += this.content[i]
        this.element.innerHTML = this.fullText
        if(this.fullText != this.content) {
            i++
            setTimeout(() => this.type(i), 500)
        }
    }
}

const type = new Typing({
    h1: '.header__content h1'
})
