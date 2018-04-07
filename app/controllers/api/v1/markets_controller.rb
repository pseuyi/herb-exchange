class Api::V1::MarketsController < ApplicationController
  def index
    @markets = Market.order('created_at DESC')
  end

  def create
    @market = Market.create(market_params)
    if @market.save
     response = { message: "Market called #{market_params[:name]} created!", market: @market }
     render json: response, status: :created
    else
     render json: @market.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @market = Market.find(params[:id])
    @market.destroy
  end

  private

  def market_params
    params.require(:market).permit(:name, :description)
  end

end
