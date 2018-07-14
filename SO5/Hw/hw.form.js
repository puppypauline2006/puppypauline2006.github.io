var hw5form;
(function (hw5form) {
    var submitbutton = document.querySelector('#btn');
    var firstname = document.querySelector('#firstname');
    var frm = document.querySelector("#frm");
    frm.onsubmit = function () {
        var fname = firstname.value;
        var lname = lastname.value;  
        var astreet = street.value;
        var acity = city.value;
        var astate = state.value;
        var azipcode = zipcode.value;
        var namesspace = document.querySelector("#name");
        namesspace.innerHTML = "Hello " + fname + " " + lname + ",";
        var addressspace = document.querySelector("#address");
        addressspace.innerHTML = "Now I know where you live!";
        return false;
    };
})(hw5form || (hw5form = {}));