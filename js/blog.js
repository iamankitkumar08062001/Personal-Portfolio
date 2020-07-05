(function() {

    //Format of date
    //year,month,date

    var blogWrapper = document.querySelector("#blog .blog-wrapper");

    var content = [{
        heading: "How To Make Text Typing Effect?",
        description: "Wrote a step-by-step guide to mimic the typing effect using JavaScript. Please give it a read!",
        link: "https://medium.com/web-for-you/how-to-make-typing-effect-c72d9d6b9772",
        date: {
            dd: 22,
            month: 06,
            year: 2020
        }
    },{
        heading: "How To Make A Interactive Envelope?",
        description: "I demonstarted how to make a interactive envelope with a letter inside it. Please give it a read!",
        link: "https://medium.com/web-for-you/how-to-make-a-interactive-envelope-9df970614eea",
        date: {
            dd: 19,
            month: 06,
            year: 2020
        }
    },{
        heading: "How To Make a Modal Box Using Only CSS?",
        description: "I demonstarted how to make a modal box using only CSS. Please give it a read!",
        link: "https://medium.com/web-for-you/how-to-make-a-modal-box-using-only-css-6d2f8339f616",
        date: {
            dd: 17,
            month: 06,
            year: 2020
        }
    }];

    var backgroundColors = ["rgb(204, 255, 204)","rgb(204, 204, 255)","rgb(255, 255, 204)"];

    var i,temp,title,descriptionPara,date,randNum,tempLink;

    for(i = 0; i<content.length ; i++) {
        
        //Creation Stage
        temp = document.createElement("div");
        title = document.createElement("h1");
        descriptionPara = document.createElement("p");
        date = document.createElement("h2");
        //Adding Content Stage
        title.textContent = content[i].heading;
        descriptionPara.textContent = content[i].description;
        date.textContent = content[i].date.dd + "." + content[i].date.month + "." + content[i].date.year;
        //Setting background colors
        temp.style.backgroundColor = backgroundColors[Math.floor((Math.random()*10)+1)%3];
        //Rotating Slightly
        randNum = ((Math.floor(Math.random()*10)+1)%8);
        if(randNum % 2 === 0) {
            randNum *= -1;
        }
        temp.style.transform = "rotate" + "(" + randNum + "deg" + ")";
        //Insertion Stage
        temp.appendChild(title);
        temp.appendChild(descriptionPara);
        temp.appendChild(date);
        //Insertion into wrapper div
        temp.classList.add("blog");
        blogWrapper.appendChild(temp);
        //Adding Event Listener
        tempLink = content[i].link;
        temp.addEventListener("click",function() {
            window.open(tempLink);
        });

    }

})();