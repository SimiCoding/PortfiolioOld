var a;
fetch(`./languages/english.json`)
    .then(response => response.json())
    .then(data => {
        setting_data(data);

    })

function setting_data(data) {
    a = data;

}

const page= document.getElementById(`page`);
const body = document.body; // declaring the body of the document
const menulist = document.querySelector(`.menulist`);
const delay = 900;
let x = 0;

const globe = document.querySelector(`.buttonInGlobe`);
const languages = document.querySelector(`.languages`);
let language = "english";
let current_languageFile;

const spain = document.getElementById(`spain`);
const german = document.getElementById(`ger`);
const portuguese = document.getElementById(`por`);
const england = document.getElementById(`en`);

const contactMailButton = document.getElementById("contactMailButton");

const aboutNav = document.getElementById(`abo`);
const projectsNav = document.getElementById(`proj`);
const experienceNav = document.getElementById(`exp`);
const contactNav = document.getElementById(`con`);

const nameIs = document.getElementById(`names`);
const whatAmIDoing = document.getElementById(`whatamidoing`);
const Informations = document.getElementById(`Informations`);
const seeMyProjects = document.getElementById(`buttonText`);

const textForAbout = document.getElementById(`textforabout`)

const textForExp = document.getElementById(`textforexp`);

const labelExpText = document.getElementById(`experiencelabeltext`);
const labelAboText = document.getElementById(`aboutMeLabelText`);

const labelProjectsText = document.getElementById("projectslabeltext");
const textforprojects = document.getElementById("textforprojects");

const labelcontacttext= document.getElementById("contactlabeltext");
const textforcontact = document.querySelector(".textforcontact");

let globeClickedTimes = 0; // needed for now


checking_Language_Updating();


function checking_Language_Updating() {
    current_languageFile = "";
    current_languageFile = `./languages/`
    if (language === "english") {
        current_languageFile += `english.json`
    } else if (language === "german") {
        current_languageFile += `german.json`
    } else if (language === "spain") {
        current_languageFile += `spain.json`
    } else if (language === "portuguese") {
        current_languageFile += `port.json`
    }

    fetch(current_languageFile)
        .then(response => response.json())
        .then(data => JSON.parse(JSON.stringify(data)))
        .then(data => {

            aboutNav.innerHTML = data.aboutNav;
            experienceNav.innerHTML = data.experienceNav;
            projectsNav.innerHTML = data.projectsNav;
            contactNav.innerHTML = data.contactNav;

            nameIs.innerText = data.nameIs;
            Informations.innerText = data.Informations;
            whatAmIDoing.innerText = data.whatAmIDoing;

            textforabout.innerText = data.textforabout
            labelAboText.innerText = data.labelAboText

            textforexp.innerText = data.textforexp
            labelExpText.innerText=data.labelExpText

           textforprojects.innerText=data.textforprojects;
           labelProjectsText.innerText=data.labelProjectsText;

           labelcontacttext.innerText = data.labelcontacttext;
           textforcontact.innerHTML= data.textforcontact;
           

            document.getElementById(`buttonText`).innerHTML = data.seeProjects;
            console.log(data.seeProjects);
        })
}



body.addEventListener(`wheel`, checkScrollDirection); // checking for scroll direction for the menubar


//checking the scroll direction of the body from the mouse wheel
function checkScrollDirection(event) {
    menulist.classList.remove(`topReached`);

    if (checkScrollDirectionIsUp(event)) {


        menulist.classList.remove(`topReached`);
        menulist.classList.remove(`scrollDown`);

        if (!menulist.classList.contains(`scrollUp`)) {

            menulist.classList.remove(`scrollDown`); //and showing menu bar
            menulist.classList.add(`scrollUp`); // up 
           menulist.classList.add(`shadowMenuList`);; //  shadow

            menulist.classList.add(`animate__fadeInDown`); // animate in
            menulist.classList.remove(`topReached`);
            setTimeout(function() {
                menulist.classList.remove(`animate__fadeInDown`); // remove unecessary class
            }, delay);

        }



    } else {

        menulist.classList.remove(`scrollUp`);
        menulist.classList.remove(`topReached`);
        if (!menulist.classList.contains(`scrollDown`)) {



            menulist.classList.remove(`scrollUp`); // Down
            menulist.classList.add(`animate__fadeOutUp`); // animate out
            setTimeout(function() {
                menulist.classList.remove(`animate__fadeOutUp`); // remove unecessary class
                menulist.classList.add(`scrollDown`); //  and hiding menu bar
                x = 1;
            }, delay);
        } else {

        }

    }
}

// checking data for comparison and mouse wheel detection
function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

setInterval(function() {
  
    if (x === 1) {


        if (window.scrollY === 0) {
            x = 0;
            //user scrolled to the top of the

            console.log("top");
            menulist.classList.remove(`scrollDown`);
            menulist.classList.add(`scrollUp`);
menulist.classList.remove(`shadowMenuList`);
           // menulist.classList.add(`animate__fadeInDown`); // animate in
         //   menulist.classList.add(`topReached`);
         /*   setTimeout(function() {
                menulist.classList.remove(`animate__fadeInDown`); // remove unecessary class

            }, delay);*/

        }

    }
}, 100)

//setInterval(function() {

//}, 100)


// checking if globe is clicked
globe.addEventListener(`click`, function() {
    if (globeClickedTimes === 0) {
        globeClickedTimes = 1;
        languages.classList.add(`globeClicked`);
    } else if (globeClickedTimes === 1) {
        globeClickedTimes = 0;
        languages.classList.add(`globeClickedBack`);
        languages.classList.remove(`globeClicked`);
        setTimeout(function() {
            languages.classList.remove(`globeClickedBack`);
        }, 500)
    }
})

spain.addEventListener(`click`, function() {
    language = "spain";
    checking_Language_Updating();
})
german.addEventListener(`click`, function() {
    language = "german";
    checking_Language_Updating();
})
england.addEventListener(`click`, function() {
    language = "english";
    checking_Language_Updating();
})
portuguese.addEventListener(`click`, function() {
    language = "portuguese";
    checking_Language_Updating();
})

aboutNav.addEventListener(`click`,function(){
window.scrollTo({
        top: 600,
        behavior: 'smooth',
      });
});
experienceNav.addEventListener(`click`,function(){
    window.scrollTo({
        top: 1600,
        behavior: 'smooth',
      });
});

projectsNav.addEventListener("click", function(){
    window.scrollTo({
        top: 2200,
        behavior:"smooth",
    });
});

contactNav.addEventListener("click", function(){
window.scrollTo({
    top: 2600,
    behavior:"smooth",
});
}
);

setTimeout(() => {
    contactMailButton.addEventListener("click", function(){
        
        window.location.href = "mailto:simi.coding@gmail.com";
        
    });
}, 10000);
