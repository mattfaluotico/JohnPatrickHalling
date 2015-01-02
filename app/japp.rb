# --------------------------
# John Patick Halling 
# Folk Musician
# Built by Matt Faluotico
# --------------------------

require 'sinatra'
require 'mail'
require 'twitter'
require 'json'

# set :environment, :production
set :environment, :development

def init_twitter
  $client = Twitter::REST::Client.new do |config|
    config.consumer_key        = "YUf6KXPxEO8QfgPD16DtoRCwu"
    config.consumer_secret     = "DNChtn3x6xBgA7iKA2Bs582dCSTh2ntviP8t51VQQQVRU4A9mO"
    config.access_token        = "201872823-9GCYtO3LM0iFhcqWh131Lq0WVIqSWRK7dbjoTh4o"
    config.access_token_secret = "DFV406L9aWwOeeQRbjr6rkG01uRTpVGamAqudR4GoijOc"
  end
  puts "twitter initialzed"
end

configure do
  set :server, 'thin'
  init_twitter
end

get '/' do
  erb :index, :locals => {:page_title => "home"}
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
  redirect '/'
end


not_found do
  "That page isn't real"
end

post '/getTweets', :provides => :json do
  content_type :json
  tweet = get_tweet_at(params[:index].to_i)
  tweet.to_json
end

def get_most_recent_tweet
  $client.user_timeline("gem")
  $client.user_timeline(264995657).first.text
end

def get_tweet_at(index)
  $client.user_timeline("gem")
  $client.user_timeline(264995657)[index].text
end