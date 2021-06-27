
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

    function addDeleteIcon() {
        var deleteIcon = $('<img />').attr({
            'id': 'deleteIcon' + num,
            'src': './assets/deleteIcon.png',
            'alt': 'Delete icon',
            'title': 'Delete icon',
            'width': 250
        }).appendTo('p:last');  //appends delete icon to last p element on page
    };
    addDeleteIcon();

}

function deleteTask() {
    $("img").click(function () {
        $(".toDoList").children("p:last").remove()
    });
}






