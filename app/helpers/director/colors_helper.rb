module Director::ColorsHelper

  def color_box(color)
    "<div class='color-box' style='background:##{color}'></div>".html_safe
  end
end
