function fizzbuzz() {        
        var counter = 1;
        while (counter < theNumber) {
        counter++;
        if (counter % 3 === 0 && counter % 5 === 0) {
            document.write("fizzbuzz" + "<br>")
        }
        else if (counter % 3 === 0) {
            document.write("fizz" + "<br>");
        }

        else if (counter % 5 === 0) {
            document.write("buzz" + "<br>");
        }

        else {
            document.write(counter + "<br>");
        }
            }
                }

    var theNumber = Number(prompt("Pick a number between 1 and 1oo", " "));
    if (!isNaN(theNumber)) {
        fizzbuzz();
    }
    else {
        alert("That is not a number! Please refresh and try again."); 
    }


