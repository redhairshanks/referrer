module PermissionHandler

  def authenticate_user
    if request.headers.present? && cookies.present? && cookies['x-session-id'].present?
      session_id = cookies['x-session-id']
      session_data = User.find_by_session(session_id)
      puts session_data
      if session_data.present? && session_data[:user].present?
        @current_user = session_data[:user]
      else
        redirect_to '/'
      end
    else
      redirect_to '/'
    end
  end
end