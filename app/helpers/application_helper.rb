module ApplicationHelper

  def gravatar_tag(url)
    image_tag(url, class: "gravatar") if url
  end
end
