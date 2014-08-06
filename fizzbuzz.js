var counter = 0;
while (counter < 100) {
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