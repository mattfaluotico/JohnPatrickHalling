require 'json'

def getJSON(newsOrDate = "news")
  file = open("./content/#{newsOrDate}.json")
  json = file.read
  parsed = JSON.parse(json)
  return parsed
end
