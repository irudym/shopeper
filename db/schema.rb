# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170331163950) do

  create_table "brands", force: :cascade do |t|
    t.string   "name"
    t.integer  "picture_id"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "trash",       default: false
    t.text     "description"
    t.index ["picture_id"], name: "index_brands_on_picture_id"
  end

  create_table "colors", force: :cascade do |t|
    t.string   "name"
    t.integer  "code"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.boolean  "trash",      default: false
    t.string   "hex_code"
  end

  create_table "item_pictures", force: :cascade do |t|
    t.integer  "item_id"
    t.integer  "picture_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_item_pictures_on_item_id"
    t.index ["picture_id"], name: "index_item_pictures_on_picture_id"
  end

  create_table "items", force: :cascade do |t|
    t.string   "name"
    t.integer  "shop_id"
    t.float    "price"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "trash",       default: false
    t.text     "description"
    t.integer  "brand_id"
    t.integer  "type_id"
    t.index ["brand_id"], name: "index_items_on_brand_id"
    t.index ["shop_id"], name: "index_items_on_shop_id"
    t.index ["type_id"], name: "index_items_on_type_id"
  end

  create_table "malls", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.boolean  "trash",      default: false
  end

  create_table "pictures", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.boolean  "trash",              default: false
    t.text     "description"
  end

  create_table "shops", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.integer  "mall_id"
    t.boolean  "trash",      default: false
    t.index ["mall_id"], name: "index_shops_on_mall_id"
  end

  create_table "sizes", force: :cascade do |t|
    t.string   "description"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "trash",       default: false
    t.string   "name"
  end

  create_table "stocks", force: :cascade do |t|
    t.integer  "shop_id"
    t.integer  "item_id"
    t.integer  "size_id"
    t.integer  "color_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["color_id"], name: "index_stocks_on_color_id"
    t.index ["item_id"], name: "index_stocks_on_item_id"
    t.index ["shop_id"], name: "index_stocks_on_shop_id"
    t.index ["size_id"], name: "index_stocks_on_size_id"
  end

  create_table "types", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "picture_id"
    t.boolean  "trash",       default: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.index ["picture_id"], name: "index_types_on_picture_id"
  end

end
