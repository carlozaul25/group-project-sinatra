// var i = 0; 			// Start index of the array of images to loop through
// var images = [];	// Images Array
// var time = 3000;	// Time between each switch in ms
	 
// // Image List
// images[0] = "carousel/grapes_bunch.jpg";
// images[1] = "carousel/chestnut_buckeye_fruits.jpg";
// images[2] = "carousel/coffee_chocolate.jpg";
// images[3] = "carousel/spinach.jpg";
// images[4] = "carousel/tacos.jpg"
// images[5] = "carousel/tomatoes_pasta_dish.jpg"
// images[6] = "carousel/shirts_f.jpg"
// images[7] = "carousel/capsule_pill.jpg"
// images[8] = "carousel/jewellery.jpg"
// images[9] = "carousel/scent_sticks_fragrance.jpg"
// images[10] = "carousel/hand_clean_sponge.jpg"
// // Change Image
// function changeImg(){
// 	document.slide.src = images[i];

// 	// Check If Index Is Under Max
// 	if(i < images.length - 1){
// 	  // Add 1 to Index
// 	  i++; 
// 	} else { 
// 		// Reset Back To O
// 		i = 0;
// 	}

// 	// Run function every x seconds
// 	setTimeout("changeImg()", time);
// }