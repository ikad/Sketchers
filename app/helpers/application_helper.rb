module ApplicationHelper

  def gravatar_tag(url="test@example.com")
    image_tag(url, class: "gravatar")
  end
end
