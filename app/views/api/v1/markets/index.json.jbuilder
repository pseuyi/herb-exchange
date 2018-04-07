json.array! @markets do |market|
  json.id market.id
  json.name market.name
  json.description market.description
  json.created_at market.created_at
end
