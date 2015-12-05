function welcome() {
	alert("Welcome to the Animal Kingdom Survey! Please fill out all fields. We hope you enjoyed your visit!");
}

function confirmation() {
    alert("test!!");
    //document.forms["form"].submit();
    //document.forms["animalmodify"].reset();
    //alert("Thank you for participating in this survey!");

    return true;
}

function validateForm(form){
    
    var name = "";
	//var name = document.getElementsByName("name");
	var email = document.getElementsByName("email");
	var rating = document.getElementsByName("rating");

    alert(name);


	// Ensure, name, passcode, email, and cell fields are filled out
    if (name == null ||  name == "") {
        alert("Name must be filled out.");
        document.getElementById("name").focus();
        document.getElementById("name").style.backgroundColor = "#FF6666";
        return false;
    } else if (passcode == null || passcode == "") {
    	alert("Passcode must be filled out.");
        document.getElementById("passcode").focus();
        document.getElementById("passcode").style.backgroundColor = "#FF6666";
        return false;
    }
    else if (email == null ||  email == "") {
        alert("Email must be filled out.");
        document.getElementById("email").focus();
        document.getElementById("email").style.backgroundColor = "#FF6666";
        return false;
    } else if (cell == null || cell =="") {
    	alert("Cell number must be entered.");
        document.getElementById("cell").focus();
        document.getElementById("cell").style.backgroundColor = "#FF6666";
        return false;
    }

    var animalChecked = false;
    // Ensure customer selects atleast one animal that they liked
    var i;
    for(i = 0; i < likedAnimals.length; i++){
    	if(likedAnimals[i].checked || likedAnimals.checked == true){
    		animalChecked = true;
    		break;
    	}
    }
    if(animalChecked == false){
    	alert("Please select a species of animal you liked.")
    	return false;
    }

    //Ensure customer selects favorite species of animal
    if(species_sel == "" || species_sel == null){
    	alert("Please select your favorite species of animal.");
    	return false;
    }

    var ratingSelected = false;
    // Ensure customer selects a rating
    for(var i = 0; i < rating.length; i++){
    	if(rating[i].checked || rating[i].checked == true){
    		ratingSelected = true;
    		break;
    	}
    }
    if(ratingSelected == false){
    	alert("Please select a rating.");
    	return false;
    }


    // Ensure customer adds a description
    if(document.getElementById("description").value == "Please describe your experience in a few words."){
    	alert("Please add a description." || document.getElementById("description").value == "");
    	document.getElementById("description").value = "";
    	document.getElementById("description").focus();
    	document.getElementById("description").style.backgroundColor = "#FF6666";
    	return false;
    }

    // Testing whether date is entered
    var date = document.querySelector('[type=date]');
    var day = new Date( e.target.value ).getUTCDay();
    if(day != 0 || day != 1 || day != 2 || day != 3 || day != 4 || day != 5 || day != 6){
        alert("Please enter a valid date!!!");
        return false;
    }



    confirmation();
}