function OnSubmit()
{
    var submitBtn = document.getElementById("submit");
    var form = submitBtn.form;
    var p = document.createElement("p");
    p.innerText = "Successfully sent all information to the Chinese Communist Party";
    form.replaceWith(p);
}
