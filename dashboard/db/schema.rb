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

ActiveRecord::Schema.define(version: 20171206192422) do

  create_table "activities", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "user_id"
    t.integer  "level_id"
    t.string   "action"
    t.string   "data",        limit: 20000
    t.string   "url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "attempt"
    t.integer  "time"
    t.integer  "test_result"
    t.index ["user_id", "level_id"], name: "index_activities_on_user_id_and_level_id", using: :btree
  end

  create_table "callouts", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "element_id", limit: 1024, null: false
    t.string   "text",       limit: 1024, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "channel_tokens", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "channel",        null: false
    t.integer  "storage_app_id"
    t.integer  "user_id",        null: false
    t.integer  "level_id",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "storage_id"
    t.index ["storage_app_id"], name: "index_channel_tokens_on_storage_app_id", using: :btree
    t.index ["storage_id"], name: "index_channel_tokens_on_storage_id", using: :btree
    t.index ["user_id", "level_id"], name: "index_channel_tokens_on_user_id_and_level_id", unique: true, using: :btree
  end

  create_table "concepts", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.string   "description", limit: 1024
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "video_id"
  end

  create_table "concepts_levels", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer "concept_id"
    t.integer "level_id"
  end

  create_table "course_scripts", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer "course_id",       null: false
    t.integer "script_id",       null: false
    t.integer "position",        null: false
    t.string  "experiment_name",              comment: "If present, the SingleTeacherExperiment with this name must be enabled in order for a teacher or their students to see this script."
    t.index ["course_id"], name: "index_course_scripts_on_course_id", using: :btree
    t.index ["script_id"], name: "index_course_scripts_on_script_id", using: :btree
  end

  create_table "experiments", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "name",                 null: false
    t.string   "type",                 null: false
    t.datetime "start_at"
    t.datetime "end_at"
    t.integer  "section_id"
    t.integer  "min_user_id"
    t.integer  "max_user_id"
    t.integer  "overflow_max_user_id"
    t.datetime "earliest_section_at"
    t.datetime "latest_section_at"
    t.integer  "script_id"
    t.index ["max_user_id"], name: "index_experiments_on_max_user_id", using: :btree
    t.index ["min_user_id"], name: "index_experiments_on_min_user_id", using: :btree
    t.index ["overflow_max_user_id"], name: "index_experiments_on_overflow_max_user_id", using: :btree
    t.index ["section_id"], name: "index_experiments_on_section_id", using: :btree
  end

  create_table "featured_projects", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "storage_app_id"
    t.integer  "who_featured_user_id"
    t.datetime "created_at"
    t.index ["storage_app_id"], name: "index_featured_projects_on_storage_app_id", using: :btree
  end

  create_table "followers", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "user_id",         null: false
    t.integer  "student_user_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "section_id"
    t.datetime "deleted_at"
    t.index ["student_user_id"], name: "index_followers_on_student_user_id", using: :btree
    t.index ["user_id", "student_user_id"], name: "index_followers_on_user_id_and_student_user_id", unique: true, using: :btree
  end

  create_table "games", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "base_url"
    t.string   "app"
    t.integer  "intro_video_id"
  end

  create_table "levels", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "game_id"
    t.string   "name"
    t.string   "level_url"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "level_num"
    t.string   "instructions"
    t.string   "skin"
  end

  create_table "paired_user_levels", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "driver_user_level_id"
    t.integer  "navigator_user_level_id"
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.index ["driver_user_level_id"], name: "index_paired_user_levels_on_driver_user_level_id", using: :btree
    t.index ["navigator_user_level_id"], name: "index_paired_user_levels_on_navigator_user_level_id", using: :btree
  end

  create_table "script_levels", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "level_id",     null: false
    t.integer  "script_id",    null: false
    t.integer  "chapter"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "game_chapter"
  end

  create_table "scripts", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "wrapup_video_id"
    t.boolean  "trophies",        default: false, null: false
    t.boolean  "hidden",          default: false, null: false
  end

  create_table "secret_pictures", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name",       null: false
    t.string   "path",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["name"], name: "index_secret_pictures_on_name", unique: true, using: :btree
    t.index ["path"], name: "index_secret_pictures_on_path", unique: true, using: :btree
  end

  create_table "secret_words", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "word",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["word"], name: "index_secret_words_on_word", unique: true, using: :btree
  end

  create_table "sections", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "user_id",                          null: false
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "code"
    t.datetime "deleted_at"
    t.string   "login_type"
    t.integer  "script_id"
    t.integer  "login_method",     default: 0
    t.string   "grade"
    t.string   "admin_code"
    t.boolean  "stage_extras",     default: false, null: false
    t.boolean  "pairing_allowed",  default: true,  null: false
    t.boolean  "hidden",           default: false, null: false
    t.integer  "course_id"
    t.boolean  "sharing_disabled", default: false, null: false, comment: "Flag indicates the default sharing setting for a section and is used to determine students share setting when adding a new student to the section."
    t.index ["user_id", "name"], name: "index_sections_on_user_id_and_name", unique: true, using: :btree
  end

  create_table "trophies", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.string   "image_name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["name"], name: "index_trophies_on_name", unique: true, using: :btree
  end

  create_table "user_levels", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "user_id",                 null: false
    t.integer  "level_id",                null: false
    t.integer  "attempts",    default: 0, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "best_result"
    t.index ["user_id", "level_id"], name: "index_user_levels_on_user_id_and_level_id", unique: true, using: :btree
  end

  create_table "user_permissions", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "user_id",    null: false
    t.string   "permission", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["user_id", "permission"], name: "index_user_permissions_on_user_id_and_permission", unique: true, using: :btree
  end

  create_table "user_scripts", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "user_id",          null: false
    t.integer  "script_id",        null: false
    t.datetime "started_at"
    t.datetime "completed_at"
    t.datetime "assigned_at"
    t.datetime "last_progress_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["user_id", "script_id"], name: "index_user_scripts_on_user_id_and_script_id", unique: true, using: :btree
  end

  create_table "user_trophies", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.integer  "user_id",    null: false
    t.integer  "trophy_id",  null: false
    t.integer  "concept_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["user_id", "trophy_id", "concept_id"], name: "index_user_trophies_on_user_id_and_trophy_id_and_concept_id", unique: true, using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "email",                                default: "",        null: false
    t.string   "encrypted_password",                   default: "",        null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                        default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "username"
    t.string   "provider"
    t.string   "uid"
    t.boolean  "admin"
    t.string   "gender",                 limit: 1
    t.string   "name"
    t.string   "language",               limit: 2
    t.date     "birthday"
    t.string   "parent_email"
    t.datetime "deleted_at"
    t.string   "hashed_email"
    t.text     "properties",             limit: 65535
    t.string   "user_type",              limit: 16,    default: "student"
    t.string   "school"
    t.string   "full_address",           limit: 1024
    t.string   "address"
    t.string   "city"
    t.string   "state"
    t.string   "zip"
    t.float    "lat",                    limit: 24
    t.float    "lon",                    limit: 24
    t.integer  "total_lines",                          default: 0,         null: false
    t.string   "secret_words"
    t.integer  "secret_picture_id"
    t.integer  "secret_word_1_id"
    t.integer  "secret_word_2_id"
    t.index ["deleted_at"], name: "index_users_on_deleted_at", using: :btree
    t.index ["email"], name: "index_users_on_email", using: :btree
    t.index ["hashed_email"], name: "index_users_on_hashed_email", using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

  create_table "videos", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci" do |t|
    t.string   "name"
    t.string   "key"
    t.string   "youtube_code"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
