let myList = [];
let myCount = 0;
$(document).ready(function () {
    // code here
    let loaded = localStorage.getItem('todo-items') || '{"count": 0, "items": {}}';
    loaded = JSON.parse(loaded);
    myList = loaded.items;
    myCount = loaded.count;

    for (let task in myList) {
        addItem(task, myList[task].text, myList[task].completed);
    }

    $('#todo-form').submit(function (event) {
        // alert("Form submitted");
        let item = $('#todo-list-item').val();
        event.preventDefault();

        if (item !== "") {
            addItem(myCount, item, false);

            // clear textbox
            $("#todo-list-item").val("");

            myList[myCount] = { text: item, completed: false };
            myCount += 1;

            save();

        }


    });

});

function save() {
    // store counter and list items
    let storage = { count: myCount, items: myList };
    localStorage.setItem("todo-items", JSON.stringify(storage));
}

function addItem(id, text, completed) {
    let newItem = $("<li></li>").text(text);
    let newCheck = $('<input type="checkbox" class="todo-item checkbox"/>');

    //if the checkbox is Checked
    newCheck.click(function () {
        $(this).parent().toggleClass('completed');
        myList[id].completed = $(this).is(':checked');
        save();
    })
    if (completed) {
        newCheck.prop('checked', true);
    }

    let deleteLink = $(' <button class="todo-item">Delete</button> <hr/>').click(function (event) {
        newItem.remove();
        delete myList[id];
        save();
    });

    // add checkbox and delete link
    newItem.prepend(newCheck).append(deleteLink);

    $('#todo-items').append(newItem);

}