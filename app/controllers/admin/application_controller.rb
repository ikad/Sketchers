class Admin::ApplicationController < ApplicationController
  before_action :authenticate_admin

  def authenticate_admin
    unless user_signed_in? && current_user.admin?
      redirect_to(new_user_session_path, notice: "ログインしてください")
    end
  end
end
