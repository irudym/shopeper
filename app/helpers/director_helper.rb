module DirectorHelper
  def side_menu(active)
    menu_items = [
        {
            text: 'dashboard',
            url: director_dashboard_path,
            icon: 'tachometer'
        },
        {
            text: 'malls',
            url: director_malls_path,
            icon: 'building'
        },
        {
            text: 'shops',
            url: director_shops_path,
            icon: 'shopping-bag'
        },
        {
            text: 'items',
            url: director_items_path,
            icon: 'gift'
        },
        {
            text: 'stock',
            url:  director_stock_index_path,
            icon: 'dropbox'
        },
        {
            text: '____',
            url: ''
        },
        {
            text: 'pictures',
            url: director_pictures_path,
            icon: 'picture-o'
        },
        {
            text: 'brands',
            url: director_brands_path,
            icon: 'dollar'
        },
        {
            text: 'colors',
            url: director_colors_path,
            icon: 'paint-brush'
        },
        {
            text: 'sizes',
            url: director_sizes_path,
            icon: 'expand'
        },
        {
            text: 'types',
            url: director_types_path,
            icon: 'tag'
        },
        {
            text: '____',
            url: ''
        },
        {
            text: 'bugs',
            url: director_bugs_path,
            icon: 'bug'
        }

    ]
    menu = menu_items.inject('') do |acc, item|
      if item[:text].eql? '____'
        acc + '<div class="separator"></div>'
      else
        acc + "<a href='#{item[:url]}'><div class='menu-item #{active == item[:text] ? 'menu-active' : ''}'><li><div class='icon'>#{icon(item[:icon])}</div><div class='hidden-xs menu-text'>#{sanitize item[:text]}</div></li></div></a>"
      end
    end
    "<ul>#{menu}</ul>".html_safe
  end

  def side_bar(active)
    "<div class='side-bar'><div class='logo'><div class='hidden-xs'>S•H•O•P•E•P•E•R</div><div class='visible-xs'>PE</div></div>#{side_menu(active)}</div>".html_safe
  end

  def title(text)
    "<div class='page-title'><h1>#{sanitize text}</h1></div>".html_safe
  end

  def section_menu(menu)
    menu = [] unless menu

    html_str = menu.inject('<ul class="section-menu">') do |result, item|
      a_class = 'button-gray'
      a_class = 'button-red' if item[:color].eql? 'danger'
      result + "<li><a class='button #{a_class}' href='#{item[:url]}'>#{icon(item[:icon])} #{sanitize item[:text]}</a></li>"
    end
    html_str += '</ul>'
    html_str.html_safe
  end

  def show_errors(object)
    html_str = ''
    if object.errors.any?
      messages = object.errors.full_messages.inject('') { |res, item |  res + "<li>#{item}</li>"}
      html_str = "<div class='system-message system-error'>
                    <div class='row'>
                      <div class='col-sm-1 error-icon'>#{icon 'exclamation-circle', class: 'fa-2x'}</div>
                      <div class='col-sm-6'>
                        <h4>#{pluralize(object.errors.count, 'Error')}</h4>
                        <p><ul>
                          #{messages}
                        </ul></p>
                      </div>
                    </div>
                  </div>"
    end
    html_str.html_safe
  end

  def show_notice(text)
    html_str = ''
    if text
      html_str = "<div class='system-message system-info'>
                    <div class='row'>
                      <div class='col-sm-1 info-icon'>#{icon 'info-circle', class: 'fa-2x'}</div>
                      <div class='col-sm-6'>
                        <h4>Information</h4>
                        <p>
                          #{sanitize text}
                        </p>
                      </div>
                    </div>
                  </div>"
    end
    html_str.html_safe
  end

  def selector(options, model)
    html = "<select class='selectpicker' data-live-search='true' name='#{model}[image_id]' id='#{model}_image_id'>"
    html += options.inject("") do |acc, item|
      acc + "<option value='#{item[:id]}'>#{item[:name]}</option>"
    end + "</select>"
    html.html_safe
  end

  def dashboardWidget(icon, title, text)
    "<div class='col-sm-4'>
      <div class='widget-info'>
        <div class='icon'>#{icon(icon)}</div>
        <div class='title'>#{title}</div>
        <div class='text'>#{text}</div>
      </div>
     </div>".html_safe
  end
end
