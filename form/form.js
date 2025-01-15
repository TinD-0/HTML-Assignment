function OnSubmit()
{
    var submitBtn = document.getElementById("submit");
    var form = submitBtn.form;
    var p = document.createElement("p");
    p.innerText = "Successfully sent all information to the Chinese Communist Party";
    form.replaceWith(p);
}

function OnYes()
{
    var div = document.getElementById("yesno");
    var p = document.createElement("p");
    p.innerText = "Thank you for your good response. You will be spared 4 years of life.";
    div.replaceWith(p);
}

function OnNo()
{
    var div = document.getElementById("yesno");
    var p = document.createElement("p");
    p.innerText = ":O\nHOW COULD YOU?!?\nThe Soviet Union will be notified of this.";
    div.replaceWith(p);
}
