var count = 0

        function button2func(){
            count = count +1;
            document.querySelector("#countlabel").innerHTML = count + " times";
        }
        function btn3func(){
            count = count - 1;
            document.querySelector("#countlabel").innerHTML = count + " times";
        }