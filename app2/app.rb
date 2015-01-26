require 'sinatra'
require 'mail'

# -----------------------------------
# JohnPatrickHalling.com
# Copyright (c) 2014 | Matt Faluotico
# mattfaluotico.github.io
# -----------------------------------

get '/' do
  erb :index
end

post '/contact' do

  name = params[:name]
  from = params[:email]
  subj =  params[:subject]
  cont = params[:content]

  email = Mail.new do
      body  cont
      from  from
      subject subj
      to    'matt.faluotico+devtest@gmail.com'
  end

  puts email.to_s
  email.delivery_method :sendmail
  email.deliver!

  # redirect '/'
end