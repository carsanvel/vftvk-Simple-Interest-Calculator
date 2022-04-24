
document.getElementById("range_value").innerHTML = document.getElementById("rate").value;

function compute()
{
    p = document.getElementById("principal").value;
    if (isNaN(p) == false && p != '') {
	rate = document.getElementById("rate").value;
	years = document.getElementById("years").value;
	final_value = p * (rate/100) * years;
	final_year = 2020 + parseInt(years);
	str1 = "if you deposit " + p + ",";
	str2 = "at an interest rate of " + document.getElementById("rate").value + "%";
	str3 = "You will receive an amount of " + final_value;
	str4 = "in the year " + final_year;
        document.getElementById("result").innerHTML = str1 + "<br>" + str2 + "<br>" + str3 + "<br>" + str4;
    }
    
}

function show_percentage()
{
    document.getElementById("range_value").innerHTML = document.getElementById("rate").value + "%";
    
}
        