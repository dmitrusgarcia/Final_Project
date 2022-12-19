//get the form fields from the query string (GET request)
let formFields = new URLSearchParams(window.location.search)

//insert the name the user gave into the thank you message
document.querySelector("#yourName").innerHTML = `${formFields.get("name")}`

function darkMode() {
	// add your code here
    
	document.getElementById("proof").innerText = "Proof"

    document.getElementById("conspiracy-contact").innerHTML = "We are everywhere!<br>Revolt!<br>T̴̥͗ḥ̸̏e̸͗͜ ̴̢̈́s̸̞̄h̸̤̓ȃ̸̞ḍ̷̌o̵̟͝w̵͔̔ ̵͎̊g̴͓͛o̷̘͘v̸̆ͅê̵̼ȓ̷̼ǹ̷͍ṁ̷̢ȩ̵̃ṅ̵̖t̴͕̊ ̸̱̅i̸̮͊ș̶̊ ̴̝͝ȓ̴̼e̸͍̎a̷̧̅l̴͕̃!̸̱̾<br>Spread the word"
    document.getElementById("message1").innerHTML = "Our Message"
	document.getElementById("monday").innerHTML = "Moonday"
	document.getElementById("wednesday").innerHTML = "Odinsday"
	document.getElementById("thursday").innerHTML = "Thorsday"
	document.getElementById("saturday").innerHTML = "Saturnday"
	document.getElementById("sunday").innerHTML = "SUNday"


    document.getElementById("zuck-banner").src = "images/zuck-reptile-3.jpg";
	
	document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("main").style.backgroundColor = "#19AF5E";
	//document.getElementById("navbar")style.backgroundColor = "#2b5038"
	
	document.querySelector("main").style.color = "black"
    //document.querySelector("h1").style.color = "white"
	//HEADER color
	document.querySelector("header").style.backgroundColor = "#3d6055";
	//NAV BAR EDITS
	//document.querySelector("#proof").innerHTML = "<a href="proof.html">Proof</a>"
	document.querySelector("main").style.backgroundColor = "#19AF5E";
	document.querySelector("main").style.backgroundColor = "#19AF5E";
}
