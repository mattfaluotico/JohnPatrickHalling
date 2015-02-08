require 'sinatra'
require 'json'
require 'mail'

# -----------------------------------
# JohnPatrickHalling.com
# Copyright (c) 2014 | Matt Faluotico
# mattfaluotico.github.io
# -----------------------------------

set :environment, :development

configure do
  set :server, 'thin'
end

get '/' do
  erb :index
end

post '/contact' do
  puts "pretend email sent"
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
end