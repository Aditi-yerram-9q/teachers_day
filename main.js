student_array = [];

function submit() {
    display_array = [];
    for (var j = 1; j <= 4; j++) {
        var student_name = document.getElementById("name_of_the_student_" + j).value;
        student_array.push(student_name);
    }
    console.log(student_array)
    var len = student_array.length;
    for (var k = 0; k < len; k++) {
        display_array.push("<h4> NAME-" + student_array[k] + "</h4>");
    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML = display_array;
    var remove_commas = display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    student_array.sort();
    display_array = [];
    var len = student_array.length;
    for (var k = 0; k < len; k++) {
        display_array.push("<h4> NAME-" + student_array[k] + "</h4>");
    }
    var remove_commas = display_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}

function new_update() {
    document.getElementById("display_name_without_commas").innerHTML = "<h1>" + student_array + "</h1>";
}


var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 1;
    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e)
    {
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}