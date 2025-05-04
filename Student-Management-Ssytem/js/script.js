$(document).ready(function(){
    $("#student-form").on("submit",function(e){
        e.preventDefault();

        const name=$("#name").val().trim();
        const email=$("#email").val().trim();
        const course=$("#course").val().trim();

        if (name==""||email==""||course==""){
            alert("Fill all the fields!");
            return;
        }

        alert("JQuery validation passed!");
    });
});