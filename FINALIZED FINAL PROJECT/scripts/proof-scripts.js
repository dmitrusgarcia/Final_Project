function darkMode() {
	// add your code here
    
	document.getElementById("proof").innerText = "Proof"

    document.getElementById("zuck-banner").src = "images/zuck-reptile-3.jpg";

	document.getElementById("proof-pic-1").src = "images/ra-king-no-crown.png";
	document.getElementById("proof-pic-2").src = "images/school1.jpg";
	document.getElementById("proof-pic-3").src = "images/godsunmoon1.jpg";
	
	document.getElementById("proof-pic-4").style.display = "block";
	document.getElementById("proof-p-4").style.display = "block";
	document.getElementById("proof-pic-5").style.display = "block";
	document.getElementById("proof-p-5").style.display = "block";
	document.getElementById("proof-pic-6").style.display = "block";
	document.getElementById("proof-p-6").style.display = "block";
	document.getElementById("proof-pic-7").style.display = "block";
	document.getElementById("proof-p-7").style.display = "block";
	
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

	
	//PROOF PAGE CHANGES!
	
	//document.queryselector("#zuck").setAttribute("src","images/zuck-reptile-2.jpg")
	document.querySelector("#proof-1").innerHTML="This is the real side of the site.  You have entered into the twilight zone of the web.  The symbolism within this site is historic knowledge passed down through the ages.  You are part of the experience that will forever be.  History of art and knowledge is contained within these pages.  Welcome!"
    document.querySelector("#projects-p").innerHTML="The truth is Sun is personified in every mythology.  Click me!"
	document.querySelector("#proof-p-2").innerHTML="Planets personified as Mercury running, Mars in armor, Venus and Saturn chillin and listening to philosophers discuss As Above, So Below, and Jupiter pointing somewhere? Click me too!"
	document.querySelector("#proof-p-3").innerHTML="Medieval depictions of God the Geometer creating the world with compasses.  Circles and sacred geometry.  The ancient Egyptians loved sacred geometry, and so do freemasons. Click me three!"
}
