Config.LoadedManModels = {}
Config.LoadedWomanModels = {}

Config.SkinData = { ["face"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["face2"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["facemix"] = { skinMix = 0, shapeMix = 0, defaultSkinMix = 0.0, defaultShapeMix = 0.0, },
    ["pants"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["hair"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["eyebrows"] = { item = -1, texture = 1, defaultItem = -1, defaultTexture = 1, },
    ["beard"] = { item = -1, texture = 1, defaultItem = -1, defaultTexture = 1, },
    ["blush"] = { item = -1, texture = 1, defaultItem = -1, defaultTexture = 1, },
    ["lipstick"] = { item = -1, texture = 1, defaultItem = -1, defaultTexture = 1, },
    ["makeup"] = { item = -1, texture = 1, defaultItem = -1, defaultTexture = 1, },
    ["ageing"] = { item = -1, texture = 0, defaultItem = -1, defaultTexture = 0, },
    ["arms"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["t-shirt"] = { item = 1, texture = 0, defaultItem = 1, defaultTexture = 0, },
    ["torso2"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["vest"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["bag"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["shoes"] = { item = 0, texture = 0, defaultItem = 1, defaultTexture = 0, },
    ["mask"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["hat"] = { item = -1, texture = 0, defaultItem = -1, defaultTexture = 0, },
    ["glass"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["ear"] = { item = -1, texture = 0, defaultItem = -1, defaultTexture = 0, },
    ["watch"] = { item = -1, texture = 0, defaultItem = -1, defaultTexture = 0, },
    ["bracelet"] = { item = -1, texture = 0, defaultItem = -1, defaultTexture = 0, },
    ["accessory"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["decals"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["eye_color"] = { item = -1, texture = 0, defaultItem = -1, defaultTexture = 0, },
    ["moles"] = { item = 0, texture = 0, defaultItem = -1, defaultTexture = 0, },
    ["nose_0"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["nose_1"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["nose_2"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["nose_3"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["nose_4"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["nose_5"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["cheek_1"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["cheek_2"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["cheek_3"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["eye_opening"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["lips_thickness"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["jaw_bone_width"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["eyebrown_high"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["eyebrown_forward"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["jaw_bone_back_lenght"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["chimp_bone_lowering"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["chimp_bone_lenght"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["chimp_bone_width"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["chimp_hole"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, },
    ["neck_thikness"] = { item = 0, texture = 0, defaultItem = 0, defaultTexture = 0, }, 
}

Config.ClothingCategories = {
    ["arms"]                 = { type = "variation", id = 3 },
    ["t-shirt"]              = { type = "variation", id = 8 },
    ["torso2"]               = { type = "variation", id = 11 },
    ["pants"]                = { type = "variation", id = 4 },
    ["vest"]                 = { type = "variation", id = 9 },
    ["shoes"]                = { type = "variation", id = 6 },
    ["bag"]                  = { type = "variation", id = 5 },
    ["hair"]                 = { type = "hair", id = 2 },
    ["eyebrows"]             = { type = "overlay", id = 2 },
    ["face"]                 = { type = "face", id = 2 },
    ["face2"]                = { type = "face", id = 2 },
    ["facemix"]              = { type = "face", id = 2 },
    ["beard"]                = { type = "overlay", id = 1 },
    ["blush"]                = { type = "overlay", id = 5 },
    ["lipstick"]             = { type = "overlay", id = 8 },
    ["makeup"]               = { type = "overlay", id = 4 },
    ["ageing"]               = { type = "ageing", id = 3 },
    ["mask"]                 = { type = "mask", id = 1 },
    ["hat"]                  = { type = "prop", id = 0 },
    ["glass"]                = { type = "prop", id = 1 },
    ["ear"]                  = { type = "prop", id = 2 },
    ["watch"]                = { type = "prop", id = 6 },
    ["bracelet"]             = { type = "prop", id = 7 },
    ["accessory"]            = { type = "variation", id = 7 },
    ["decals"]               = { type = "variation", id = 10 },
    ["eye_color"]            = { type = "eye_color", id = 1 },
    ["moles"]                = { type = "moles", id = 1 },
    ["jaw_bone_width"]       = { type = "cheek", id = 1 },
    ["jaw_bone_back_lenght"] = { type = "cheek", id = 1 },
    ["lips_thickness"]       = { type = "nose", id = 1 },
    ["nose_0"]               = { type = "nose", id = 1 },
    ["nose_1"]               = { type = "nose", id = 1 },
    ["nose_2"]               = { type = "nose", id = 2 },
    ["nose_3"]               = { type = "nose", id = 3 },
    ["nose_4"]               = { type = "nose", id = 4 },
    ["nose_5"]               = { type = "nose", id = 5 },
    ["cheek_1"]              = { type = "cheek", id = 1 },
    ["cheek_2"]              = { type = "cheek", id = 2 },
    ["cheek_3"]              = { type = "cheek", id = 3 },
    ["eyebrown_high"]        = { type = "nose", id = 1 },
    ["eyebrown_forward"]     = { type = "nose", id = 2 },
    ["eye_opening"]          = { type = "nose", id = 1 },
    ["chimp_bone_lowering"]  = { type = "chin", id = 1 },
    ["chimp_bone_lenght"]    = { type = "chin", id = 2 },
    ["chimp_bone_width"]     = { type = "cheek", id = 3 },
    ["chimp_hole"]           = { type = "cheek", id = 4 },
    ["neck_thikness"]        = { type = "cheek", id = 5 },
}