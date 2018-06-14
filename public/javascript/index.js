var cart = document.getElementById('cart');
var price = 0;
var tempA;
	// alert('Hello')
	var allPhotoArray = [
	{name: 'Guacamole', 	photo: 'https://images-na.ssl-images-amazon.com/images/I/71xvsVoT6kL._SL1500_.jpg' , desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha  the industry standard dummy text ever since the 1500s" } ,
	{name: 'Bread', 		photo: 'https://images-na.ssl-images-amazon.com/images/I/71xvsVoT6kL._SL1500_.jpg', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha  the industry standard dummy text ever since the 1500s" },
	{name: 'Beef', 			photo: 'https://images-na.ssl-images-amazon.com/images/I/91ntP-MwhtL._SL1500_.jpg', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha  the industry standard dummy text ever since the 1500s" },
	{name: 'Healthy Bars' , photo:'https://images-na.ssl-images-amazon.com/images/I/71nsPQpyNJL._SL1200_.jpg' , desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha  the industry standard dummy text ever since the 1500s" },
	{name: 'Guacamole', 	photo: 'https://images-na.ssl-images-amazon.com/images/I/71xvsVoT6kL._SL1500_.jpg' , desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha  the industry standard dummy text ever since the 1500s" } ,
	{name: 'Bread', 		photo: 'https://images-na.ssl-images-amazon.com/images/I/71xvsVoT6kL._SL1500_.jpg', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha  the industry standard dummy text ever since the 1500s" },
	{name: 'Beef', 			photo: 'https://images-na.ssl-images-amazon.com/images/I/91ntP-MwhtL._SL1500_.jpg', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha  the industry standard dummy text ever since the 1500s" },
	{name: 'Healthy Bars' , photo:'https://images-na.ssl-images-amazon.com/images/I/71nsPQpyNJL._SL1200_.jpg' , desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha  the industry standard dummy text ever since the 1500s" },
	{name: 'Eggs', 			photo:'https://images-na.ssl-images-amazon.com/images/I/71%2Bh8YoknEL._SL1500_.jpg', desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ha  the industry standard dummy text ever since the 1500s" }
	]
	var cartItemsCount = 0
	var selectedItems = [];
	var rowOnIndex = document.getElementById('rowOnIndex')
		for (let i=0; i<9; i++) {
				price = Math.floor( Math.random()*19)
				var wraperDiv = document.createElement('div');
				var allImageDiv = document.createElement('div');
				var productDetails = document.createElement('p');
				var addToCart = document.createElement('i');

			 	 	rowOnIndex.appendChild(wraperDiv)

			 	 		    wraperDiv.appendChild(addToCart)
			 	 			wraperDiv.appendChild(allImageDiv)
	 						wraperDiv.appendChild(productDetails)
			                productDetails.innerHTML =  allPhotoArray[i].name + " <span id='priceSpan'> " + '     Price: $' + price + '</span>' + '<br>' + allPhotoArray[i].desc.slice(0,55) + '<br> <a href=/details/' +  i  + '>' + ' See details ' + '</a>'   ;

 						wraperDiv.setAttribute("class", "wraperDiv col-lg-4 col-md-6 col-xs-12 ");
				    	allImageDiv.setAttribute("class", "allImageDiv thumbnail")
				    	addToCart.setAttribute("class", "fa fa-plus-circle" )
				    							    addToCart.ariaHidden="true"

				    	productDetails.setAttribute("class", "caption");


				        allImageDiv.style.backgroundImage = "url(" + allPhotoArray[i].photo + ")";

				 addToCart.addEventListener("click", function(){


					 	if( selectedItems.indexOf(allPhotoArray[i].name) == -1 ) {
					 	console.log(' not found')
					 	}else {
					 		console.log("found , now   CROSSING out" + selectedItems[selectedItems.indexOf(allPhotoArray[i].name)] ) ;
				           // selectedItems.push( allPhotoArray[i].name )
				          //  $("ul").append("<li>" + "<span class='x'>" + "<i class='fa fa-trash'></i> " + "</span>" +   allPhotoArray[i].name  +"</li>")

				          	// $('li', 'ul').last().remove()
				          	  	selectedItems.splice(selectedItems.indexOf(allPhotoArray[i].name),1)
				          	  	 $("ul").html(' ')
									for (i=0; i<selectedItems.length; i++){
										$("ul").append("<li>" + "<span class='x'>" + "<i class='fa fa-trash'></i> " + "</span>" + selectedItems[i] + "</span>" + "</li>")
									}
				          	 cartItemsCount++
 						     cart.innerHTML=cartItemsCount;


					 	}
					 })

		    }



// TODO LIST

$("ul").on("click","li", // click event on every li inside of ul
	function()
{
$(this).toggleClass("crossout");
});


$("ul").on("click",".x",function(e)
{
	$(this).parent().fadeOut(1000,function(){$(this).remove()});
	e.stopPropagation();
});


$("input[type='text']").keypress(function(event)  // passing keypress to function and event placeholder inherits data from keypress
{		 								//using .which method we grab pressed key information
	if(event.which===13)				// and then compare to enter key
		{
		var val=$(this).val();
		// writing entered string into the input to the val variable
		    // var val1=prompt("How many You will need? ");
		//.append method works as .html() in plain js or inner html in HTML
		// it appends a string with html tags to element we aplying it for
		selectedItems.push(val);
			tempA = selectedItems[selectedItems.length-1]
         $("ul").html(' ')
		for (i=0; i<selectedItems.length; i++){
			$("ul").append("<li>" + "<span class='x'>" + "<i class='fa fa-trash'></i> " + "</span>" + selectedItems[i] + "</span>" + "</li>")
		}



		}
}
);

$("#listBadge").click(function(){
	$("#parent").fadeToggle();





})

// End of toDo
