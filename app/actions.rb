# Homepage (Root path)
get '/' do
  @contacts = Contact.all.to_json
  erb :index
end

get '/search' do
  content_type :json

  @contacts = Contact.all
  @contacts = @contacts.where('firstname like ? OR lastname like ?', params[:search], params[:search])
  @contacts.to_json
  # json @contacts
end

get '/list' do
  content_type :json

  @contacts = Contact.all
  @contacts.to_json  
end

