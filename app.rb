require 'sinatra'

get '/' do
	erb :index
end

get '/contact' do
	erb :contact
end

get '/products' do
	erb :products
end

get '/asimpage' do
	erb :asimpage
end

get "/details/:id" do
	@items_in_cart = 0
	     	@id = params[:id]
	     	   @allPhotoArray = [
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
			@d = params[:id]
	     	erb :details, :locals => {:id => @d}




end
