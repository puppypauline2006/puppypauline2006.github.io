var session5form;
(function (session5form) {
    var submitbutton = document.querySelector('#btn');
    var firstname = document.querySelector('#firstname');
    var frm = document.querySelector("#frm");
    var ageinput = document.querySelector("#year");
    frm.onsubmit = function () {
        var name = firstname.value;
        var year = ageinput.value;
        var age = 2018 - parseInt(year);
        var resultspace = document.querySelector("#result");
        resultspace.innerHTML = "Hello " + name + ", I really hope you are AROUND " + age + " years old. If not, you are a dirty, dirty liar...";
        if (age < 18) {
            // document.querySelector("#dangertext").style.display = "block";
        }
        return false;
    };
})(session5form || (session5form = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibXlmb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsWUFBWSxDQW9CckI7QUFwQkQsV0FBVSxZQUFZO0lBQ2xCLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFzQixDQUFDO0lBQ3ZFLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFxQixDQUFDO0lBQ3pFLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFvQixDQUFDO0lBQzVELElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFxQixDQUFDO0lBRW5FLEdBQUcsQ0FBQyxRQUFRLEdBQUc7UUFDWCxJQUFJLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELFdBQVcsQ0FBQyxTQUFTLEdBQUcsUUFBUSxHQUFHLElBQUksR0FBRyxpQ0FBaUMsR0FBRyxHQUFHLEdBQUcsb0RBQW9ELENBQUM7UUFFekksSUFBRyxHQUFHLEdBQUMsRUFBRSxFQUFDO1lBQ04saUVBQWlFO1NBQ3BFO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFFakIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxFQXBCUyxZQUFZLEtBQVosWUFBWSxRQW9CckIifQ==