class Api::RecordsController < ApplicationController
  before_action :set_company
  before_action :set_record

  def index
    @records = @company.record
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
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
