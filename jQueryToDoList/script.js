
var num = 1;

function addNewTask() {
    var inputText = $("input").val();
    $("<p>").append(num + ". " + inputText).
        appendTo(".toDoList").
        click(function () {
            $(this).toggleClass("linethrough");
        });
    $("input:text").val("")     //this clears out the value of input field
    num++;
}

