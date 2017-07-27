class HistoryController < ApplicationController
  #before_action :configure_permitted_parameters, if: :devise_controller?
  #skip_before_action :verify_authenticity_token
  respond_to :json
  def create
    history = History.new(history_params)
    history.save
    respond_with(history) do |format|
      format.json { render json: history.as_json }
    end
  end

  def show
    histories = History.where(:user_id => params[:user_id])
    respond_with(histories) do |format|
      format.json { render json: histories.as_json }
    end
  end

  private

  def history_params
    params.require(:history).permit(:lat, :long, :address, :user_id)
  end
end
