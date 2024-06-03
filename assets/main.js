const headerTitle = document.querySelectorAll(".title__sub");
const icons = document.querySelectorAll(".navbar__list i");
const contentTitle = document.querySelector(".content__title");
const contentAbout = document.querySelector(".content__about");
const contentStudy = document.querySelector(".content__resume");
const contentBlog = document.querySelector(".content__blog");
const contentChild = document.querySelectorAll(".content > *");

setInterval(() => {
  headerTitle.forEach((item) => {
    item.classList.toggle("active--title");
  });
}, 2500);
function addActive(name, contentChild) {
  contentChild.forEach((content) => {
    if (content.classList.contains("active--left")) {
      content.classList.remove("active--left");
    }
  });
  name.classList.add("active--left");
}
function addColor(value, arrayIcons) {
  const iconColorName = "add--icon-color";
  arrayIcons.forEach((icon) => {
    if (icon.classList.contains(iconColorName)) {
      icon.classList.remove(iconColorName);
    }
  });
  let iconAddColor = document.querySelector(`[value=${value}]`);
  iconAddColor.classList.add(iconColorName);
}
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let iconValue = icon.getAttribute("value");
    switch (iconValue) {
      case "home":
        addActive(contentTitle, contentChild);
        addColor(iconValue, icons);
        break;
      case "about":
        addActive(contentAbout, contentChild);
        addColor(iconValue, icons);
        break;
      case "study":
        addActive(contentStudy, contentChild);
        addColor(iconValue, icons);

        break;
      case "blog":
        addActive(contentBlog, contentChild);
        addColor(iconValue, icons);
        break;
      default:
        break;
    }
  });
});

function headerShow(data) {
  const headerContent = document.querySelector(`.${data.content}`);
  const headerBtn = document.querySelector(`.${data.btnIcon}`);
  const headerBtnItems = document.querySelectorAll(`.${data.btnIconItems}`);
  headerBtn.onclick = function () {
    headerContent.classList.toggle(data.contentAtv);
    headerBtnItems.forEach((item) => {
      if (item.classList.contains(data.btnAtv)) {
        item.classList.remove(data.btnAtv);
      } else item.classList.add(data.btnAtv);
    });
  };
}
headerShow({
  contentAtv: "header--acvite",
  btnAtv: "dir-btn--active",
  content: "header",
  btnIcon: "dir__icon",
  btnIconItems: "dir__icon > i",
});
headerShow({
  contentAtv: "navbar--active",
  btnAtv: "dir-btn--active",
  content: "navbar",
  btnIcon: "navbar__dir",
  btnIconItems: "navbar__dir > i",
})

const sliderContainer = document.querySelector('.mb--about__cmt-contents')
setInterval( () => {
  sliderContainer.classList.toggle('add--left-about__cmt')
}, 5000)

const resumeSkillLists = document.querySelectorAll('.resume__pale-in')

for (let i = 0; i < resumeSkillLists.length; i++) {
  const atb = resumeSkillLists[i].getAttribute('value')
  resumeSkillLists[i].style.width = atb
}

const renderBlog = () => {
  const listBlog = [ { img: "IMG_1745.PNG",
    time: '03 Mar 2023',
    title: 'Wish to become tiktoker ',
  }, { img: "IMG_1746.PNG",
      time: '03 Mar 2023',
      title: 'The first videos have many viewers',
  }, { img: "IMG_1747.PNG",
      time: '03 Mar 2023',
      title: ' Will try harder to develop the channel more ',
  },
    {
      img: "IMG_1748.PNG",
      time: '03 Mar 2023',
      title: "Try and try harder to have a well completed day"
    }]
 const resumeContainer = document.querySelector('.blog__container')  
 const arr =   listBlog.map(( {time, img, title} ) => {
      return ( ` <div class="blog__item">
                <div class="blog__item-img">
                  <img
                    src="${img}"
                    alt=""
                  />
                </div>
                <div class="blog__item-text">
                  <div class="blog__item-time">${time}</div>
                  <div class="blog__item-header">
                    <h4>${title}</h4>
                  </div>
                </div>
              </div> ` ) 
  })
  resumeContainer.innerHTML = arr.join(' ')
}
renderBlog()

const renderResume = () => {
  const creItem = (element, arr) => {
 const html =  arr.map( ({ year, subtitle, title, content }) => {
    return ( 
      `
          <div class="resume__chart">
                                <div class="resume__chart-left">
                                  <h4 class="resume__chart-year">${year}</h4>
                                  <p class="resume__chart-sub-text">${subtitle}</p>
                                </div>
                                <div class="resume__chart-right">
                                  <h4>${title}</h4>
                                  <p class="resume__chart-text-content">${content}</p>
                                </div>
                              </div>
      `
    )
  } )
  element.innerHTML = html.join(' ')
  }
  const resumeEduArr = [
  {
      year: 2019,
      subtitle: 'junior high school',
      title: "Graduated from secondary school",
      content: "Complete the secondary school program, continue to study the high school program"
  },
  {
      year: 2022,
      subtitle: 'High school',
      title: "High school graduate",
      content: "Finish high school, learn new skills"
  },
  {
      year: 2023,
      subtitle: 'This year',
      title: "ContinueTry yourself at FPT University",
      content: "Currently studying to become a global citizen with an important appointment next year with majoring in information technology"
  },
      {
    year: 2024,
    subtitle: 'This year',
    title: "Study major 1 at FPT University",
    content: "Bố m học ngu vcl luôn chịu :((("
  },
  ]

  const resumeLifeArr = [
    {
      year: 2004,
      subtitle: "The day i was born",
      title: " The day ekanC appeared in this life",
      content: " The day I was born, everyone knows that some people don't."
    },
    {
      year: 2014,
      subtitle: "Achievenment",
      title: "My super achievement",
      content: " I achieved a lot in elementary school, I learned how to 'Bốc Đầu' a bike."
    },
    {
      year: 2022,
      subtitle: "Mature",
      title: "Step into life",
      content: " When I first started away from home to continue my education, it was very difficult at first when I had to take care of everything for my life, but fortunately, I had investment capital from my family. Words from my family made me feel less bewildered ^_^."
    },
     {
      year: 2023,
      subtitle: "Self growth",
      title: "College freshman",
      content: " Entering the university gate, I met many more acquaintances, made many friends and also experienced many sad and happy stories. Up to this point, I am still happy with my choice of FPT university."
    },
    {
      year: 2024,
      subtitle: "Start majoring",
      title: "Second year university student",
      content: " It's starting to feel difficult when I have to learn too many skills and more languages ​​at the same time. Sometimes I feel pressured but I still want to do my best with the field of study I have chosen."
    },
  ]
  const resumeEdu = document.querySelector('.js--edu')
  const resumeLife = document.querySelector('.js--life')
  creItem(resumeEdu, resumeEduArr)
  creItem(resumeLife, resumeLifeArr)
}

renderResume()


const renderKnowTag = () => {
  const tagList = ['chatting', 'sociable', 'Friendly', 'Enthusiasm', 'alway smile', 'funny']
  const knowTagContainer = document.querySelector('.resume__knows-tag')
  const html = tagList.map((tag) => `<span>${tag}</span>`).join(' ')
  knowTagContainer.innerHTML = html
}

renderKnowTag()
