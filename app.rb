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
	erb :asinpage
end 


