var wordsSet1 = ['I am Ericson'];
var wordsSet2 = ['Front-End / Back-End Developer'];

var part1, part2;
var i = 0, j = 0;
var offset1 = 0, offset2 = 0;
var len1 = wordsSet1.length, len2 = wordsSet2.length;
var forwards1 = true, forwards2 = true;
var skip_count1 = 0, skip_count2 = 0;
var skip_delay = 15;
var speed = 70;

var wordflick = function () {
  setInterval(function () {
    // Handling for the first set of words
    if (forwards1) {
      if (offset1 >= wordsSet1[i].length) {
        ++skip_count1;
        if (skip_count1 === skip_delay) {
          forwards1 = false;
          skip_count1 = 0;
        }
      }
    } else {
      if (offset1 === 0) {
        forwards1 = true;
        i++;
        if (i >= len1) {
          i = 0;
        }
        offset1 = 0;
      }
    }

    // Handling for the second set of words
    if (forwards2) {
      if (offset2 >= wordsSet2[j].length) {
        ++skip_count2;
        if (skip_count2 === skip_delay) {
          forwards2 = false;
          skip_count2 = 0;
        }
      }
    } else {
      if (offset2 === 0) {
        forwards2 = true;
        j++;
        if (j >= len2) {
          j = 0;
        }
        offset2 = 0;
      }
    }

    part1 = wordsSet1[i].substr(0, offset1);
    part2 = wordsSet2[j].substr(0, offset2);

    if (skip_count1 === 0) {
      if (forwards1) {
        offset1++;
      } else {
        offset1--;
      }
    }

    if (skip_count2 === 0) {
      if (forwards2) {
        offset2++;
      } else {
        offset2--;
      }
    }

    $('.words1').text(part1);
    $('.words2').text(part2);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});



  var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
       
        var sidemenu = document.getElementById("sidemenu");
        function openmenu(){
        sidemenu.style.right = "0";
         }
         function closemenu(){
         sidemenu.style.right = "-200px";
        }

        const scriptURL = 'https://script.google.com/macros/s/AKfycbyPv7-CDxBMvruXRECePtQyXoXM4oAvejmNajbPeg0FZcYMVXqdtALZp3RtH-q3_v-N/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
        
        form.addEventListener('submit', e => {
         e.preventDefault()
         fetch(scriptURL, { method: 'POST', body: new FormData(form)})
       .then(response => {
          msg.innerHTML = "Message sent successfully"
          setTimeout(function(){
            msg.innerHTML = ""

          },5000)
          form.reset()
       })
       .catch(error => console.error('Error!', error.message))
  })
    


       

 

