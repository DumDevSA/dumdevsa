let root = document.querySelector(":root");

let welcome = document.querySelector(".welcome");

let modal = document.querySelector(".pop");

let intro = document.querySelector(".intro");

let archieve = document.querySelector(".archieve");

let archieved = document.querySelector(".archieved");

let modalBtn = document.querySelector(".pop-btn");

let popUse = document.querySelector(".pop-use");

let homeSection = document.querySelector("#home");

let bioSection = document.querySelector("#about");

let associatesSection = document.querySelector("#associates");

let clonesSection = document.querySelector("#clones");

let projectsSection = document.querySelector("#projects");

let regDate = document.querySelector(".reg-date");

let regDated = document.querySelector(".reg-dated");

let timer = document.querySelector(".timer");

let newDate = document.querySelector(".new-date");

let blogSection = document.querySelector("#blog");

let formsSection = document.querySelector("#forms");

let contactsSection = document.querySelector("#contacts");

let home = document.querySelector(".home");

let associates = document.querySelector(".associates");

let about = document.querySelector(".about");

let blog = document.querySelector(".blog");

let forms = document.querySelector(".forms");

let contacts = document.querySelector(".contacts");

let clones = document.querySelector(".clones");

let projects = document.querySelector(".projects");

let myYears = document.querySelector(".aged");

//let myYear = document.querySelector(".age");

let index = document.querySelector(".index");

let htmlDate = document.querySelector(".html-date");

let cssDate = document.querySelector(".css-date");

let jsDate = document.querySelector(".js-date");

let sassDate = document.querySelector(".sass-date");

let status = true;

let version = document.querySelector(".version");

let firstForm = document.querySelector(".formA");

let secForm = document.querySelector(".formB");

let openFormA = document.querySelector("#openFormA");

let openFormB = document.querySelector("#openFormB");

let rose = document.querySelector("#rose");

let risen = document.querySelector("#risen");

let versionOne = document.querySelector(".v1-date");

let moreGoals = document.querySelector(".moreGoals");

let imageSources = document.querySelector(".imaged-source");

let imagesClick = document.querySelector(".image-sources");

let policies = document.querySelector(".policies");

let statusPrime = true;

let terming = document.querySelector(".terming");

let imagedHeading = document.querySelector(".imaged-heading");

let imagedHeadingTwo = document.querySelector(".imaged-heading-2");

let imagedFirst = document.querySelector(".imaged-first");

let imagedSecond = document.querySelector(".imaged-second");

let navDumisa = document.querySelector(".nav-dumisa");

let contentThree = document.querySelector(".content-three");

let contentThreePrime = document.querySelector(".content-three-3");

let versionInfo = document.querySelector(".version-info");

let iqbaal = document.querySelector(".iqbaal");

let oneOne = document.querySelector(".version-one-one");

let dumisa = document.querySelector(".sakhile-dumisa");

let overlayed = document.querySelector(".overlayed");

let dumPop = document.querySelector(".dum-pop");

let formOne = document.querySelector("#formA");

let logo = document.querySelector(".logo");

let experience = document.querySelector(".experience");

let fromName = document.querySelector(".from-name");

let fromEmail = document.querySelector(".from-email");

let fromNo = document.querySelector(".from-no");

let fromPwd = document.querySelector(".from-pwd");

let blogTwo = document.querySelector(".blog-two");

let sbtB = document.querySelector(".sbtB");

let titleA = document.querySelector("#titleA");

let titleB = document.querySelector("#titleB");

let comeOne = document.querySelector(".come-1");

let comeTwo = document.querySelector(".come-2");

let homeOpen = document.querySelector(".home-open");

let aboutOpen = document.querySelector(".about-open");

let blogOpen = document.querySelector(".blog-open");

let formsOpen = document.querySelector(".forms-open");

let contactsOpen = document.querySelector(".contacts-open");

let clonesOpen = document.querySelector(".clones-open");

let projectsOpen = document.querySelector(".projects-open");

let associatesOpen = document.querySelector(".associates-open");

let summaryStatus = true;

let summaryA = document.querySelector("#summary-a");

let summaryB = document.querySelector("#summary-b");

let summaryC = document.querySelector("#summary-c");

let summaryD = document.querySelector("#summary-d");

let indOne = document.querySelector(".indicator-1");

let indTwo = document.querySelector(".indicator-2");

let indThree = document.querySelector(".indicator-3");

let indFour = document.querySelector(".indicator-4");

let cloneMore = document.querySelector(".clone-more");

let associatesMore = document.querySelector(".associates-more");

function none(element) {
    element.style.display = "none";
}
function flex(element) {
    element.style.display = "flex";
}
function block(element) {
    element.style.display = "block";
}
function inline(element) {
    element.style.display = "inline";
}

let statusA = document.querySelector(".sumcancel-1");
let statusB = document.querySelector(".sumcancel-2");
let statusC = document.querySelector(".sumcancel-3");
let statusD = document.querySelector(".sumcancel-4");

// summary icon status alter
function summaryIndicator(a,b){
  
  a.classList.toggle("none");
  b.classList.toggle("none");
}

summaryA.addEventListener("click" , () => summaryIndicator(indOne,statusA));

summaryB.addEventListener("click" , () => summaryIndicator(indTwo,statusB));

summaryC.addEventListener("click" , () => summaryIndicator(indThree,statusC));

summaryD.addEventListener("click" , () => summaryIndicator(indFour,statusD));


//BEGINNING OF THE NAVIGATION FUNCTION
let items = [homeSection, bioSection, blogSection, contactsSection, formsSection, clonesSection, projectsSection, associatesSection
];

let indicators = [homeOpen, aboutOpen, blogOpen, contactsOpen, formsOpen, clonesOpen, projectsOpen, associatesOpen
];

decider(homeSection, homeOpen);

function decider(a, b) {

    let allItems = new Set(items);
    let allInd = new Set(indicators);

    allItems.delete(a);
    allInd.delete(b);

    switch (status) {
        case true:

            a.style.display = "flex";
            for (one of allItems) {
                none(one);
            }

            none(b);
            for (two of allInd) {
                block(two);
            }

            status = false;
            break;

        case false:

            allItems.add(a);

            for (one of allItems) {
                none(one);
            }

            allInd.add(b);

            for (two of allInd) {
                block(two);
            }

            status = true;
    }

};

let preventedNavs = [home, about, blog, forms, contacts, projects, clones, associates];

for (prevent of preventedNavs) {
    prevent.addEventListener("click", (e) => e.preventDefault());
}

home.addEventListener("click", () => decider(homeSection, homeOpen));

about.addEventListener("click", () => decider(bioSection, aboutOpen));

blog.addEventListener("click", () => decider(blogSection, blogOpen));

forms.addEventListener("click", () => decider(formsSection, formsOpen));

contacts.addEventListener("click", () => decider(contactsSection, contactsOpen));

clones.addEventListener("click", () => decider(clonesSection, clonesOpen));

projects.addEventListener("click", () => decider(projectsSection, projectsOpen));

associates.addEventListener("click", () => decider(associatesSection, associatesOpen));
//END OF THE NAVIGATION FUNCTION

// images pop up start

imagesClick.addEventListener("click", () => {

    flex(modal);
    flex(imageSources);
    flex(imagedFirst);

    none(versionInfo);
    none(contentThreePrime);
    none(dumPop);
    none(imagedSecond);
    none(imagedHeadingTwo);

    block(imagedHeading);
    block(contentThree);

    index.style.touchAction = " none";
});

imageSources.addEventListener("click", () => {

    none(modal);
    index.style.touchAction = "auto";
});
// end of the images pop up

// document onload modal
flex(welcome);
flex(intro);
index.style.touchAction = " none";

modalBtn.addEventListener("click", ()=> {
    none(welcome);
    index.style.touchAction = " auto";
    title.textContent = "Terms and Conditions successfuly accepted:";
    
    content.textContent = `You successfuly accepted all the terms and conditions of this website. Enjoy your tour`;
    
    universalOn(2000);
});

blogTwo.addEventListener("click", () => none(blogSection));

//ALL TIME & DATE FORMATS
setInterval(() =>{
  
let dOb = new Date("21 feb 2003");

let date = new Date();

let myAgeCal = date.getFullYear() - dOb.getFullYear();

let myAgeCalTwo = `${myAgeCal} Years old`;
let myAge = `${myAgeCal} Years old`;

let today = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, ${date.toDateString()}`;

cloneMore.textContent = today;
associatesMore.textContent = today;

regDate.textContent = today;

regDated.textContent = today;

newDate.textContent = new Date("5 mar 2022").toDateString();

let versionOneDate = new Date("2022 may 5");

experience.textContent = date.getFullYear() - 2020;

versionOne.textContent = versionOneDate.toDateString();

moreGoals.textContent = today;

timer.textContent = today;

// today and myAge

myYears.textContent = myAge;

//myYear.textContent = myAge;

let htmlDating = new Date("24 Mar 2020");
let cssDating = new Date("4 June 2020");
let jsDating = new Date("10 September 2021");
let sassDating = new Date("21 Mar 2022");


htmlDate.textContent = htmlDating.toDateString();

cssDate.textContent = cssDating.toDateString();

jsDate.textContent = jsDating.toDateString();

sassDate.textContent = sassDating.toDateString();

},0);
//ALL TIME & DATE FORMATS END

version.textContent = "v1.905052022";

console.info(`This version of the portfolio is: ${version.textContent}`);


openFormB.addEventListener("click", () => {

    none(firstForm);
    flex(secForm);
});

openFormA.addEventListener("click", () => {

    none(secForm);
    flex(firstForm);
});

terming.addEventListener("click", () => {

    flex(welcome);
    flex(intro);
    block(policies);
    none(popUse);
    none(modalBtn);

    index.style.touchAction = " none";
    intro.addEventListener("click", () => {
        none(welcome);
        index.style.touchAction = " auto";
    })});

iqbaal.addEventListener("click", () => {

    flex(modal);
    flex(imageSources);
    flex(imagedSecond);
    flex(imagedHeadingTwo);

    none(versionInfo);
    none(imagedHeading);
    none(dumPop);
    none(imagedFirst);
    none(contentThree);

    inline(contentThreePrime);

    index.style.touchAction = " none";
});

const versionInfoFun = () => {

    flex(modal);
    flex(versionInfo);
    none(intro);
    none(imageSources);
    none(dumPop);

    index.style.touchAction = " none";
};

let myLogo = () => {

    flex(modal);
    none(versionInfo);
    none(imageSources);
    block(dumPop);

    index.style.touchAction = " none";
};

dumPop.addEventListener("click", () => {
    none(modal);
    index.style.touchAction = " auto"
});

//addEventListener by name
dumisa.addEventListener("click", myLogo);

logo.addEventListener("click", myLogo);

navDumisa.addEventListener("click", versionInfoFun);

oneOne.addEventListener("click", versionInfoFun);

versionInfo.addEventListener("click", () => {
    none(modal);
    index.style.touchAction = " auto";
});

let namesError = document.querySelector(".name-error");

let noError = document.querySelector(".no-error");

let emailError = document.querySelector(".email-error");

let pwdError = document.querySelector(".pwd-error");

let pwdConfirmError = document.querySelector(".confirm-error");

let fieldOne = document.querySelector(".field-1");
let fieldTwo = document.querySelector(".field-2");
let fieldThree = document.querySelector(".field-3");
let fieldFour = document.querySelector(".field-4");
let fieldFive = document.querySelector(".field-5");


// Regex
let emailReg = /^([A-Z|a-z|0-9|\.|-]+)@([a-z|0-9]{2,20})\.([A-Za-z0-9]{2,10}$)/;

let noReg = /^(0[6-9]{1}[0-9]{1})([-\s]{1})?([0-9]{3})([-\s]{1})?([0-9]{4})$/;

let nameReg = /^([A-Za-z]{4,13})\s([A-Za-z]{4,13})$/;

let pwdReg = /(^\S)+([A-Za-z\d^/S*D]){8,}$/i;

let sbtA = document.querySelector(".sbtA");

let red = "#FF3300";

let green = "#09B83E";

let goodName = document.querySelector(".good-name");
let goodEmail = document.querySelector(".good-email");
let goodNo = document.querySelector(".good-no");
let goodPwd = document.querySelector(".good-pwd");
let goodConfirm = document.querySelector(".good-confirm");

function validate() {

    let names = document.myForm.names.value.trim();

    let numbered = document.myForm.number.value;

    let email = document.myForm.email.value.trim();

    let pwd = document.myForm.pwd.value;

    let pwdConfirm = document.myForm.pwdConfirm.value.trim();

    if (!nameReg.test(names)) {

        namesError.classList.remove("none");
        fieldOne.style.borderColor = red;
        sbtA.style.backgroundColor = red;
        goodName.classList.add("none");
        titleA.style.backgroundColor = red;
        return false;
        names.focus();

    } else if (!emailReg.test(email)) {

        namesError.classList.add("none");
        fieldOne.style.borderColor = green;
        goodName.classList.remove("none");


        goodEmail.classList.add("none");
        emailError.classList.remove("none");
        fieldTwo.style.borderColor = red;
        sbtA.style.backgroundColor = red;
        titleA.style.backgroundColor = red;
        return false;
        email.focus()

    } else if (!noReg.test(numbered)) {
        namesError.classList.add("none");
        fieldOne.style.borderColor = green;
        goodName.classList.remove("none");
        emailError.classList.add("none");
        fieldTwo.style.borderColor = green;
        goodEmail.classList.remove("none");


        goodNo.classList.add("none");
        noError.classList.remove("none");
        fieldThree.style.borderColor = red;
        sbtA.style.backgroundColor = red;
        titleA.style.backgroundColor = red;
        return false;
        numbered.focus();


    } else if (!pwdReg.test(pwd)) {

        noError.classList.add("none");
        fieldThree.style.borderColor = green;
        goodNo.classList.remove("none");
        namesError.classList.add("none");
        fieldOne.style.borderColor = green;
        goodName.classList.remove("none");
        emailError.classList.add("none");
        fieldTwo.style.borderColor = green;
        goodEmail.classList.remove("none");


        goodPwd.classList.add("none");
        pwdError.classList.remove("none");
        fieldFour.style.borderColor = red;
        sbtA.style.backgroundColor = red;
        titleA.style.backgroundColor = red;
        return false;
        pwd.focus();

    } else if (pwdConfirm !== pwd) {
        noError.classList.add("none");
        fieldThree.style.borderColor = green;
        goodNo.classList.remove("none");
        namesError.classList.add("none");
        fieldOne.style.borderColor = green;
        goodName.classList.remove("none");
        emailError.classList.add("none");
        fieldTwo.style.borderColor = green;
        goodEmail.classList.remove("none");
        pwdError.classList.add("none");
        fieldFour.style.borderColor = green;
        goodPwd.classList.remove("none");


        goodConfirm.classList.add("none");
        pwdConfirmError.classList.remove("none");
        fieldFive.style.borderColor = red;
        sbtA.style.backgroundColor = red;
        titleA.style.backgroundColor = red;
        return false;
        pwdConfirm.focus();

    } else {

        setTimeout(() => {

            goodName.classList.remove("none");
            goodEmail.classList.remove("none");
            goodNo.classList.remove("none");
            goodPwd.classList.remove("none");
            goodConfirm.classList.remove("none");


            namesError.classList.add("none");
            emailError.classList.add("none");
            noError.classList.add("none");
            pwdError.classList.add("none");
            pwdConfirmError.classList.add("none");


            fieldOne.style.borderColor = green;
            fieldTwo.style.borderColor = green;
            fieldThree.style.borderColor = green;
            fieldFour.style.borderColor = green;
            fieldFive.style.borderColor = green;


            fromName.textContent = document.myForm.names.value;

            fromEmail.textContent = document.myForm.email.value;

            fromNo.textContent = document.myForm.number.value;

            fromPwd.textContent = document.myForm.pwd.value;
            sbtA.style.backgroundColor = green;
            titleA.style.backgroundColor = green;
            none(formA);
            flex(archieve);
            archieve.style.flexDirection = "column";
            
            title.textContent = "Registered successfuly";
            
            content.textContent = `You successfuly registered to the system. We are pleased to welcome you.`;
            
            universalOn(4000);
        }, 1)
        return false;
    }};

risen.addEventListener("click", () => {
    none(archieve);
    flex(formA);
    
title.textContent = "Logged out successfuly";
    
content.textContent = `You successfuly logged out from the system. See you soon!`;
    
    universalOn(4000);
});

function login() {

    let email = document.secondForm.email.value.trim();

    let fromEmailed = document.querySelector(".from-emailed");

    let pwd = document.secondForm.pwd.value.trim();

    let emailField = document.querySelector(".email-field");

    let pwdField = document.querySelector(".pwd-field");

    if (!emailReg.test(email)) {

        emailField.style.borderColor = red;
        sbtB.style.backgroundColor = red;
        titleB.style.backgroundColor = red;
        return false;
        email.focus()

    }if (!pwdReg.test(pwd)) {

        emailField.style.borderColor = green;
        pwdField.style.borderColor = red;

        sbtB.style.backgroundColor = red;
        titleB.style.backgroundColor = red;
        return false;
        pwd.focus();

    } else {

        setTimeout(() => {

            pwdField.style.borderColor = green;

            emailField.style.borderColor = green;

            fromEmailed.textContent = email;
            sbtB.style.backgroundColor = green;
            titleB.style.backgroundColor = green;
            secForm.style.display = "none";
            flex(archieved);
            archieved.style.flexDirection = "column";
            
            title.textContent = "Logged in successfuly";
            
            content.textContent = `You successfuly logged in to your account. Welcome back.`;
            
            universalOn(4000);
        }, 1)
        return false;
    }}

rose.addEventListener("click", () => {
    none(archieved);
    flex(secForm);
    title.textContent = "Logged out successfuly";
    
    content.textContent = `You successfuly logged out from the system. See you soon!`;
    
    universalOn(4000);
});


// rgb generator

let colorValue = document.querySelector(".color-value");

let outputColor = document.querySelector(".output-color");

let rangeOne = document.querySelector("#range-1");

let rangeTwo = document.querySelector("#range-2");

let rangeThree = document.querySelector("#range-3");

let oned = document.querySelector(".oned");

let twod = document.querySelector(".twod");

let threed = document.querySelector(".threed");

setInterval(() =>{
  
oned.textContent = rangeOne.value;
twod.textContent = rangeTwo.value;
threed.textContent = rangeThree.value;
  
  color();
  
},0)

function color(){
outputColor.style.backgroundColor=`rgb(${rangeOne.value},${rangeTwo.value},${rangeThree.value})`;

colorValue.textContent = `rgb(${rangeOne.value},${rangeTwo.value},${rangeThree.value})`;

}

let statusColor = true;
let statusFont = true;
let statusBorder = false;


let themeColor = document.querySelector(".theme-color");

let themeBorder = document.querySelector(".theme-border");

let themeFont = document.querySelector(".theme-font");

themeColor.addEventListener("click" , () =>{
  
switch (statusColor) {
case true:

themeColor.textContent="change from white to smoke";
root.style.setProperty("--theme", "#ffffff");
title.textContent = "Theme color modification";

content.textContent = `You successfuly set the theme to white;`;

universalOn(3500);
statusColor = false;
break;
case false:

themeColor.textContent ="change from smoke to white";  
root.style.setProperty("--theme", "#eeeeee");

title.textContent = "Theme color modification";

content.textContent = `You successfuly set the theme to default;`;

universalOn(3500);
statusColor = true;
break;
}});

themeFont.addEventListener("click" , () =>{
  
switch (statusFont) {
case true:

themeFont.textContent="change big to small";
root.style.setProperty("--small", ".8rem");
root.style.setProperty("--smallest", ".6rem");
root.style.setProperty("--medium", ".9rem");

title.textContent = "Font size modification";

content.textContent = `You successfuly made the font bigger.`;

universalOn(3500);

statusFont = false;
break;
case false:

themeFont.textContent ="change from current to big";  
root.style.setProperty("--small", ".7rem");
root.style.setProperty("--smallest", ".5rem");
root.style.setProperty("--medium", ".8rem");

title.textContent = "font size modification";

content.textContent = `You successfuly set the font to default`;

universalOn(3500);

statusFont = true;
break;
}});

themeBorder.addEventListener("click", () => {

  switch (statusBorder) {
    case true:

root.style.setProperty("--border", "none");

themeBorder.textContent = "change from none to border";

title.textContent = "Border modification";

content.textContent = `You successfuly hidden the border;`;

universalOn(3500);

statusBorder = false;
break;
case false:

themeBorder.textContent = "change from border to none";
root.style.setProperty("--border", ".1px solid #0084ff");

title.textContent = "Border modification:";

content.textContent = `You successfuly set the border to default.`;

universalOn(3500);


      statusBorder = true;
      break;
  }
});

let copy = document.querySelector("#copy");

copy.addEventListener("click" ,() =>{
  
  navigator.clipboard.writeText(colorValue.textContent);
  
  setTimeout(() => {
  
    universalOn(3500);
  
    title.textContent = "Copied Successfully!";
  
    content.textContent = `You copied:  ${colorValue.textContent}`;
  
  }, 4);
  
  

});


// universal modal
let universal = document.querySelector("#universal");

let title = document.querySelector(".uni-title");

let content = document.querySelector(".uni-content");

function universalOn(duration){
flex(universal);

setTimeout(universalOff,duration)
}

function universalOff(){
none(universal);
}
// universal modal end


//Random Quote Generator

let quoteTitle = document.querySelector(".quote-title");

let quoteCounter = document.querySelector(".quote-counter");

let quoteContent = document.querySelector(".quote-content");


let quoteBtn = document.querySelector(".quote-btn");

quoteBtn.addEventListener("click" , loadQuote);

function loadQuote(){
  
let xhr = new XMLHttpRequest();

xhr.open("GET", "quotes.json",true);

xhr.onload = function (){
  
if(this.status == 200){
 
let dataquotes = JSON.parse(this.responseText);
 
setTimeout(() => {
 
let round = Math.random();
 
let random = Math.round(round * (dataquotes.length - 1));

quoteCounter.textContent = `${(random+1)} of ${(dataquotes.length)}`;

quoteTitle.textContent = `   ${dataquotes[random].name}`;
 
quoteContent.textContent = `   ${dataquotes[random].quote}  `;

//quoteImg.classList.add("size");

//quoteImg.setAttribute("src", `   ${dataquotes[random].image}`);
 
   },0)}
   
   }
 xhr.send();
}


//Random Quote Generator End

quoteBtn.addEventListener("click" , () => quoteBtn.classList.toggle("toggled-quote"));

sbtA.addEventListener("click" , () => sbtA.classList.toggle("toggled-quote"));

sbtB.addEventListener("click" , () => sbtB.classList.toggle("toggled-quote"));

modalBtn.addEventListener("click" , () => modalBtn.classList.toggle("toggled-quote"));

themeFont.addEventListener("click" , () => themeFont.classList.toggle("toggled-quote"));

themeColor.addEventListener("click" , () => themeColor.classList.toggle("toggled-quote"));

themeBorder.addEventListener("click" , () => themeBorder.classList.toggle("toggled-quote"));

let policyStatus = true;

let acceptPolicy = document.querySelector("#accept-policy");

acceptPolicy.addEventListener("change" , function policyAcceptence(){
  
switch (policyStatus) {
  
  case true:
    
none(modalBtn);
policyStatus = false;
title.textContent = "Terms and conditions rejected:";

content.textContent = `You rejected our terms and conditions. Tick the given box to successfuly tour the website and accept the policies;`;

universalOn(3500);

break;

  case false:

block(modalBtn);
policyStatus = true;

break

}
});

// stop watch

let start = document.querySelector("#start");

let pause = document.querySelector("#pause");

let clear = document.querySelector("#clear");

let decreament = document.querySelector("#decreament");

let timerOutput = document.querySelector("#timer-output");

let timeoutId;

function startCounting(){
  
  clearInterval(timeoutId);
  
 timeoutId = setInterval( () => {
   
  timerOutput.textContent = parseFloat(timerOutput.textContent)+1;
 },1000)
  
}

function startDecreament(){
  
  pauseCounting();
  
 timeoutId = setInterval( () => {
  
  if (timerOutput.textContent >= 1) {
    
    timerOutput.textContent = parseFloat(timerOutput.textContent)-1;
    
  } else {
    
    setTimeout(() =>{
    pauseCounting();
    timerOutput.textContent = 0;},0)
  }

  },1000)
  
}

function pauseCounting(){
  clearInterval(timeoutId);
  start.textContent = "resume";
}

function clearTimer(){
  
  pauseCounting();
  
  clearInterval(timeoutId);
  
  timerOutput.textContent = 0;
  
  start.textContent = "start";
  
}

start.addEventListener("click" , startCounting);

pause.addEventListener("click" , pauseCounting);

clear.addEventListener("click" , clearTimer);

pause.addEventListener("click" , () => pause.classList.toggle("toggled-quote"));

start.addEventListener("click" , () => start.classList.toggle("toggled-quote"));

clear.addEventListener("click" , () => clear.classList.toggle("toggled-quote"));

decreament.addEventListener("click", startDecreament);

decreament.addEventListener("click", () => decreament.classList.toggle("toggled-quote"));

// stop watch end

// hex start

let hexValue = document.querySelector("#hex-value");

let hexOutput = document.querySelector("#hex-output");

let hexCopy = document.querySelector("#hex-copy");

setInterval(() =>{
  
hexValue.setAttribute(`value`,`${hexValue.textContent}`);
  
hexOutput.style.backgroundColor= `#${hexValue.value}`;

} ,0);
  
hexCopy.addEventListener("click" , () =>{
  
navigator.clipboard.writeText(`#${hexValue.value}`);
  
  title.textContent= "copied successfuly";
  
  content.textContent= `You successfuly copied: "#${hexValue.value}"`;
  
  universalOn(3500);
  
});

// hex end

//list

let listAdd = document.querySelector("#add-item");

let listDelete = document.querySelector("#delete-item");

let listValue = document.querySelector("#list-value");

let listItem = document.querySelector("#list-item");


listDelete.addEventListener("click", () => listDelete.classList.toggle("toggled-quote"));

listAdd.addEventListener("click", () => listAdd.classList.toggle("toggled-quote"));

let listArray = [];

listAdd.addEventListener("click" , ()=>{
  
setTimeout(()=>{
listArray.push(listValue.value.toUpperCase());

let newLi = document.createElement("li");

newLi.textContent = listValue.value;

listItem.appendChild(newLi);

newLi.ins

listValue.value=""
},0);

})

listDelete.addEventListener("click" , ()=>{
  
  setTimeout(()=>{

if(isNaN(parseInt(listValue.value))){

title.textContent ="Wrong input entered:";

content.textContent="To successfuly delete an item, you must type its number then press delete. Only a number is accepted.";
universalOn(4000);


}else if(listValue.value > (listItem.children.length+1)|| listItem.children.length == 0){
  
}else{
  
title.textContent ="successfuly Deleted the following:";

content.textContent = `${listItem.children[(parseInt(listValue.value)-1)].textContent}`;

universalOn(4000);
  
listItem.removeChild(listItem.children[(parseInt(listValue.value)-1)]);

listValue.value="";

}
},0);
});

let greeting = document.querySelector("#greeting");

let dumLogo = document.querySelector(".letter");

let greeted = document.querySelector(".greeted");

let greetLanguagr = document.querySelector("#greet-language");

function loadGreeting(){
  
let xhr = new XMLHttpRequest();

xhr.open("GET", "greetings.json",true);

xhr.onload = function (){

setInterval(() => {
  
if(this.status == 200){
 
let greetings = JSON.parse(this.responseText);
 
let round = Math.random();
 
let random = Math.round(round * (greetings.length - 1));

greeting.textContent = `${greetings[random].greeting}`;
 
greetLanguagr.textContent = `   ${greetings[random].language}    `;

   }
   },3500)}
   
 xhr.send();
}

loadGreeting();


// hexideximal generator
let hexOne = document.querySelector("#hex-1");

let hexTwo = document.querySelector("#hex-2");

let hexThree = document.querySelector("#hex-3");

let hexFour = document.querySelector("#hex-4");

let hexFive = document.querySelector("#hex-5");

let hexSix = document.querySelector("#hex-6");


let oneh = document.querySelector(".oneh");

let twoh = document.querySelector(".twoh");

let threeh = document.querySelector(".threeh");

let fourh = document.querySelector(".fourh");

let fiveh = document.querySelector(".fiveh");

let sixh = document.querySelector(".sixh");

let hexColorValue = document.querySelector(".hex-color-value");

let copyHex = document.querySelector("#copy-hex");

let outputHex = document.querySelector(".output-hex");

sixh.textContent = "hei";

setInterval(()=>{

function giveHex(value,content){
  
   
if (value.value == 0) {
  content.textContent = 0;
}

else if (value.value == 1) {
  content.textContent = 1;
}

else if (value.value == 2) {
  content.textContent = 2;
}

else if (value.value == 3) {
  content.textContent = 3;
}

else if (value.value == 4) {
  content.textContent = 4;
}

else if (value.value == 5) {
  content.textContent = 5;
}

else if (value.value == 6) {
  content.textContent = 6;
}

else if (value.value == 7) {
  content.textContent = 7;
}

else if (value.value == 8) {
  content.textContent = 8;
}

else if (value.value == 9) {
  content.textContent = 9;
}

else if (value.value == 10) {
  content.textContent = "A";
}

else if (value.value == 11) {
  content.textContent = "B";
}

else if (value.value == 12) {
  content.textContent = "C";
}

else if (value.value == 13) {
  content.textContent = "D";
}

else if (value.value == 14) {
  content.textContent = "E";
}

else if (value.value == 15) {
  content.textContent = "F";
}
  
}

giveHex(hexOne,oneh);
giveHex(hexTwo,twoh);
giveHex(hexThree,threeh);
giveHex(hexFour,fourh);
giveHex(hexFive,fiveh);
giveHex(hexSix,sixh);

outputHex.style.backgroundColor=`#${oneh.textContent}${twoh.textContent}${threeh.textContent}${fourh.textContent}${fiveh.textContent}${sixh.textContent}`;

hexColorValue.textContent=`#${oneh.textContent}${twoh.textContent}${threeh.textContent}${fourh.textContent}${fiveh.textContent}${sixh.textContent}`;

copyHex.addEventListener("click", () => {

  navigator.clipboard.writeText("#"+oneh.textContent+twoh.textContent+threeh.textContent+fourh.textContent+fiveh.textContent+sixh.textContent);

  title.textContent = "copied successfuly";

  content.textContent = 'You successfuly copied: #'+oneh.textContent+twoh.textContent+threeh.textContent+fourh.textContent+fiveh.textContent+sixh.textContent;

  universalOn(3500);

});

},0);
