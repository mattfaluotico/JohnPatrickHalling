require 'sinatra'
require 'json'
require 'mail'
require './read_json'

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
  erb :splash
end

get '/home' do
  @news  = getJSON('news')
  @shows = getJSON('shows')
  erb :index
end

post '/contact' do
  puts "pretend email sent"
  name  = params[:name]
  from  = params[:email]
  phone =  params[:phone]
  cont  = params[:content]

  email = Mail.new do
      body  "#{cont} + ||| Contact at #{phone}}"
      from  from
      subject "Music related message from #{name}"
      to    'johnpatrickhalling@yahoo.com'
  end

  puts email.to_s
  email.delivery_method :sendmail
  email.deliver!  
end

not_found do
  status 404
  erb :splash
end

def get_news(event)
  @day     = event["day"]
  @month   = event["month"]
  @title   = event["title"]
  @content = event["content"]
  erb :_nentry
end

def get_show(event)
  @day     = event["day"]
  @month   = event["month"]
  @title   = event["location"]
  @content = event["description"]
  erb :_nentry
end