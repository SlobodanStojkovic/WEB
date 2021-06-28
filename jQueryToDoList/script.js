var num = 1;

function addNewTask() {
    var inputText = $("input").val();
    $("<li>").append(inputText).
        appendTo("ol").
        click(function () {
            $(this).toggleClass("linethrough");
        });
    $("input:text").val("")     //this clears out the value of input field
    num++;

    var deleteIcon = $('<input>').attr({
        'id': 'deleteIcon' + num,
        'type': 'image',
        'src': './assets/deleteIcon.png',
        'class': 'delete',
        'alt': 'Delete task'
    })
    $('li:last').append(deleteIcon)
    $(deleteIcon).click(function () {
        $(this).closest('li').remove();     //deletes li element in which is deleteIcon located
    });
}


$("input").keypress(function (event) {
    var key = event.which;
    if (key === 13)  // the enter key code
    {
        addNewTask();
    }
});









