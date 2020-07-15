(function() {

    //Format of date
    //year,month,date

    var blogWrapper = document.querySelector("#blog .blog-wrapper");

    var content = [{
        heading: "The New CORONA Way Of Life",
        description: "During the pandemic, technology is what keeps us still together and functional in an increasingly disconnected and chaotic world and this growth may have a long-lasting impact on a post-COVID world. I have discussed about the same and new technology trends.",
        link: "https://iiitg-blogs.com/2020/07/13/the-curriculum-vitae-the-cv/7/",
        date: {
            dd: 15,
            month: 07,
            year: 2020
        }
    },{
        heading: "The New Industrial Revolution",
        description: "I have talked about how Coronavirus Accelerated the 4th Industrial Revolution.",
        link: "https://iiitg-blogs.com/2020/07/13/the-curriculum-vitae-the-cv/7/",
        date: {
            dd: 15,
            month: 07,
            year: 2020
        }
    },{
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

    var backgroundColors = ["rgb(255, 190, 11)","rgb(239, 111, 108)","rgb(12, 164, 165)","rgb(132, 195, 24)"];

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
        temp.style.backgroundColor = backgroundColors[Math.floor((Math.random()*10)+1)%(backgroundColors.length)];
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