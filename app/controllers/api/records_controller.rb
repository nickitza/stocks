class Api::RecordsController < ApplicationController
  before_action :set_company
  before_action :set_record, only: [:show, :update, :destroy]

  def index
    render json: @company.records
  end

  def show
    render json: @record
  end

  def create
    record = @company.record.new(record_params)
    if record.save
      render json: record
    else
      render json: record.errors, status: 422
    end
  end

  def update
    if @record.update(record_params)
      render json: @record
    else
      render json: @record.errors, status: 422
    end
  end

  def destroy
    @record.destroy
  end

  private
    def set_company
      @company = Company.find(params[:company_id])
    end

    def set_record
      @record = Record.find(params[:id])
    end

    def record_params
      params.require(:record).permit(:year, :revenue, :eps, :book, :op_cash, :roic, :pe)
    end

end
