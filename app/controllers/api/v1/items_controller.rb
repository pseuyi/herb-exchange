class Api::V1::ItemsController < ApplicationController
  def index
    @items = Item.order('created_at DESC')
  end

  def create
    @item = Item.create(item_params)
    if @item.save
     response = { message: "Item #{item_params[:name]} created!", item: @item }
     render json: response, status: :created
    else
     render json: @item.errors, status: :unprocessable_entity
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :price, :status)
  end
end
