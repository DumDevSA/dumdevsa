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
let items = [homeSection, bioSection, blogSection, contactsSection, formsSection, clonesSection, projectsSection, associatesSection];

let indicators = [homeOpen, aboutOpen, blogOpen, contactsOpen, formsOpen, clonesOpen, projectsOpen, associatesOpen];

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

let versionOneDate = new Date("2022 mar 17");

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

version.textContent = "v1.601042022";

console.warn(`This version of the portfolio is: ${version.textContent}`);


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
  
},2)

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
  
    content.textContent = `You copied: rgb ${colorValue.textContent}`;
  
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

let quoteContent = document.querySelector(".quote-content");

let quoteImg= document.querySelector(".quote-image");

let quoteBtn = document.querySelector(".quote-btn");

let quotes = [
`Believe in yourself, you can do it.`,

`Nothing is impossible when you put your mind to it.`,

`Fools despise correction, but the wise appreciates it.`,

`Don't waste your time trying to please people, you're better than that.`,

`Pain demands to be felt`,

`Don't blame people for disappointing you, blame yourself for expecting so much.`,

`One day you'll be a memory to some people, do your best to be a good one.`,

`Don't lower your standards for anyone or anything. Self respect is important.`,

`You can easily judge a character of a man by how he treats those who can do nothing for him.`,

`Believe in yourself, even when no one else will.`,

`I think it's impossible for ordinary people to choose to be extraordinary`,

`Anger is an acid that can do more harm to the vessel in which it is stored than to anything in which it is poured.`,

`Strong people don't put others down. They lift them up.`,

`I'd rather be in deep dark grave and know that my poor soul was saved than to live in this world in a house of gold and deny my God and doom my soul.`,

`Life is not easy for any of us. But what of that? We must have perseverance and above all confidence in ourselves. We must believe that we are gifted for something and that this thing must be attained.`,

`Tomorrow becomes never. No matter how small the task, take the first step now.`,

`Being happy doesn't mean that everything is perfect. It means you've decided to look beyond the imperfections.`,

`What we fear the most is usually what we most need to do.`,

`One bad chapter doesn't mean that your story is over.`,

`He who learns but doesn't think, is lost! He who thinks but doesn't learn is in great danger.`,

`To know the truth is good. To love it is better. To delight in it is best.`,

`Don't teach your children how to read. Teach them to question what they read. Teach them to question everything.`,

`Perhaps a man's character is like a tree and his reputation like its shadow. The shadow is what we think of it; The tree is real.`,

`Just cause you got monkey off your back doesn't mean the circus has left town`,

`Nobody is going to pour truth into your brain. It's something you have to find out yourself.`,

`A slave is one who waits for someone to come and set him free.`,

`The most common way people give up power, is by thinking they don't have any.`,

`Be strong enough to let go anyone who doesn't respect your feelings.`,

`Never be controlled by these three things: Your past, money and people.`,

`Don't put the key to your happiness in some else's pocket.`,

`Be yourself, people don't have to love you and you don't have to care.`,

`It's easier to forgive an enemy than friend.`,

`Optimism is a strategy for making a better future. Because unless you believe that the future can be better, it's unlikely you will step up and take responsibility for making it so. If you assume that there's no hope, you guarantee that there will be no hope. If you assume that there's an instinct to freedom, there are opportunities to change things, there's a change you can contribute to making a better world. The choice is yours.`,

`You use a mirror to see your face; use works of art to see your soul.`,

`Those who expect to reap the blessings of freedom, must like men, undergo the fatigue of supporting it.`,

`No person has the right to rain on your dreams.`,

`To be alone is the fate of all greatest minds.`,

`A high degree of intellect tends to make a man unsocial.`,

`History never repeats itself, man does.`,

`A fool thinks himself to be wise, but a wise man knows himself to be a fool.`,

`Beware of false knowledge, it's more perilous than ignorance.`,

`Age is an issue of mind over matter. If you don't mind, it doesn't matter.`,

`If we lose love and self respect for each other, this is how we finally die.`,

`A mind once stretched by an idea, never returns to its original dimensions.`,

`You can cut all the flowers but you cannot keep spring from coming.`,

`Look closely. The beauty may be small.`,

`The key to immortality is first living a life worth remembering.`,

`You're never too old to set another goal or to dream a new one.`,

`The man who moves a mountain begins by carrying away small stones.`,

`Nobody made a greater mistake than he who did nothing because he could do only a little.`,

`If you plan on being anything less than you are capable of being, you'll probably be unhappy all the days of your life.`,

`You aren't paid according to how hard you work. You're paid according to how hard you are to replace.`,

`If all you can do is crawl, start crawling.`,

`Someday is a disease that will take your dreams to the grave with you.`,

`Rudeness is the weak person's imitation of strength.`,

`Don't impose on others what you yourself do not desire.`,

`Rather fail with honor than succeed by fraud.`,

`Waste no time arguing about what a good man should be. Be one.`,

`People who have a religion should be glad, for not everyone has the gift in believing in heavenly things.`,

`True friends stab you in the front.`,

`Beware of little expenses; a small leak will sink a great ship.`,

`Don't limit a child to your own learning, for she was born in another time.`,

`Beauty is simply reality seen with eyes of love.`,

`If you love somebody, let them go, for if they return, there were always yours. If they don't, they never were.`,

`Don't waste your time with explanations: people only hear what they want to hear.`,

`Indolence may seem attractive, but toil gives gratification.`,

`If you loved someone, you loved him, and when you have nothing else to give, you still gave him love.`,

`Where wisdom reigns, there's no conflict between thinking and feeling.`,

`Life isn't worth living, unless it is lived for someone else.`,

`It often safer to be in chains than free.`,

`Beauty is worse than wine. It intoxicates both the holder and beholder.`,

`I was quit, but I was not blind.`,

`The real man smiles in trouble, gathers strength from distress and grows brave by reflection.`,

`Life is easy, but we insist on making it difficult.`,

`In youth and beauty, wisdom is but rare.`,

`The measure of a man is what he does with power.`,

`Man conquers the world by conquering himself.`,

`The man who asks a question is a fool for a minute, the one who doesn't ask is a fool for life.`,

`Whatever begins in anger, ends in shame.`,

`When you find no solution to a problem. It's probably not a problem to be solved. But rather a truth to be accepted.`,

`If you cannot do great things, do small things in a great way.`,

`Don't count days, make the days count.`,

`Your talent determines what you can do.  Your motivation determines how much you're willing to do. Your attitude determines how well you do it.`,

`Happiness depends more upon the internal frame of a person's own mind not on the externals in the world.`,

`Some people's idea of free speech is that they are free to say what they like, but if anyone says anything back, that is an outrage.`,

`Behavior is a mirror in which anyone shows their his image.`,

`It had long come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to the things.`,

`The difference between a genius and stupidity is,genius has its limits.`,

`Our culture teaches us that making significant changes takes a long time and is difficult to do. This is simply NOT true. Change happens in an instant. It's not a process- it's something you do in an instant by making a decision.`,

`If the path before you is clear, you're probably on someone else's.`,

`It's in a character of very few men to honor without envy a friend who has prospered.`,

`Action expresses priorities.`,

`Impeferction sees impeferction. We tend to forget our own imperfections but remember those which abide in others.`,

`You define your own life. Don't let other people write your script.`,

`Your present circumstances don't determine where you can go. They merely determine where you can start.`,

`To be nobody but yourself in the world that is doing its best day and night to make you like everybody else means to fight the hardest battle which any human being can fight and never stop fighting.`,

`Laughing faces do not mean that there is absence of sorrow! But it means that they have the ability to deal with it.`,

`I am grateful to all of those who said NO to me. It's because of them I did it myself.`,

`If friendship is your weakest point then you are the strongest person in the world.`,

`Opportunities are like sunrise, if you wait too long you might miss them.`,

`When you love someone more than they deserve, surely they'll hurt you more than you deserve.`,

`Gratitude is not only the greatest of virtues, but the parent of all the others.`,

`It never ceases to amaze me; we love ourselves more than other people, but care more about their opinions than our own.`,

`If you're always trying to be normal, you can never know how amazing you can be.`,

`To be happy, we must not be too concerned with others.`,

`To be without some of the things you want is an indispensable part of happiness.`,

`Two percent of people think; three percent of people think they think; and ninety five percent of people rather die than think.`,

`Yet we must say something when those who say most are saying nothing.`

];

let owners = ['unknown',
'unknown',
'king solomon',
'unknown',
'unknown',
'Just smile',
'unknown',
'Tj Quote',
'Johann Van Goethe',
'Sasquatch',
'Elon Musk',
'Mark Twain',
'Darth Vader',
'Hank Williams',
'Marie Curie',
'Tim Ferriss',
'Unknown',
'Tim Ferriss',
'Quote Portray',
'Confucius',
'Confucius',
'George Carlin',
'Abraham Lincoln',
'George Carlin',
'Noam Chomsky',
'Ezra Pound',
'Alice Walker',
'Age of Attitude',
'The inner life',
'Growth Lodge',
'The inner life',
'William Blake',
'Noam Chomsky',
'George Bernard Shaw',
'Thomas Paine',
'Martin Luther',
'Arthur Schopenhauer',
'Arthur Schopenhauer',
'Voltaire',
'William Shakespeare',
'George Bernard Shaw',
'Mark Twain',
'Maya Angelou',
'Ralph Waldo Emerson',
'Pablo Neruda',
'Immanuel Kant',
'Bruce Lee',
'C.S. Lewis',
'Confucius',
'Edmund Burke',
'Abraham Maslow',
'Confucius',
'Rumi',
'Tim Ferriss',
'Eric Hoffer',
'Confucius',
'Sophocles',
'Marcus Aurelius',
'Anne Frank',
'Oscar Wilde',
'Benjamin Franklin',
'Rabindranath Tagore',
'Rabindranath Tagore',
'Kahlil Gibran',
'Paulo Coelho',
'Anne Frank',
'George Orwell',
'Carl Jung',
'Albert Einstein',
'Franz Kafka',
'Aldous Huxley',
'Jane Austen',
'Thomas Paine',
'Confucius',
'Homer',
'Plato',
'Zeno of Citium',
'Confucius',
'Benjamin Franklin',
'The Eternal Truth',
'Napoleon Hill',
'Mohammad Ali',
'Lou Holtz',
'George Washington',
'Sir Winston Churchill',
'Johann Wolfgang von Goethe',
'Leonardo da Vinci',
'Alexandre Dumas Jr',
'Tony Robbins',
'Carl Jung',
'Aeschylus',
'Mohatma Ghandhi',
'Dumisa',
'Oprah Winfrey',
'Nido Qubein',
'E.E. Cummings',
'Shakespeare',
'Albert Einstein',
'Abraham Lincoln',
'William Arthur',
'Growth Lodge',
'Cicero',
'Marcus Aurelius',
'Maya Angelou',
'Albert Camus',
'Bertrand Russell',
'George Bernard Shaw',
'Augustine of Hippo'
];

/*quoteBtn.addEventListener("click" , () =>{
  
setTimeout( () =>{

let round = Math.random();

let random = Math.round(round * (quotes.length-1));

quoteTitle.textContent =` ${(random+1)} of ${(owners.length)}  ${owners[random]}`;
  
quoteContent.textContent =`   ${quotes[random]}  `;

},0)
  
  });*/

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

newLi = document.createElement("li");

newLi.textContent = listValue.value;

listItem.appendChild(newLi);

listValue.value=""
},0);

})

let listIndex;

let listChildren = listItem.children;

/*setInterval(()=>{
  
   listIndex = listArray.indexOf(listValue.value.toUpperCase());
   
   listChild = listChildren[listIndex];
   
   alert(listChild);
},5000)*/

listDelete.addEventListener("click" , ()=>{
  
  setTimeout(()=>{

if(isNaN(parseInt(listValue.value))){

title.textContent ="Wrong input entered:";

content.textContent="To successfuly delete an item, you must type its number then press delete. Only a number is accepted.";
universalOn(3000);


}else{
  
  
listItem.removeChild(listItem.item(parseInt(listValue.value-1)));

alert(parseInt(listValue.value-1));

}
},0);
});

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

quoteTitle.textContent = ` ${(random+1)} of ${(dataquotes.length)}  ${dataquotes[random].name}`;
 
quoteContent.textContent = `   ${dataquotes[random].quote}  `;

quoteImg.classList.remove("none");

quoteImg.setAttribute("src", `   ${dataquotes[random].image}`);
 
   },0)}
   
   }
 xhr.send();
}
  
  

