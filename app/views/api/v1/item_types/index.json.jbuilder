json.array! @item_types do |item_type|
  json.id item_type.id
  json.name item_type.name
  json.description item_type.description
  json.category item_type.category
  json.image item_type.image
end
