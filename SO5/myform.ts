namespace session5form {
    let submitbutton = document.querySelector('#btn') as HTMLButtonElement;
    let firstname = document.querySelector('#firstname') as HTMLInputElement;
    let frm = document.querySelector("#frm") as HTMLFormElement;
    let ageinput = document.querySelector("#year") as HTMLInputElement;

    frm.onsubmit = () => {
        var name = firstname.value;
        var year = ageinput.value;
        var age = 2018 - parseInt(year);
        var resultspace = document.querySelector("#result");
        resultspace.innerHTML = "Hello " + name + ", I really hope you are AROUND " + age + " years old. If not, you are a dirty, dirty liar...";
        
        if(age<18){
            document.querySelector("#dangertext").style.display = "block";
        }
        
        return false;

    };
}