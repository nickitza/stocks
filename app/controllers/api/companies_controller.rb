class Api::CompaniesController < ApplicationController
  before_action :set_company, only: [:show, :update, :destroy]

  def index
    render json: Company.all
  end

  def show
    render json: @company
  end

  def create
    company = Company.new(company_params)
    if company.save
      render json: company
    else
      render json: {errors: company.errors}, status: :unprocessable_entity
    end
  end

  def update
    if @company.update(company_params)
      render json: @company
    else
      render json: @company.errors, status: 422
    end
  end

  def destroy
    @company.destroy
  end

  private
    def company_params
      params.require(:company).permit(:name, :ticker)
    end

    def set_company
      @company = Company.find(params[:id])
    end
end
