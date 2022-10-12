var i = 0;
var txt = 'How well do you know';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("myh1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 100, trans());
  }
}
typeWriter()
function trans()
{
     document.getElementById('blackpink').style.transition="opacity 2s"
     document.getElementById('blackpink').style.opacity = "1"
}
let correctanswer1 = 0;
let correctanswer2 = 0;
let correctanswer3 = 0;
let correctanswer4 = 0;
let correctanswer5 = 0;
let correctanswer6 = 0;
let correctanswer7 = 0;
let correctanswer8 = 0;
let correctanswer9 = 0;
let correctanswer10 = 0;
let total;
let timer = 30
function start()
{
    document.getElementById('main').style.display = "none"
    document.getElementById('main2').style.display = "block"
    document.getElementById('section1').style.display = "block"
    document.getElementById('time').style.display = "block"
    setInterval(function() {
        timer--
        let contt = "Time Left : " + timer + " s"
        document.getElementById('time').innerHTML = contt
        if (timer == 29)
        {
            document.getElementById('time').style.color = "black"
        }
        if ( timer == 10)
        {
            document.getElementById('time').style.color = "red"
        }
        if ( timer == 0)
        {
            document.getElementById('time').style.display = "none"
            document.getElementById('section1').style.display = "none"
            document.getElementById('section2').style.display = "none"
            document.getElementById('section3').style.display = "none"
            document.getElementById('section4').style.display = "none"
            document.getElementById('section5').style.display = "none"
            document.getElementById('section6').style.display = "none"
            document.getElementById('section7').style.display = "none"
            document.getElementById('section8').style.display = "none"
            document.getElementById('section9').style.display = "none"
            document.getElementById('section10').style.display = "none"
            document.getElementById('section11').style.display = "none"
            document.getElementById('section12').style.display = "block"
            total = correctanswer1 + correctanswer2 + correctanswer3 + correctanswer4 + correctanswer5 + correctanswer6 + correctanswer7 + correctanswer8 + correctanswer9 + correctanswer10
        console.log(total)
        document.getElementById('ziahh2').innerHTML = total
        }
    },
         1000);
       correctanswer1 = 0;
       correctanswer2 = 0;
       correctanswer3 = 0;
       correctanswer4 = 0;
       correctanswer5 = 0;
       correctanswer6 = 0;
       correctanswer7 = 0;
       correctanswer8 = 0;
       correctanswer9 = 0;
       correctanswer10 = 0;
}
function next1()
{
    document.getElementById('section1').style.display = "none"
    document.getElementById('section2').style.display = "block"
}
function next2()
{
    document.getElementById('section2').style.display = "none"
    document.getElementById('section3').style.display = "block"
}
function next3()
{
    document.getElementById('section3').style.display = "none"
    document.getElementById('section4').style.display = "block"
}
function next4()
{
    document.getElementById('section4').style.display = "none"
    document.getElementById('section5').style.display = "block"
}
function next5()
{
    document.getElementById('section5').style.display = "none"
    document.getElementById('section6').style.display = "block"
}
function next6()
{
    document.getElementById('section6').style.display = "none"
    document.getElementById('section7').style.display = "block"
}
function next7()
{
    document.getElementById('section7').style.display = "none"
    document.getElementById('section8').style.display = "block"
}
function next8()
{
    document.getElementById('section8').style.display = "none"
    document.getElementById('section9').style.display = "block"
}
function next9()
{
    document.getElementById('section9').style.display = "none"
    document.getElementById('section10').style.display = "block"
}
function prev1()
{
    document.getElementById('section1').style.display = "block"
    document.getElementById('section2').style.display = "none"
}
function prev2()
{
    document.getElementById('section2').style.display = "block"
    document.getElementById('section3').style.display = "none"
}
function prev3()
{
    document.getElementById('section3').style.display = "block"
    document.getElementById('section4').style.display = "none"
}
function prev4()
{
    document.getElementById('section4').style.display = "block"
    document.getElementById('section5').style.display = "none"
}
function prev5()
{
    document.getElementById('section5').style.display = "block"
    document.getElementById('section6').style.display = "none"
}
function prev6()
{
    document.getElementById('section6').style.display = "block"
    document.getElementById('section7').style.display = "none"
}
function prev7()
{
    document.getElementById('section7').style.display = "block"
    document.getElementById('section8').style.display = "none"
}
function prev8()
{
    document.getElementById('section8').style.display = "block"
    document.getElementById('section9').style.display = "none"
}
function prev9()
{
    document.getElementById('section9').style.display = "block"
    document.getElementById('section10').style.display = "none"
}
function wrongg1()
{
    correctanswer1 = 0
}
function wrongg2()
{
    correctanswer2 = 0
}
function wrongg3()
{
    correctanswer3 = 0
}
function wrongg4()
{
    correctanswer4 = 0
}
function wrongg5()
{
    correctanswer5 = 0
}
function wrongg6()
{
    correctanswer6 = 0
}
function wrongg7()
{
    correctanswer7 = 0
}
function wrongg8()
{
    correctanswer8 = 0
}
function wrongg9()
{
    correctanswer9 = 0
}
function wrongg10()
{
    correctanswer10 = 0
}
function correctans1()
{
        correctanswer1 = 1
        total = correctanswer1
}
function correctans2()
{
    correctanswer2 = 1
    total = correctanswer1 + correctanswer2
}
function correctans3()
{
    correctanswer3 = 1
    total = correctanswer1 + correctanswer2 + correctanswer3
    console.log(total)
}
function correctans4() 
{
    correctanswer4 = 1
    total = correctanswer1 + correctanswer2 + correctanswer3 + correctanswer4
    console.log(total)
}
function correctans5()
{
    correctanswer5 = 1
    total = correctanswer1 + correctanswer2 + correctanswer3 + correctanswer4 + correctanswer5
    console.log(total)
}
function correctans6()
{
    correctanswer6 = 1
    total = correctanswer1 + correctanswer2 + correctanswer3 + correctanswer4 + correctanswer5 + correctanswer6
    console.log(total)
}
function correctans7()
{
    correctanswer7 = 1
    total = correctanswer1 + correctanswer2 + correctanswer3 + correctanswer4 + correctanswer5 + correctanswer6 + correctanswer7
    console.log(total)
}
function correctans8()
{
    correctanswer8 = 1
    total = correctanswer1 + correctanswer2 + correctanswer3 + correctanswer4 + correctanswer5 + correctanswer6 + correctanswer7 + correctanswer8
    console.log(total)
}
function correctans9()
{
    correctanswer9 = 1
    total = correctanswer1 + correctanswer2 + correctanswer3 + correctanswer4 + correctanswer5 + correctanswer6 + correctanswer7 + correctanswer8 + correctanswer9
    console.log(total)
}
function correctans10()
{
    correctanswer10 = 1
    total = correctanswer1 + correctanswer2 + correctanswer3 + correctanswer4 + correctanswer5 + correctanswer6 + correctanswer7 + correctanswer8 + correctanswer9 + correctanswer10
    console.log(total)
}
function submit()
{
    document.getElementById('section10').style.display = "none"
    document.getElementById('section12').style.display = "none"
    document.getElementById('section11').style.display = "block"
    total = correctanswer1 + correctanswer2 + correctanswer3 + correctanswer4 + correctanswer5 + correctanswer6 + correctanswer7 + correctanswer8 + correctanswer9 + correctanswer10
    console.log(total)
    document.getElementById('ziahh').innerHTML = total
    document.getElementById('time').style.display = "none"
    timer = 30
}
function next11()
{
    document.getElementById('section11').style.display = "none"
    document.getElementById('main').style.display = "block"
    document.getElementById('time').style.display = "block"
    total = 0
    console.log(total)
    timer = 30
    document.querySelector('input[name="option1"]:checked').checked = false;
    document.querySelector('input[name="option2"]:checked').checked = false;
    document.querySelector('input[name="option3"]:checked').checked = false;
    document.querySelector('input[name="option4"]:checked').checked = false;
    document.querySelector('input[name="option5"]:checked').checked = false;
    document.querySelector('input[name="option6"]:checked').checked = false;
    document.querySelector('input[name="option7"]:checked').checked = false;
    document.querySelector('input[name="option8"]:checked').checked = false;
    document.querySelector('input[name="option9"]:checked').checked = false;
    document.querySelector('input[name="option10"]:checked').checked = false;
}