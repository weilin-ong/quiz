var questions = [
    {
        question: "Who farts more?",
        options: ["Mimi", "Mimi de mimi", "Shark", "E Yu", "All of above"],
        answer: "All of above"
    },
    {
        question: "Who burps more?",
        options: ["Shark", "Mimi", "Mimi de mimi", "E Yu", "All of above"],
        answer: "Mimi"
    },
    {
        question: "Who farts first?",
        options: ["Shark", "Mimi", "Mimi de mimi", "E Yu", "All of above"],
        answer: "Mimi de mimi"
    }

];

var correct = 0;
var question_number = 0;

$(document).ready(() => {
    document.querySelector(".correct").innerHTML = ` ${correct} out of ${questions.length}`;
    load_question();
});


function load_question(){
    //load question
    $(".question").html(questions[question_number].question);
    //load options
    var options = document.querySelector(".options")
    options.innerHTML = "";
    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
    }

    document.querySelectorAll(".option").forEach(option => {
        option.onclick =() => {
            if (option.textContent === questions[question_number].answer){ 
                correct++;
            }
                question_number++;
                document.querySelector(".correct").innerHTML = ` ${correct} of ${questions.length}`;
                next_question();
        }
    })
}

function next_question(){
    if(questions.length === question_number){
        document.querySelector("h2").innerHTML = "End of Quiz.";

        if(correct === 0){
            document.querySelector(".options").innerHTML = "mimi chou chou ngehh";
        }else if(correct < 3){
            document.querySelector(".options").innerHTML = "ngahh chou chou mimi";
        }else{
            document.querySelector(".options").innerHTML = "ah ngeh";
        }
        return false;
    }else{
        load_question();
    }
   
}