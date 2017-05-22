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

ActiveRecord::Schema.define(version: 20170503204922) do

  create_table "admins", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_admins_on_user_id", using: :btree
  end

  create_table "brand_in_shops", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "shop_id"
    t.integer  "brand_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["brand_id"], name: "index_brand_in_shops_on_brand_id", using: :btree
    t.index ["shop_id"], name: "index_brand_in_shops_on_shop_id", using: :btree
  end

  create_table "brands", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.integer  "picture_id"
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.boolean  "trash",                     default: false
    t.text     "description", limit: 65535
    t.index ["picture_id"], name: "index_brands_on_picture_id", using: :btree
  end

  create_table "bugs", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "title"
    t.text     "description",          limit: 65535
    t.boolean  "owned",                              default: false
    t.boolean  "trash",                              default: false
    t.datetime "created_at",                                         null: false
    t.datetime "updated_at",                                         null: false
    t.integer  "status",                             default: 0
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
  end

  create_table "colors", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.integer  "code"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.boolean  "trash",      default: false
    t.string   "hex_code"
  end

  create_table "comments", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "bug_id"
    t.text     "text",       limit: 65535
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.index ["bug_id"], name: "index_comments_on_bug_id", using: :btree
  end

  create_table "item_in_shops", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "item_id"
    t.integer  "shop_in_mall_id"
    t.datetime "created_at",                                 null: false
    t.datetime "updated_at",                                 null: false
    t.boolean  "trash",                      default: false
    t.integer  "quantity"
    t.integer  "size_id"
    t.integer  "color_id"
    t.float    "price",           limit: 24
    t.index ["color_id"], name: "index_item_in_shops_on_color_id", using: :btree
    t.index ["item_id"], name: "index_item_in_shops_on_item_id", using: :btree
    t.index ["shop_in_mall_id"], name: "index_item_in_shops_on_shop_in_mall_id", using: :btree
    t.index ["size_id"], name: "index_item_in_shops_on_size_id", using: :btree
  end

  create_table "item_pictures", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "item_id"
    t.integer  "picture_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["item_id"], name: "index_item_pictures_on_item_id", using: :btree
    t.index ["picture_id"], name: "index_item_pictures_on_picture_id", using: :btree
  end

  create_table "items", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.integer  "shop_id"
    t.float    "price",       limit: 24
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.boolean  "trash",                     default: false
    t.text     "description", limit: 65535
    t.integer  "brand_id"
    t.integer  "type_id"
    t.index ["brand_id"], name: "index_items_on_brand_id", using: :btree
    t.index ["shop_id"], name: "index_items_on_shop_id", using: :btree
    t.index ["type_id"], name: "index_items_on_type_id", using: :btree
  end

  create_table "malls", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.string   "address"
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.boolean  "trash",                     default: false
    t.text     "description", limit: 65535
    t.integer  "picture_id"
    t.index ["picture_id"], name: "index_malls_on_picture_id", using: :btree
  end

  create_table "pictures", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.datetime "created_at",                                       null: false
    t.datetime "updated_at",                                       null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.boolean  "trash",                            default: false
    t.text     "description",        limit: 65535
  end

  create_table "shop_in_malls", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "shop_id"
    t.integer  "mall_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["mall_id"], name: "index_shop_in_malls_on_mall_id", using: :btree
    t.index ["shop_id"], name: "index_shop_in_malls_on_shop_id", using: :btree
  end

  create_table "shops", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.string   "address"
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.boolean  "trash",                     default: false
    t.text     "description", limit: 65535
    t.integer  "brand_id"
    t.index ["brand_id"], name: "index_shops_on_brand_id", using: :btree
  end

  create_table "sizes", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "description"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "trash",       default: false
    t.string   "name"
  end

  create_table "stocks", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "shop_id"
    t.integer  "item_id"
    t.integer  "size_id"
    t.integer  "color_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["color_id"], name: "index_stocks_on_color_id", using: :btree
    t.index ["item_id"], name: "index_stocks_on_item_id", using: :btree
    t.index ["shop_id"], name: "index_stocks_on_shop_id", using: :btree
    t.index ["size_id"], name: "index_stocks_on_size_id", using: :btree
  end

  create_table "types", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.text     "description", limit: 65535
    t.integer  "picture_id"
    t.boolean  "trash",                     default: false
    t.datetime "created_at",                                null: false
    t.datetime "updated_at",                                null: false
    t.index ["picture_id"], name: "index_types_on_picture_id", using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "nickname"
    t.string   "authentication_token"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "admins", "users"
  add_foreign_key "brand_in_shops", "brands"
  add_foreign_key "brand_in_shops", "shops"
  add_foreign_key "brands", "pictures"
  add_foreign_key "comments", "bugs"
  add_foreign_key "item_in_shops", "colors"
  add_foreign_key "item_in_shops", "items"
  add_foreign_key "item_in_shops", "shop_in_malls"
  add_foreign_key "item_in_shops", "sizes"
  add_foreign_key "item_pictures", "items"
  add_foreign_key "item_pictures", "pictures"
  add_foreign_key "items", "brands"
  add_foreign_key "items", "shops"
  add_foreign_key "items", "types"
  add_foreign_key "malls", "pictures"
  add_foreign_key "shop_in_malls", "malls"
  add_foreign_key "shop_in_malls", "shops"
  add_foreign_key "stocks", "colors"
  add_foreign_key "stocks", "items"
  add_foreign_key "stocks", "shops"
  add_foreign_key "stocks", "sizes"
  add_foreign_key "types", "pictures"
end
