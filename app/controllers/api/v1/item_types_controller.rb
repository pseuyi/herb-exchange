class Api::V1::ItemTypesController < ApplicationController
  def index
    @item_types = ItemType.order('created_at DESC')
  end

  def create
    @item_type = ItemType.create(item_type_params)
    if @item_type.save
     response = { message: "Item type #{item_type_params[:name]} created!", item_type: @item_type }
     render json: response, status: :created
    else
     render json: @item_type.errors, status: :unprocessable_entity
    end
  end

  private

  def item_type_params
    params.require(:item_type).permit(:name, :description, :category, :image)
  end
end
