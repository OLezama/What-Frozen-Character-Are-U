let count = 0;


//Question 1 & 2 should be answered
$(".submit-button").click(function() {
    let Season = $(".favseason-input").val();
    console.log(Season);

    let Birthmonth = $(".birthdate-input").val();
    console.log(Birthmonth);


    count += 1;
    $(".zero").text(count);



    //summer character and <6
    if (Season === "summer"  || Season==="Summer" && Birthmonth < 6) {
        $(".final-character").text("I am ... Anna. I am optimistic, courageous, goofy and I love my sister Elsa with all my heart.");
        $(".final-character").css("color", "#ff0066");

        $("img").attr("src", "https://static.wikia.nocookie.net/disney/images/0/0f/Profile_-_Anna.jpeg/revision/latest?cb=20200319054431");

        $(".name-season").append("<li class='Month-list'>" + "My birthday is the " + Birthmonth + " month of the year & My favorite season is " + Season + "</li>");
    }

    //summer characters and >=6
    else if (Season === "summer"  || Season==="Summer" && Birthmonth >= 6 && Birthmonth <= 12) {
        $(".final-character").text("I am ... Olaf. I love warm hugs and my favorite season is summer");
        $(".final-character").css("color", "#330080");
        $("img").attr("src", "https://static.wikia.nocookie.net/disney/images/5/53/Profile_-_Olaf.jpeg/revision/latest?cb=20200221075027");
        $(".name-season").append("<li class='Month-list'>" + "My birthday is the " + Birthmonth + " month of the year & My favorite season is " + Season + "</li>");
    }


    //winter characters and <6  || Season===“Winter” 
    else if (Season === "winter"  || Season==="Winter" && Birthmonth < 6) {
        $(".final-character").text("I am ... Christoff. I spent many years of my life with trolls and my best friend is a reindeer - named Sven.");
        $(".final-character").css("color", " #4d3300");

        $("img").attr("src", "https://i.insider.com/5ddc099e79d7575c4424d1c6?width=768&format=jpeg");
        $(".name-season").append("<li class='Month-list'>" + "My birthday is the " + Birthmonth + " month of the year & My favorite season is " + Season + "</li>");
    }


    //winter characters and >=6
    else if (Season === "winter" || Season==="Winter" && Birthmonth >= 6 && Birthmonth <= 12) {
        $(".final-character").text("I am ... Elsa. I have ice and snow powers.");
        $(".final-character").css("color", " #800033");
        $("img").attr("src", "https://s2.best-wallpaper.net/wallpaper/1280x1024/2001/Elsa-Frozen-2-magic-water-horse_1280x1024.jpg");

        $(".name-season").append("<li class='Month-list'>" + "My birthday is the " + Birthmonth + " month of the year & My favorite season is " + Season + "</li>");
    }

    
    else {
        $(".final-character").text("**Check your answer!**");
        $(".final-character").css("color", "red");
        alert("**** CHECK YOUR ANSWER! ****");
    }


});