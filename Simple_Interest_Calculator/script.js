function compute() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    var result = document.getElementById("result");

    if (isNaN(principal) || principal <=0) {
        alert("Please enter a valid principal amount.");
    }
    else {
        const interest = principal * years * rate / 100;
        var year = new Date().getFullYear() + parseInt(years);
        const totalAmount = parseFloat(principal) + parseFloat(interest);
        result.innerHTML = 'if you deposit $' + '<mark>' + principal + '</mark>' + ',\<br\> at an interest rate of ' + '<mark>' + rate + '%</mark>' + ',\<br\> you will receive an amount of $' + '<mark>' + totalAmount + '</mark>' + ',\<br\> in the year ' + '<mark>' + year + '</mark>' + '.\<br\>';
    }
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rateValue").innerText = rateval;
}

