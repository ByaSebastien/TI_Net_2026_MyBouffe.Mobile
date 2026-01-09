export interface FoodResultModel {
  code: string
  product: Product
  status: number
  status_verbose: string
}

export interface Product {
  _id: string
  _keywords: string[]
  abbreviated_product_name: string
  abbreviated_product_name_fr: string
  abbreviated_product_name_fr_imported: string
  added_countries_tags: any[]
  additives_n: number
  additives_original_tags: string[]
  additives_tags: string[]
  allergens: string
  allergens_from_ingredients: string
  allergens_from_user: string
  allergens_hierarchy: string[]
  allergens_imported: string
  allergens_lc: string
  allergens_tags: string[]
  amino_acids_prev_tags: any[]
  amino_acids_tags: any[]
  brands: string
  brands_imported: string
  brands_old: string
  brands_tags: string[]
  carbon_footprint_percent_of_known_ingredients: number
  categories: string
  categories_hierarchy: string[]
  categories_imported: string
  categories_lc: string
  categories_old: string
  categories_properties: CategoriesProperties
  categories_properties_tags: string[]
  categories_tags: string[]
  category_properties: CategoryProperties
  checked: string
  checkers_tags: string[]
  ciqual_food_name_tags: string[]
  cities_tags: any[]
  code: string
  codes_tags: string[]
  compared_to_category: string
  complete: number
  completeness: number
  conservation_conditions: string
  conservation_conditions_fr: string
  conservation_conditions_fr_imported: string
  correctors_tags: string[]
  countries: string
  countries_beforescanbot: string
  countries_hierarchy: string[]
  countries_imported: string
  countries_lc: string
  countries_tags: string[]
  created_t: number
  creator: string
  customer_service: string
  customer_service_fr: string
  customer_service_fr_imported: string
  data_quality_bugs_tags: any[]
  data_quality_completeness_tags: string[]
  data_quality_dimensions: DataQualityDimensions
  data_quality_errors_tags: any[]
  data_quality_info_tags: string[]
  data_quality_tags: string[]
  data_quality_warnings_tags: string[]
  data_sources: string
  data_sources_imported: string
  data_sources_tags: string[]
  debug_param_sorted_langs: string[]
  debug_tags: string[]
  ecoscore_data: EcoscoreData
  ecoscore_grade: string
  ecoscore_tags: string[]
  editors_tags: string[]
  emb_codes: string
  emb_codes_20141016: string
  emb_codes_orig: string
  emb_codes_tags: any[]
  entry_dates_tags: string[]
  environment_impact_level: string
  environment_impact_level_tags: any[]
  expiration_date: string
  food_groups_tags: any[]
  "fruits-vegetables-nuts_100g_estimate": number
  generic_name: string
  generic_name_ar: string
  generic_name_ch: string
  generic_name_de: string
  generic_name_en: string
  generic_name_es: string
  generic_name_fr: string
  generic_name_fr_imported: string
  generic_name_id: string
  generic_name_it: string
  generic_name_nl: string
  generic_name_pt: string
  generic_name_ro: string
  grades: Grades
  id: string
  image_front_small_url: string
  image_front_thumb_url: string
  image_front_url: string
  image_ingredients_small_url: string
  image_ingredients_thumb_url: string
  image_ingredients_url: string
  image_nutrition_small_url: string
  image_nutrition_thumb_url: string
  image_nutrition_url: string
  image_packaging_small_url: string
  image_packaging_thumb_url: string
  image_packaging_url: string
  image_small_url: string
  image_thumb_url: string
  image_url: string
  images: Images
  informers_tags: string[]
  ingredients: Ingredient[]
  ingredients_analysis: IngredientsAnalysis
  ingredients_analysis_tags: string[]
  ingredients_debug: string | undefined[]
  ingredients_from_or_that_may_be_from_palm_oil_n: number
  ingredients_from_palm_oil_n: number
  ingredients_from_palm_oil_tags: string[]
  ingredients_hierarchy: string[]
  ingredients_ids_debug: string[]
  ingredients_lc: string
  ingredients_n: number
  ingredients_n_tags: string[]
  ingredients_non_nutritive_sweeteners_n: number
  ingredients_original_tags: string[]
  ingredients_percent_analysis: number
  ingredients_sweeteners_n: number
  ingredients_tags: string[]
  ingredients_text: string
  ingredients_text_ar: string
  ingredients_text_ch: string
  ingredients_text_de: string
  ingredients_text_debug: string
  ingredients_text_en: string
  ingredients_text_en_ocr_1642445989: string
  ingredients_text_en_ocr_1642445989_result: string
  ingredients_text_en_ocr_1643128902: string
  ingredients_text_en_ocr_1643128902_result: string
  ingredients_text_es: string
  ingredients_text_fr: string
  ingredients_text_fr_imported: string
  ingredients_text_fr_ocr_1642445989: string
  ingredients_text_fr_ocr_1642445989_result: string
  ingredients_text_fr_ocr_1643128902: string
  ingredients_text_fr_ocr_1643128902_result: string
  ingredients_text_id: string
  ingredients_text_it: string
  ingredients_text_nl: string
  ingredients_text_pt: string
  ingredients_text_ro: string
  ingredients_text_with_allergens: string
  ingredients_text_with_allergens_ar: string
  ingredients_text_with_allergens_ch: string
  ingredients_text_with_allergens_de: string
  ingredients_text_with_allergens_en: string
  ingredients_text_with_allergens_es: string
  ingredients_text_with_allergens_fr: string
  ingredients_text_with_allergens_it: string
  ingredients_text_with_allergens_nl: string
  ingredients_text_with_allergens_ro: string
  ingredients_that_may_be_from_palm_oil_n: number
  ingredients_that_may_be_from_palm_oil_tags: any[]
  ingredients_with_specified_percent_n: number
  ingredients_with_specified_percent_sum: number
  ingredients_with_unspecified_percent_n: number
  ingredients_with_unspecified_percent_sum: number
  ingredients_without_ciqual_codes: string[]
  ingredients_without_ciqual_codes_n: number
  ingredients_without_ecobalyse_ids: string[]
  ingredients_without_ecobalyse_ids_n: number
  interface_version_created: string
  interface_version_modified: string
  known_ingredients_n: number
  labels: string
  labels_hierarchy: string[]
  labels_imported: string
  labels_lc: string
  labels_old: string
  labels_tags: string[]
  lang: string
  lang_imported: string
  languages: Languages
  languages_codes: LanguagesCodes
  languages_hierarchy: string[]
  languages_tags: string[]
  last_check_dates_tags: string[]
  last_checked_t: number
  last_checker: string
  last_edit_dates_tags: string[]
  last_editor: string
  last_image_dates_tags: string[]
  last_image_t: number
  last_modified_by: string
  last_modified_t: number
  last_updated_t: number
  lc: string
  lc_imported: string
  link: string
  main_countries_tags: any[]
  manufacturing_places: string
  manufacturing_places_tags: any[]
  max_imgid: number
  minerals_prev_tags: any[]
  minerals_tags: any[]
  misc_tags: string[]
  no_nutrition_data: string
  no_nutrition_data_imported: string
  nova_group: number
  nova_group_debug: string
  nova_groups: string
  nova_groups_markers: NovaGroupsMarkers
  nova_groups_tags: string[]
  nucleotides_prev_tags: any[]
  nucleotides_tags: any[]
  nutrient_levels: NutrientLevels
  nutrient_levels_tags: string[]
  nutriments: Nutriments
  nutriscore: Nutriscore
  nutriscore_2021_tags: string[]
  nutriscore_2023_tags: string[]
  nutriscore_data: NutriscoreData
  nutriscore_grade: string
  nutriscore_score: number
  nutriscore_score_opposite: number
  nutriscore_tags: string[]
  nutriscore_version: string
  nutrition_data: string
  nutrition_data_per: string
  nutrition_data_per_imported: string
  nutrition_data_prepared: string
  nutrition_data_prepared_per: string
  nutrition_grade_fr: string
  nutrition_grades: string
  nutrition_grades_tags: string[]
  nutrition_score_beverage: number
  nutrition_score_debug: string
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients: number
  nutrition_score_warning_fruits_vegetables_legumes_estimate_from_ingredients_value: number
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients: number
  nutrition_score_warning_fruits_vegetables_nuts_estimate_from_ingredients_value: number
  obsolete: string
  obsolete_imported: string
  obsolete_since_date: string
  origin: string
  origin_ar: string
  origin_ch: string
  origin_de: string
  origin_en: string
  origin_es: string
  origin_fr: string
  origin_it: string
  origin_nl: string
  origin_pt: string
  origin_ro: string
  origins: string
  origins_hierarchy: any[]
  origins_lc: string
  origins_old: string
  origins_tags: any[]
  other_nutritional_substances_tags: any[]
  owner: string
  owner_fields: OwnerFields
  owner_imported: string
  owners_tags: string
  packaging: string
  packaging_hierarchy: string[]
  packaging_imported: string
  packaging_lc: string
  packaging_materials_tags: string[]
  packaging_old: string
  packaging_old_before_taxonomization: string
  packaging_recycling_tags: string[]
  packaging_shapes_tags: string[]
  packaging_tags: string[]
  packaging_text: string
  packaging_text_ar: string
  packaging_text_ch: string
  packaging_text_de: string
  packaging_text_en: string
  packaging_text_es: string
  packaging_text_fr: string
  packaging_text_id: string
  packaging_text_it: string
  packaging_text_nl: string
  packaging_text_pt: string
  packaging_text_ro: string
  packagings: Packaging3[]
  packagings_complete: number
  packagings_materials: PackagingsMaterials
  packagings_materials_main: string
  packagings_n: number
  photographers_tags: string[]
  pnns_groups_1: string
  pnns_groups_1_tags: string[]
  pnns_groups_2: string
  pnns_groups_2_tags: string[]
  popularity_key: number
  popularity_tags: string[]
  producer_version_id: string
  producer_version_id_imported: string
  product: Product2
  product_name: string
  product_name_ar: string
  product_name_ch: string
  product_name_de: string
  product_name_en: string
  product_name_es: string
  product_name_fr: string
  product_name_fr_imported: string
  product_name_id: string
  product_name_it: string
  product_name_nl: string
  product_name_pt: string
  product_name_ro: string
  product_quantity: number
  product_quantity_unit: string
  product_type: string
  purchase_places: string
  purchase_places_tags: any[]
  quantity: string
  quantity_imported: string
  removed_countries_tags: any[]
  rev: number
  scans_n: number
  schema_version: number
  scores: Scores2
  selected_images: SelectedImages
  serving_quantity: number
  serving_quantity_unit: string
  serving_size: string
  serving_size_imported: string
  sortkey: number
  sources: Source[]
  sources_fields: SourcesFields
  states: string
  states_hierarchy: string[]
  states_tags: string[]
  stores: string
  stores_tags: any[]
  taxonomies_enhancer_tags: string[]
  teams: string
  teams_tags: string[]
  traces: string
  traces_from_ingredients: string
  traces_from_user: string
  traces_hierarchy: any[]
  traces_lc: string
  traces_tags: any[]
  unique_scans_n: number
  unknown_ingredients_n: number
  unknown_nutrients_tags: any[]
  update_key: string
  vitamins_prev_tags: any[]
  vitamins_tags: any[]
  weighers_tags: string[]
  weighters_tags: any[]
}

export interface CategoriesProperties {}

export interface CategoryProperties {
  "ciqual_food_name:en": string
}

export interface DataQualityDimensions {
  accuracy: Accuracy
  completeness: Completeness
}

export interface Accuracy {
  overall: string
}

export interface Completeness {
  general_information: string
  ingredients: string
  nutrition: string
  overall: string
  packaging: string
}

export interface EcoscoreData {
  adjustments: Adjustments
  agribalyse: Agribalyse
  grade: string
  missing: Missing
  missing_agribalyse_match_warning: number
  previous_data: PreviousData
  scores: Scores
  status: string
}

export interface Adjustments {
  origins_of_ingredients: OriginsOfIngredients
  packaging: Packaging
  production_system: ProductionSystem
  threatened_species: ThreatenedSpecies
}

export interface OriginsOfIngredients {
  aggregated_origins: AggregatedOrigin[]
  epi_score: number
  epi_value: number
  origins_from_categories: string[]
  origins_from_origins_field: string[]
  transportation_score: number
  transportation_scores: TransportationScores
  transportation_value: number
  transportation_values: TransportationValues
  value: number
  values: Values
  warning: string
}

export interface AggregatedOrigin {
  epi_score: number
  origin: string
  percent: number
  transportation_score: number
}

export interface TransportationScores {
  ad: number
  al: number
  at: number
  ax: number
  ba: number
  be: number
  bg: number
  ch: number
  cy: number
  cz: number
  de: number
  dk: number
  dz: number
  ee: number
  eg: number
  es: number
  fi: number
  fo: number
  fr: number
  gg: number
  gi: number
  gr: number
  hr: number
  hu: number
  ie: number
  il: number
  im: number
  is: number
  it: number
  je: number
  lb: number
  li: number
  lt: number
  lu: number
  lv: number
  ly: number
  ma: number
  mc: number
  md: number
  me: number
  mk: number
  mt: number
  nl: number
  no: number
  pl: number
  ps: number
  pt: number
  ro: number
  rs: number
  se: number
  si: number
  sj: number
  sk: number
  sm: number
  sy: number
  tn: number
  tr: number
  ua: number
  uk: number
  us: number
  va: number
  world: number
  xk: number
}

export interface TransportationValues {
  ad: number
  al: number
  at: number
  ax: number
  ba: number
  be: number
  bg: number
  ch: number
  cy: number
  cz: number
  de: number
  dk: number
  dz: number
  ee: number
  eg: number
  es: number
  fi: number
  fo: number
  fr: number
  gg: number
  gi: number
  gr: number
  hr: number
  hu: number
  ie: number
  il: number
  im: number
  is: number
  it: number
  je: number
  lb: number
  li: number
  lt: number
  lu: number
  lv: number
  ly: number
  ma: number
  mc: number
  md: number
  me: number
  mk: number
  mt: number
  nl: number
  no: number
  pl: number
  ps: number
  pt: number
  ro: number
  rs: number
  se: number
  si: number
  sj: number
  sk: number
  sm: number
  sy: number
  tn: number
  tr: number
  ua: number
  uk: number
  us: number
  va: number
  world: number
  xk: number
}

export interface Values {
  ad: number
  al: number
  at: number
  ax: number
  ba: number
  be: number
  bg: number
  ch: number
  cy: number
  cz: number
  de: number
  dk: number
  dz: number
  ee: number
  eg: number
  es: number
  fi: number
  fo: number
  fr: number
  gg: number
  gi: number
  gr: number
  hr: number
  hu: number
  ie: number
  il: number
  im: number
  is: number
  it: number
  je: number
  lb: number
  li: number
  lt: number
  lu: number
  lv: number
  ly: number
  ma: number
  mc: number
  md: number
  me: number
  mk: number
  mt: number
  nl: number
  no: number
  pl: number
  ps: number
  pt: number
  ro: number
  rs: number
  se: number
  si: number
  sj: number
  sk: number
  sm: number
  sy: number
  tn: number
  tr: number
  ua: number
  uk: number
  us: number
  va: number
  world: number
  xk: number
}

export interface Packaging {
  non_recyclable_and_non_biodegradable_materials: number
  packagings: Packaging2[]
  score: number
  value: number
  warning: string
}

export interface Packaging2 {
  environmental_score_material_score: number
  environmental_score_shape_ratio: number
  food_contact: number
  material: string
  number_of_units?: number
  quantity_per_unit?: string
  quantity_per_unit_unit?: string
  quantity_per_unit_value?: string
  recycling?: string
  shape: string
  weight_measured?: number
  non_recyclable_and_non_biodegradable?: string
}

export interface ProductionSystem {
  labels: any[]
  value: number
  warning: string
}

export interface ThreatenedSpecies {
  ingredient: string
  value: number
}

export interface Agribalyse {
  warning: string
}

export interface Missing {
  agb_category: number
  labels: number
  origins: number
  packagings: number
}

export interface PreviousData {
  agribalyse: Agribalyse2
  grade: string
  score: number
}

export interface Agribalyse2 {
  agribalyse_food_code: string
  co2_agriculture: number
  co2_consumption: number
  co2_distribution: number
  co2_packaging: number
  co2_processing: number
  co2_total: number
  co2_transportation: number
  code: string
  dqr: string
  ef_agriculture: number
  ef_consumption: number
  ef_distribution: number
  ef_packaging: number
  ef_processing: number
  ef_total: number
  ef_transportation: number
  is_beverage: number
  name_en: string
  name_fr: string
  score: number
  version: string
}

export interface Scores {}

export interface Grades {}

export interface Images {
  "1": N1
  "10": N10
  "100": N1003
  "101": N101
  "102": N102
  "103": N103
  "104": N104
  "11": N11
  "110": N110
  "111": N111
  "113": N113
  "114": N114
  "117": N117
  "119": N119
  "12": N12
  "120": N120
  "121": N121
  "122": N122
  "123": N123
  "124": N124
  "128": N128
  "129": N129
  "13": N13
  "133": N133
  "134": N134
  "135": N135
  "136": N136
  "137": N137
  "138": N138
  "139": N139
  "14": N14
  "140": N140
  "141": N141
  "142": N142
  "143": N143
  "144": N144
  "145": N145
  "146": N146
  "147": N147
  "149": N149
  "15": N15
  "150": N150
  "151": N151
  "153": N153
  "154": N154
  "155": N155
  "156": N156
  "157": N157
  "16": N16
  "160": N160
  "161": N161
  "162": N162
  "163": N163
  "164": N164
  "165": N165
  "166": N166
  "169": N169
  "17": N17
  "170": N170
  "175": N175
  "176": N176
  "18": N18
  "19": N19
  "2": N2
  "20": N20
  "21": N21
  "22": N22
  "23": N23
  "24": N24
  "25": N25
  "26": N26
  "27": N27
  "28": N28
  "29": N29
  "3": N3
  "30": N30
  "31": N31
  "32": N32
  "33": N33
  "34": N34
  "35": N35
  "4": N4
  "40": N40
  "41": N41
  "42": N42
  "47": N47
  "48": N48
  "49": N49
  "5": N5
  "50": N50
  "51": N51
  "52": N52
  "53": N53
  "54": N54
  "55": N55
  "56": N56
  "57": N57
  "58": N58
  "59": N59
  "6": N6
  "60": N60
  "61": N61
  "62": N62
  "63": N63
  "64": N64
  "65": N65
  "66": N66
  "67": N67
  "68": N68
  "69": N69
  "7": N7
  "70": N70
  "71": N71
  "72": N72
  "74": N74
  "75": N75
  "76": N76
  "77": N77
  "78": N78
  "8": N8
  "81": N81
  "82": N82
  "84": N84
  "85": N85
  "86": N86
  "87": N87
  "88": N88
  "89": N89
  "9": N9
  "90": N90
  "91": N91
  "92": N92
  "93": N93
  "94": N94
  "95": N95
  "96": N96
  "97": N97
  "98": N98
  front_de: FrontDe
  front_en: FrontEn
  front_es: FrontEs
  front_fr: FrontFr
  front_it: FrontIt
  front_nl: FrontNl
  ingredients_de: IngredientsDe
  ingredients_es: IngredientsEs
  ingredients_fr: IngredientsFr
  ingredients_nl: IngredientsNl
  nutrition_es: NutritionEs
  nutrition_fr: NutritionFr
  nutrition_nl: NutritionNl
  packaging_en: PackagingEn
  packaging_fr: PackagingFr
}

export interface N1 {
  sizes: Sizes
  uploaded_t: string
  uploader: string
}

export interface Sizes {
  "100": N100
  "400": N400
  full: Full
}

export interface N100 {
  h: number
  w: number
}

export interface N400 {
  h: number
  w: number
}

export interface Full {
  h: number
  w: number
}

export interface N10 {
  sizes: Sizes2
  uploaded_t: string
  uploader: string
}

export interface Sizes2 {
  "100": N1002
  "400": N4002
  full: Full2
}

export interface N1002 {
  h: number
  w: number
}

export interface N4002 {
  h: number
  w: number
}

export interface Full2 {
  h: number
  w: number
}

export interface N1003 {
  sizes: Sizes3
  uploaded_t: number
  uploader: string
}

export interface Sizes3 {
  "100": N1004
  "400": N4003
  full: Full3
}

export interface N1004 {
  h: number
  w: number
}

export interface N4003 {
  h: number
  w: number
}

export interface Full3 {
  h: number
  w: number
}

export interface N101 {
  sizes: Sizes4
  uploaded_t: number
  uploader: string
}

export interface Sizes4 {
  "100": N1005
  "400": N4004
  full: Full4
}

export interface N1005 {
  h: number
  w: number
}

export interface N4004 {
  h: number
  w: number
}

export interface Full4 {
  h: number
  w: number
}

export interface N102 {
  sizes: Sizes5
  uploaded_t: number
  uploader: string
}

export interface Sizes5 {
  "100": N1006
  "400": N4005
  full: Full5
}

export interface N1006 {
  h: number
  w: number
}

export interface N4005 {
  h: number
  w: number
}

export interface Full5 {
  h: number
  w: number
}

export interface N103 {
  sizes: Sizes6
  uploaded_t: number
  uploader: string
}

export interface Sizes6 {
  "100": N1007
  "400": N4006
  full: Full6
}

export interface N1007 {
  h: number
  w: number
}

export interface N4006 {
  h: number
  w: number
}

export interface Full6 {
  h: number
  w: number
}

export interface N104 {
  sizes: Sizes7
  uploaded_t: number
  uploader: string
}

export interface Sizes7 {
  "100": N1008
  "400": N4007
  full: Full7
}

export interface N1008 {
  h: number
  w: number
}

export interface N4007 {
  h: number
  w: number
}

export interface Full7 {
  h: number
  w: number
}

export interface N11 {
  sizes: Sizes8
  uploaded_t: string
  uploader: string
}

export interface Sizes8 {
  "100": N1009
  "400": N4008
  full: Full8
}

export interface N1009 {
  h: number
  w: number
}

export interface N4008 {
  h: number
  w: number
}

export interface Full8 {
  h: number
  w: number
}

export interface N110 {
  sizes: Sizes9
  uploaded_t: number
  uploader: string
}

export interface Sizes9 {
  "100": N10010
  "400": N4009
  full: Full9
}

export interface N10010 {
  h: number
  w: number
}

export interface N4009 {
  h: number
  w: number
}

export interface Full9 {
  h: number
  w: number
}

export interface N111 {
  sizes: Sizes10
  uploaded_t: number
  uploader: string
}

export interface Sizes10 {
  "100": N10011
  "400": N40010
  full: Full10
}

export interface N10011 {
  h: number
  w: number
}

export interface N40010 {
  h: number
  w: number
}

export interface Full10 {
  h: number
  w: number
}

export interface N113 {
  sizes: Sizes11
  uploaded_t: number
  uploader: string
}

export interface Sizes11 {
  "100": N10012
  "400": N40011
  full: Full11
}

export interface N10012 {
  h: number
  w: number
}

export interface N40011 {
  h: number
  w: number
}

export interface Full11 {
  h: number
  w: number
}

export interface N114 {
  sizes: Sizes12
  uploaded_t: number
  uploader: string
}

export interface Sizes12 {
  "100": N10013
  "400": N40012
  full: Full12
}

export interface N10013 {
  h: number
  w: number
}

export interface N40012 {
  h: number
  w: number
}

export interface Full12 {
  h: number
  w: number
}

export interface N117 {
  sizes: Sizes13
  uploaded_t: string
  uploader: string
}

export interface Sizes13 {
  "100": N10014
  "400": N40013
  full: Full13
}

export interface N10014 {
  h: number
  w: number
}

export interface N40013 {
  h: number
  w: number
}

export interface Full13 {
  h: number
  w: number
}

export interface N119 {
  sizes: Sizes14
  uploaded_t: number
  uploader: string
}

export interface Sizes14 {
  "100": N10015
  "400": N40014
  full: Full14
}

export interface N10015 {
  h: number
  w: number
}

export interface N40014 {
  h: number
  w: number
}

export interface Full14 {
  h: number
  w: number
}

export interface N12 {
  sizes: Sizes15
  uploaded_t: string
  uploader: string
}

export interface Sizes15 {
  "100": N10016
  "400": N40015
  full: Full15
}

export interface N10016 {
  h: number
  w: number
}

export interface N40015 {
  h: number
  w: number
}

export interface Full15 {
  h: number
  w: number
}

export interface N120 {
  sizes: Sizes16
  uploaded_t: number
  uploader: string
}

export interface Sizes16 {
  "100": N10017
  "400": N40016
  full: Full16
}

export interface N10017 {
  h: number
  w: number
}

export interface N40016 {
  h: number
  w: number
}

export interface Full16 {
  h: number
  w: number
}

export interface N121 {
  sizes: Sizes17
  uploaded_t: number
  uploader: string
}

export interface Sizes17 {
  "100": N10018
  "400": N40017
  full: Full17
}

export interface N10018 {
  h: number
  w: number
}

export interface N40017 {
  h: number
  w: number
}

export interface Full17 {
  h: number
  w: number
}

export interface N122 {
  sizes: Sizes18
  uploaded_t: number
  uploader: string
}

export interface Sizes18 {
  "100": N10019
  "400": N40018
  full: Full18
}

export interface N10019 {
  h: number
  w: number
}

export interface N40018 {
  h: number
  w: number
}

export interface Full18 {
  h: number
  w: number
}

export interface N123 {
  sizes: Sizes19
  uploaded_t: number
  uploader: string
}

export interface Sizes19 {
  "100": N10020
  "400": N40019
  full: Full19
}

export interface N10020 {
  h: number
  w: number
}

export interface N40019 {
  h: number
  w: number
}

export interface Full19 {
  h: number
  w: number
}

export interface N124 {
  sizes: Sizes20
  uploaded_t: number
  uploader: string
}

export interface Sizes20 {
  "100": N10021
  "400": N40020
  full: Full20
}

export interface N10021 {
  h: number
  w: number
}

export interface N40020 {
  h: number
  w: number
}

export interface Full20 {
  h: number
  w: number
}

export interface N128 {
  sizes: Sizes21
  uploaded_t: number
  uploader: string
}

export interface Sizes21 {
  "100": N10022
  "400": N40021
  full: Full21
}

export interface N10022 {
  h: number
  w: number
}

export interface N40021 {
  h: number
  w: number
}

export interface Full21 {
  h: number
  w: number
}

export interface N129 {
  sizes: Sizes22
  uploaded_t: number
  uploader: string
}

export interface Sizes22 {
  "100": N10023
  "400": N40022
  full: Full22
}

export interface N10023 {
  h: number
  w: number
}

export interface N40022 {
  h: number
  w: number
}

export interface Full22 {
  h: number
  w: number
}

export interface N13 {
  sizes: Sizes23
  uploaded_t: string
  uploader: string
}

export interface Sizes23 {
  "100": N10024
  "400": N40023
  full: Full23
}

export interface N10024 {
  h: number
  w: number
}

export interface N40023 {
  h: number
  w: number
}

export interface Full23 {
  h: number
  w: number
}

export interface N133 {
  sizes: Sizes24
  uploaded_t: number
  uploader: string
}

export interface Sizes24 {
  "100": N10025
  "400": N40024
  full: Full24
}

export interface N10025 {
  h: number
  w: number
}

export interface N40024 {
  h: number
  w: number
}

export interface Full24 {
  h: number
  w: number
}

export interface N134 {
  sizes: Sizes25
  uploaded_t: number
  uploader: string
}

export interface Sizes25 {
  "100": N10026
  "400": N40025
  full: Full25
}

export interface N10026 {
  h: number
  w: number
}

export interface N40025 {
  h: number
  w: number
}

export interface Full25 {
  h: number
  w: number
}

export interface N135 {
  sizes: Sizes26
  uploaded_t: number
  uploader: string
}

export interface Sizes26 {
  "100": N10027
  "400": N40026
  full: Full26
}

export interface N10027 {
  h: number
  w: number
}

export interface N40026 {
  h: number
  w: number
}

export interface Full26 {
  h: number
  w: number
}

export interface N136 {
  sizes: Sizes27
  uploaded_t: number
  uploader: string
}

export interface Sizes27 {
  "100": N10028
  "400": N40027
  full: Full27
}

export interface N10028 {
  h: number
  w: number
}

export interface N40027 {
  h: number
  w: number
}

export interface Full27 {
  h: number
  w: number
}

export interface N137 {
  sizes: Sizes28
  uploaded_t: number
  uploader: string
}

export interface Sizes28 {
  "100": N10029
  "400": N40028
  full: Full28
}

export interface N10029 {
  h: number
  w: number
}

export interface N40028 {
  h: number
  w: number
}

export interface Full28 {
  h: number
  w: number
}

export interface N138 {
  sizes: Sizes29
  uploaded_t: number
  uploader: string
}

export interface Sizes29 {
  "100": N10030
  "400": N40029
  full: Full29
}

export interface N10030 {
  h: number
  w: number
}

export interface N40029 {
  h: number
  w: number
}

export interface Full29 {
  h: number
  w: number
}

export interface N139 {
  sizes: Sizes30
  uploaded_t: number
  uploader: string
}

export interface Sizes30 {
  "100": N10031
  "400": N40030
  full: Full30
}

export interface N10031 {
  h: number
  w: number
}

export interface N40030 {
  h: number
  w: number
}

export interface Full30 {
  h: number
  w: number
}

export interface N14 {
  sizes: Sizes31
  uploaded_t: string
  uploader: string
}

export interface Sizes31 {
  "100": N10032
  "400": N40031
  full: Full31
}

export interface N10032 {
  h: number
  w: number
}

export interface N40031 {
  h: number
  w: number
}

export interface Full31 {
  h: number
  w: number
}

export interface N140 {
  sizes: Sizes32
  uploaded_t: number
  uploader: string
}

export interface Sizes32 {
  "100": N10033
  "400": N40032
  full: Full32
}

export interface N10033 {
  h: number
  w: number
}

export interface N40032 {
  h: number
  w: number
}

export interface Full32 {
  h: number
  w: number
}

export interface N141 {
  sizes: Sizes33
  uploaded_t: number
  uploader: string
}

export interface Sizes33 {
  "100": N10034
  "400": N40033
  full: Full33
}

export interface N10034 {
  h: number
  w: number
}

export interface N40033 {
  h: number
  w: number
}

export interface Full33 {
  h: number
  w: number
}

export interface N142 {
  sizes: Sizes34
  uploaded_t: number
  uploader: string
}

export interface Sizes34 {
  "100": N10035
  "400": N40034
  full: Full34
}

export interface N10035 {
  h: number
  w: number
}

export interface N40034 {
  h: number
  w: number
}

export interface Full34 {
  h: number
  w: number
}

export interface N143 {
  sizes: Sizes35
  uploaded_t: number
  uploader: string
}

export interface Sizes35 {
  "100": N10036
  "400": N40035
  full: Full35
}

export interface N10036 {
  h: number
  w: number
}

export interface N40035 {
  h: number
  w: number
}

export interface Full35 {
  h: number
  w: number
}

export interface N144 {
  sizes: Sizes36
  uploaded_t: number
  uploader: string
}

export interface Sizes36 {
  "100": N10037
  "400": N40036
  full: Full36
}

export interface N10037 {
  h: number
  w: number
}

export interface N40036 {
  h: number
  w: number
}

export interface Full36 {
  h: number
  w: number
}

export interface N145 {
  sizes: Sizes37
  uploaded_t: number
  uploader: string
}

export interface Sizes37 {
  "100": N10038
  "400": N40037
  full: Full37
}

export interface N10038 {
  h: number
  w: number
}

export interface N40037 {
  h: number
  w: number
}

export interface Full37 {
  h: number
  w: number
}

export interface N146 {
  sizes: Sizes38
  uploaded_t: number
  uploader: string
}

export interface Sizes38 {
  "100": N10039
  "400": N40038
  full: Full38
}

export interface N10039 {
  h: number
  w: number
}

export interface N40038 {
  h: number
  w: number
}

export interface Full38 {
  h: number
  w: number
}

export interface N147 {
  sizes: Sizes39
  uploaded_t: number
  uploader: string
}

export interface Sizes39 {
  "100": N10040
  "400": N40039
  full: Full39
}

export interface N10040 {
  h: number
  w: number
}

export interface N40039 {
  h: number
  w: number
}

export interface Full39 {
  h: number
  w: number
}

export interface N149 {
  sizes: Sizes40
  uploaded_t: number
  uploader: string
}

export interface Sizes40 {
  "100": N10041
  "400": N40040
  full: Full40
}

export interface N10041 {
  h: number
  w: number
}

export interface N40040 {
  h: number
  w: number
}

export interface Full40 {
  h: number
  w: number
}

export interface N15 {
  sizes: Sizes41
  uploaded_t: string
  uploader: string
}

export interface Sizes41 {
  "100": N10042
  "400": N40041
  full: Full41
}

export interface N10042 {
  h: number
  w: number
}

export interface N40041 {
  h: number
  w: number
}

export interface Full41 {
  h: number
  w: number
}

export interface N150 {
  sizes: Sizes42
  uploaded_t: number
  uploader: string
}

export interface Sizes42 {
  "100": N10043
  "400": N40042
  full: Full42
}

export interface N10043 {
  h: number
  w: number
}

export interface N40042 {
  h: number
  w: number
}

export interface Full42 {
  h: number
  w: number
}

export interface N151 {
  sizes: Sizes43
  uploaded_t: number
  uploader: string
}

export interface Sizes43 {
  "100": N10044
  "400": N40043
  full: Full43
}

export interface N10044 {
  h: number
  w: number
}

export interface N40043 {
  h: number
  w: number
}

export interface Full43 {
  h: number
  w: number
}

export interface N153 {
  sizes: Sizes44
  uploaded_t: number
  uploader: string
}

export interface Sizes44 {
  "100": N10045
  "400": N40044
  full: Full44
}

export interface N10045 {
  h: number
  w: number
}

export interface N40044 {
  h: number
  w: number
}

export interface Full44 {
  h: number
  w: number
}

export interface N154 {
  sizes: Sizes45
  uploaded_t: number
  uploader: string
}

export interface Sizes45 {
  "100": N10046
  "400": N40045
  full: Full45
}

export interface N10046 {
  h: number
  w: number
}

export interface N40045 {
  h: number
  w: number
}

export interface Full45 {
  h: number
  w: number
}

export interface N155 {
  sizes: Sizes46
  uploaded_t: number
  uploader: string
}

export interface Sizes46 {
  "100": N10047
  "400": N40046
  full: Full46
}

export interface N10047 {
  h: number
  w: number
}

export interface N40046 {
  h: number
  w: number
}

export interface Full46 {
  h: number
  w: number
}

export interface N156 {
  sizes: Sizes47
  uploaded_t: number
  uploader: string
}

export interface Sizes47 {
  "100": N10048
  "400": N40047
  full: Full47
}

export interface N10048 {
  h: number
  w: number
}

export interface N40047 {
  h: number
  w: number
}

export interface Full47 {
  h: number
  w: number
}

export interface N157 {
  sizes: Sizes48
  uploaded_t: number
  uploader: string
}

export interface Sizes48 {
  "100": N10049
  "400": N40048
  full: Full48
}

export interface N10049 {
  h: number
  w: number
}

export interface N40048 {
  h: number
  w: number
}

export interface Full48 {
  h: number
  w: number
}

export interface N16 {
  sizes: Sizes49
  uploaded_t: string
  uploader: string
}

export interface Sizes49 {
  "100": N10050
  "400": N40049
  full: Full49
}

export interface N10050 {
  h: number
  w: number
}

export interface N40049 {
  h: number
  w: number
}

export interface Full49 {
  h: number
  w: number
}

export interface N160 {
  sizes: Sizes50
  uploaded_t: number
  uploader: string
}

export interface Sizes50 {
  "100": N10051
  "400": N40050
  full: Full50
}

export interface N10051 {
  h: number
  w: number
}

export interface N40050 {
  h: number
  w: number
}

export interface Full50 {
  h: number
  w: number
}

export interface N161 {
  sizes: Sizes51
  uploaded_t: number
  uploader: string
}

export interface Sizes51 {
  "100": N10052
  "400": N40051
  full: Full51
}

export interface N10052 {
  h: number
  w: number
}

export interface N40051 {
  h: number
  w: number
}

export interface Full51 {
  h: number
  w: number
}

export interface N162 {
  sizes: Sizes52
  uploaded_t: number
  uploader: string
}

export interface Sizes52 {
  "100": N10053
  "400": N40052
  full: Full52
}

export interface N10053 {
  h: number
  w: number
}

export interface N40052 {
  h: number
  w: number
}

export interface Full52 {
  h: number
  w: number
}

export interface N163 {
  sizes: Sizes53
  uploaded_t: number
  uploader: string
}

export interface Sizes53 {
  "100": N10054
  "400": N40053
  full: Full53
}

export interface N10054 {
  h: number
  w: number
}

export interface N40053 {
  h: number
  w: number
}

export interface Full53 {
  h: number
  w: number
}

export interface N164 {
  sizes: Sizes54
  uploaded_t: number
  uploader: string
}

export interface Sizes54 {
  "100": N10055
  "400": N40054
  full: Full54
}

export interface N10055 {
  h: number
  w: number
}

export interface N40054 {
  h: number
  w: number
}

export interface Full54 {
  h: number
  w: number
}

export interface N165 {
  sizes: Sizes55
  uploaded_t: number
  uploader: string
}

export interface Sizes55 {
  "100": N10056
  "400": N40055
  full: Full55
}

export interface N10056 {
  h: number
  w: number
}

export interface N40055 {
  h: number
  w: number
}

export interface Full55 {
  h: number
  w: number
}

export interface N166 {
  sizes: Sizes56
  uploaded_t: number
  uploader: string
}

export interface Sizes56 {
  "100": N10057
  "400": N40056
  full: Full56
}

export interface N10057 {
  h: number
  w: number
}

export interface N40056 {
  h: number
  w: number
}

export interface Full56 {
  h: number
  w: number
}

export interface N169 {
  sizes: Sizes57
  uploaded_t: number
  uploader: string
}

export interface Sizes57 {
  "100": N10058
  "400": N40057
  full: Full57
}

export interface N10058 {
  h: number
  w: number
}

export interface N40057 {
  h: number
  w: number
}

export interface Full57 {
  h: number
  w: number
}

export interface N17 {
  sizes: Sizes58
  uploaded_t: string
  uploader: string
}

export interface Sizes58 {
  "100": N10059
  "400": N40058
  full: Full58
}

export interface N10059 {
  h: number
  w: number
}

export interface N40058 {
  h: number
  w: number
}

export interface Full58 {
  h: number
  w: number
}

export interface N170 {
  sizes: Sizes59
  uploaded_t: number
  uploader: string
}

export interface Sizes59 {
  "100": N10060
  "400": N40059
  full: Full59
}

export interface N10060 {
  h: number
  w: number
}

export interface N40059 {
  h: number
  w: number
}

export interface Full59 {
  h: number
  w: number
}

export interface N175 {
  sizes: Sizes60
  uploaded_t: number
  uploader: string
}

export interface Sizes60 {
  "100": N10061
  "400": N40060
  full: Full60
}

export interface N10061 {
  h: number
  w: number
}

export interface N40060 {
  h: number
  w: number
}

export interface Full60 {
  h: number
  w: number
}

export interface N176 {
  sizes: Sizes61
  uploaded_t: number
  uploader: string
}

export interface Sizes61 {
  "100": N10062
  "400": N40061
  full: Full61
}

export interface N10062 {
  h: number
  w: number
}

export interface N40061 {
  h: number
  w: number
}

export interface Full61 {
  h: number
  w: number
}

export interface N18 {
  sizes: Sizes62
  uploaded_t: string
  uploader: string
}

export interface Sizes62 {
  "100": N10063
  "400": N40062
  full: Full62
}

export interface N10063 {
  h: number
  w: number
}

export interface N40062 {
  h: number
  w: number
}

export interface Full62 {
  h: number
  w: number
}

export interface N19 {
  sizes: Sizes63
  uploaded_t: string
  uploader: string
}

export interface Sizes63 {
  "100": N10064
  "400": N40063
  full: Full63
}

export interface N10064 {
  h: number
  w: number
}

export interface N40063 {
  h: number
  w: number
}

export interface Full63 {
  h: number
  w: number
}

export interface N2 {
  sizes: Sizes64
  uploaded_t: string
  uploader: string
}

export interface Sizes64 {
  "100": N10065
  "400": N40064
  full: Full64
}

export interface N10065 {
  h: number
  w: number
}

export interface N40064 {
  h: number
  w: number
}

export interface Full64 {
  h: number
  w: number
}

export interface N20 {
  sizes: Sizes65
  uploaded_t: string
  uploader: string
}

export interface Sizes65 {
  "100": N10066
  "400": N40065
  full: Full65
}

export interface N10066 {
  h: number
  w: number
}

export interface N40065 {
  h: number
  w: number
}

export interface Full65 {
  h: number
  w: number
}

export interface N21 {
  sizes: Sizes66
  uploaded_t: string
  uploader: string
}

export interface Sizes66 {
  "100": N10067
  "400": N40066
  full: Full66
}

export interface N10067 {
  h: number
  w: number
}

export interface N40066 {
  h: number
  w: number
}

export interface Full66 {
  h: number
  w: number
}

export interface N22 {
  sizes: Sizes67
  uploaded_t: string
  uploader: string
}

export interface Sizes67 {
  "100": N10068
  "400": N40067
  full: Full67
}

export interface N10068 {
  h: number
  w: number
}

export interface N40067 {
  h: number
  w: number
}

export interface Full67 {
  h: number
  w: number
}

export interface N23 {
  sizes: Sizes68
  uploaded_t: string
  uploader: string
}

export interface Sizes68 {
  "100": N10069
  "400": N40068
  full: Full68
}

export interface N10069 {
  h: number
  w: number
}

export interface N40068 {
  h: number
  w: number
}

export interface Full68 {
  h: number
  w: number
}

export interface N24 {
  sizes: Sizes69
  uploaded_t: string
  uploader: string
}

export interface Sizes69 {
  "100": N10070
  "400": N40069
  full: Full69
}

export interface N10070 {
  h: number
  w: number
}

export interface N40069 {
  h: number
  w: number
}

export interface Full69 {
  h: number
  w: number
}

export interface N25 {
  sizes: Sizes70
  uploaded_t: string
  uploader: string
}

export interface Sizes70 {
  "100": N10071
  "400": N40070
  full: Full70
}

export interface N10071 {
  h: number
  w: number
}

export interface N40070 {
  h: number
  w: number
}

export interface Full70 {
  h: number
  w: number
}

export interface N26 {
  sizes: Sizes71
  uploaded_t: string
  uploader: string
}

export interface Sizes71 {
  "100": N10072
  "400": N40071
  full: Full71
}

export interface N10072 {
  h: number
  w: number
}

export interface N40071 {
  h: number
  w: number
}

export interface Full71 {
  h: number
  w: number
}

export interface N27 {
  sizes: Sizes72
  uploaded_t: string
  uploader: string
}

export interface Sizes72 {
  "100": N10073
  "400": N40072
  full: Full72
}

export interface N10073 {
  h: number
  w: number
}

export interface N40072 {
  h: number
  w: number
}

export interface Full72 {
  h: number
  w: number
}

export interface N28 {
  sizes: Sizes73
  uploaded_t: string
  uploader: string
}

export interface Sizes73 {
  "100": N10074
  "400": N40073
  full: Full73
}

export interface N10074 {
  h: number
  w: number
}

export interface N40073 {
  h: number
  w: number
}

export interface Full73 {
  h: number
  w: number
}

export interface N29 {
  sizes: Sizes74
  uploaded_t: string
  uploader: string
}

export interface Sizes74 {
  "100": N10075
  "400": N40074
  full: Full74
}

export interface N10075 {
  h: number
  w: number
}

export interface N40074 {
  h: number
  w: number
}

export interface Full74 {
  h: number
  w: number
}

export interface N3 {
  sizes: Sizes75
  uploaded_t: string
  uploader: string
}

export interface Sizes75 {
  "100": N10076
  "400": N40075
  full: Full75
}

export interface N10076 {
  h: number
  w: number
}

export interface N40075 {
  h: number
  w: number
}

export interface Full75 {
  h: number
  w: number
}

export interface N30 {
  sizes: Sizes76
  uploaded_t: string
  uploader: string
}

export interface Sizes76 {
  "100": N10077
  "400": N40076
  full: Full76
}

export interface N10077 {
  h: number
  w: number
}

export interface N40076 {
  h: number
  w: number
}

export interface Full76 {
  h: number
  w: number
}

export interface N31 {
  sizes: Sizes77
  uploaded_t: string
  uploader: string
}

export interface Sizes77 {
  "100": N10078
  "400": N40077
  full: Full77
}

export interface N10078 {
  h: number
  w: number
}

export interface N40077 {
  h: number
  w: number
}

export interface Full77 {
  h: number
  w: number
}

export interface N32 {
  sizes: Sizes78
  uploaded_t: number
  uploader: string
}

export interface Sizes78 {
  "100": N10079
  "400": N40078
  full: Full78
}

export interface N10079 {
  h: number
  w: number
}

export interface N40078 {
  h: number
  w: number
}

export interface Full78 {
  h: number
  w: number
}

export interface N33 {
  sizes: Sizes79
  uploaded_t: number
  uploader: string
}

export interface Sizes79 {
  "100": N10080
  "400": N40079
  full: Full79
}

export interface N10080 {
  h: number
  w: number
}

export interface N40079 {
  h: number
  w: number
}

export interface Full79 {
  h: number
  w: number
}

export interface N34 {
  sizes: Sizes80
  uploaded_t: number
  uploader: string
}

export interface Sizes80 {
  "100": N10081
  "400": N40080
  full: Full80
}

export interface N10081 {
  h: number
  w: number
}

export interface N40080 {
  h: number
  w: number
}

export interface Full80 {
  h: number
  w: number
}

export interface N35 {
  sizes: Sizes81
  uploaded_t: number
  uploader: string
}

export interface Sizes81 {
  "100": N10082
  "400": N40081
  full: Full81
}

export interface N10082 {
  h: number
  w: number
}

export interface N40081 {
  h: number
  w: number
}

export interface Full81 {
  h: number
  w: number
}

export interface N4 {
  sizes: Sizes82
  uploaded_t: string
  uploader: string
}

export interface Sizes82 {
  "100": N10083
  "400": N40082
  full: Full82
}

export interface N10083 {
  h: number
  w: number
}

export interface N40082 {
  h: number
  w: number
}

export interface Full82 {
  h: number
  w: number
}

export interface N40 {
  sizes: Sizes83
  uploaded_t: number
  uploader: string
}

export interface Sizes83 {
  "100": N10084
  "400": N40083
  full: Full83
}

export interface N10084 {
  h: number
  w: number
}

export interface N40083 {
  h: number
  w: number
}

export interface Full83 {
  h: number
  w: number
}

export interface N41 {
  sizes: Sizes84
  uploaded_t: number
  uploader: string
}

export interface Sizes84 {
  "100": N10085
  "400": N40084
  full: Full84
}

export interface N10085 {
  h: number
  w: number
}

export interface N40084 {
  h: number
  w: number
}

export interface Full84 {
  h: number
  w: number
}

export interface N42 {
  sizes: Sizes85
  uploaded_t: number
  uploader: string
}

export interface Sizes85 {
  "100": N10086
  "400": N40085
  full: Full85
}

export interface N10086 {
  h: number
  w: number
}

export interface N40085 {
  h: number
  w: number
}

export interface Full85 {
  h: number
  w: number
}

export interface N47 {
  sizes: Sizes86
  uploaded_t: number
  uploader: string
}

export interface Sizes86 {
  "100": N10087
  "400": N40086
  full: Full86
}

export interface N10087 {
  h: number
  w: number
}

export interface N40086 {
  h: number
  w: number
}

export interface Full86 {
  h: number
  w: number
}

export interface N48 {
  sizes: Sizes87
  uploaded_t: number
  uploader: string
}

export interface Sizes87 {
  "100": N10088
  "400": N40087
  full: Full87
}

export interface N10088 {
  h: number
  w: number
}

export interface N40087 {
  h: number
  w: number
}

export interface Full87 {
  h: number
  w: number
}

export interface N49 {
  sizes: Sizes88
  uploaded_t: number
  uploader: string
}

export interface Sizes88 {
  "100": N10089
  "400": N40088
  full: Full88
}

export interface N10089 {
  h: number
  w: number
}

export interface N40088 {
  h: number
  w: number
}

export interface Full88 {
  h: number
  w: number
}

export interface N5 {
  sizes: Sizes89
  uploaded_t: string
  uploader: string
}

export interface Sizes89 {
  "100": N10090
  "400": N40089
  full: Full89
}

export interface N10090 {
  h: number
  w: number
}

export interface N40089 {
  h: number
  w: number
}

export interface Full89 {
  h: number
  w: number
}

export interface N50 {
  sizes: Sizes90
  uploaded_t: number
  uploader: string
}

export interface Sizes90 {
  "100": N10091
  "400": N40090
  full: Full90
}

export interface N10091 {
  h: number
  w: number
}

export interface N40090 {
  h: number
  w: number
}

export interface Full90 {
  h: number
  w: number
}

export interface N51 {
  sizes: Sizes91
  uploaded_t: number
  uploader: string
}

export interface Sizes91 {
  "100": N10092
  "400": N40091
  full: Full91
}

export interface N10092 {
  h: number
  w: number
}

export interface N40091 {
  h: number
  w: number
}

export interface Full91 {
  h: number
  w: number
}

export interface N52 {
  sizes: Sizes92
  uploaded_t: number
  uploader: string
}

export interface Sizes92 {
  "100": N10093
  "400": N40092
  full: Full92
}

export interface N10093 {
  h: number
  w: number
}

export interface N40092 {
  h: number
  w: number
}

export interface Full92 {
  h: number
  w: number
}

export interface N53 {
  sizes: Sizes93
  uploaded_t: number
  uploader: string
}

export interface Sizes93 {
  "100": N10094
  "400": N40093
  full: Full93
}

export interface N10094 {
  h: number
  w: number
}

export interface N40093 {
  h: number
  w: number
}

export interface Full93 {
  h: number
  w: number
}

export interface N54 {
  sizes: Sizes94
  uploaded_t: number
  uploader: string
}

export interface Sizes94 {
  "100": N10095
  "400": N40094
  full: Full94
}

export interface N10095 {
  h: number
  w: number
}

export interface N40094 {
  h: number
  w: number
}

export interface Full94 {
  h: number
  w: number
}

export interface N55 {
  sizes: Sizes95
  uploaded_t: number
  uploader: string
}

export interface Sizes95 {
  "100": N10096
  "400": N40095
  full: Full95
}

export interface N10096 {
  h: number
  w: number
}

export interface N40095 {
  h: number
  w: number
}

export interface Full95 {
  h: number
  w: number
}

export interface N56 {
  sizes: Sizes96
  uploaded_t: number
  uploader: string
}

export interface Sizes96 {
  "100": N10097
  "400": N40096
  full: Full96
}

export interface N10097 {
  h: number
  w: number
}

export interface N40096 {
  h: number
  w: number
}

export interface Full96 {
  h: number
  w: number
}

export interface N57 {
  sizes: Sizes97
  uploaded_t: number
  uploader: string
}

export interface Sizes97 {
  "100": N10098
  "400": N40097
  full: Full97
}

export interface N10098 {
  h: number
  w: number
}

export interface N40097 {
  h: number
  w: number
}

export interface Full97 {
  h: number
  w: number
}

export interface N58 {
  sizes: Sizes98
  uploaded_t: number
  uploader: string
}

export interface Sizes98 {
  "100": N10099
  "400": N40098
  full: Full98
}

export interface N10099 {
  h: number
  w: number
}

export interface N40098 {
  h: number
  w: number
}

export interface Full98 {
  h: number
  w: number
}

export interface N59 {
  sizes: Sizes99
  uploaded_t: number
  uploader: string
}

export interface Sizes99 {
  "100": N100100
  "400": N40099
  full: Full99
}

export interface N100100 {
  h: number
  w: number
}

export interface N40099 {
  h: number
  w: number
}

export interface Full99 {
  h: number
  w: number
}

export interface N6 {
  sizes: Sizes100
  uploaded_t: string
  uploader: string
}

export interface Sizes100 {
  "100": N100101
  "400": N400100
  full: Full100
}

export interface N100101 {
  h: number
  w: number
}

export interface N400100 {
  h: number
  w: number
}

export interface Full100 {
  h: number
  w: number
}

export interface N60 {
  sizes: Sizes101
  uploaded_t: number
  uploader: string
}

export interface Sizes101 {
  "100": N100102
  "400": N400101
  full: Full101
}

export interface N100102 {
  h: number
  w: number
}

export interface N400101 {
  h: number
  w: number
}

export interface Full101 {
  h: number
  w: number
}

export interface N61 {
  sizes: Sizes102
  uploaded_t: number
  uploader: string
}

export interface Sizes102 {
  "100": N100103
  "400": N400102
  full: Full102
}

export interface N100103 {
  h: number
  w: number
}

export interface N400102 {
  h: number
  w: number
}

export interface Full102 {
  h: number
  w: number
}

export interface N62 {
  sizes: Sizes103
  uploaded_t: number
  uploader: string
}

export interface Sizes103 {
  "100": N100104
  "400": N400103
  full: Full103
}

export interface N100104 {
  h: number
  w: number
}

export interface N400103 {
  h: number
  w: number
}

export interface Full103 {
  h: number
  w: number
}

export interface N63 {
  sizes: Sizes104
  uploaded_t: number
  uploader: string
}

export interface Sizes104 {
  "100": N100105
  "400": N400104
  full: Full104
}

export interface N100105 {
  h: number
  w: number
}

export interface N400104 {
  h: number
  w: number
}

export interface Full104 {
  h: number
  w: number
}

export interface N64 {
  sizes: Sizes105
  uploaded_t: number
  uploader: string
}

export interface Sizes105 {
  "100": N100106
  "400": N400105
  full: Full105
}

export interface N100106 {
  h: number
  w: number
}

export interface N400105 {
  h: number
  w: number
}

export interface Full105 {
  h: number
  w: number
}

export interface N65 {
  sizes: Sizes106
  uploaded_t: number
  uploader: string
}

export interface Sizes106 {
  "100": N100107
  "400": N400106
  full: Full106
}

export interface N100107 {
  h: number
  w: number
}

export interface N400106 {
  h: number
  w: number
}

export interface Full106 {
  h: number
  w: number
}

export interface N66 {
  sizes: Sizes107
  uploaded_t: number
  uploader: string
}

export interface Sizes107 {
  "100": N100108
  "400": N400107
  full: Full107
}

export interface N100108 {
  h: number
  w: number
}

export interface N400107 {
  h: number
  w: number
}

export interface Full107 {
  h: number
  w: number
}

export interface N67 {
  sizes: Sizes108
  uploaded_t: number
  uploader: string
}

export interface Sizes108 {
  "100": N100109
  "400": N400108
  full: Full108
}

export interface N100109 {
  h: number
  w: number
}

export interface N400108 {
  h: number
  w: number
}

export interface Full108 {
  h: number
  w: number
}

export interface N68 {
  sizes: Sizes109
  uploaded_t: number
  uploader: string
}

export interface Sizes109 {
  "100": N100110
  "400": N400109
  full: Full109
}

export interface N100110 {
  h: number
  w: number
}

export interface N400109 {
  h: number
  w: number
}

export interface Full109 {
  h: number
  w: number
}

export interface N69 {
  sizes: Sizes110
  uploaded_t: number
  uploader: string
}

export interface Sizes110 {
  "100": N100111
  "400": N400110
  full: Full110
}

export interface N100111 {
  h: number
  w: number
}

export interface N400110 {
  h: number
  w: number
}

export interface Full110 {
  h: number
  w: number
}

export interface N7 {
  sizes: Sizes111
  uploaded_t: string
  uploader: string
}

export interface Sizes111 {
  "100": N100112
  "400": N400111
  full: Full111
}

export interface N100112 {
  h: number
  w: number
}

export interface N400111 {
  h: number
  w: number
}

export interface Full111 {
  h: number
  w: number
}

export interface N70 {
  sizes: Sizes112
  uploaded_t: number
  uploader: string
}

export interface Sizes112 {
  "100": N100113
  "400": N400112
  full: Full112
}

export interface N100113 {
  h: number
  w: number
}

export interface N400112 {
  h: number
  w: number
}

export interface Full112 {
  h: number
  w: number
}

export interface N71 {
  sizes: Sizes113
  uploaded_t: number
  uploader: string
}

export interface Sizes113 {
  "100": N100114
  "400": N400113
  full: Full113
}

export interface N100114 {
  h: number
  w: number
}

export interface N400113 {
  h: number
  w: number
}

export interface Full113 {
  h: number
  w: number
}

export interface N72 {
  sizes: Sizes114
  uploaded_t: number
  uploader: string
}

export interface Sizes114 {
  "100": N100115
  "400": N400114
  full: Full114
}

export interface N100115 {
  h: number
  w: number
}

export interface N400114 {
  h: number
  w: number
}

export interface Full114 {
  h: number
  w: number
}

export interface N74 {
  sizes: Sizes115
  uploaded_t: string
  uploader: string
}

export interface Sizes115 {
  "100": N100116
  "400": N400115
  full: Full115
}

export interface N100116 {
  h: number
  w: number
}

export interface N400115 {
  h: number
  w: number
}

export interface Full115 {
  h: number
  w: number
}

export interface N75 {
  sizes: Sizes116
  uploaded_t: string
  uploader: string
}

export interface Sizes116 {
  "100": N100117
  "400": N400116
  full: Full116
}

export interface N100117 {
  h: number
  w: number
}

export interface N400116 {
  h: number
  w: number
}

export interface Full116 {
  h: number
  w: number
}

export interface N76 {
  sizes: Sizes117
  uploaded_t: number
  uploader: string
}

export interface Sizes117 {
  "100": N100118
  "400": N400117
  full: Full117
}

export interface N100118 {
  h: number
  w: number
}

export interface N400117 {
  h: number
  w: number
}

export interface Full117 {
  h: number
  w: number
}

export interface N77 {
  sizes: Sizes118
  uploaded_t: number
  uploader: string
}

export interface Sizes118 {
  "100": N100119
  "400": N400118
  full: Full118
}

export interface N100119 {
  h: number
  w: number
}

export interface N400118 {
  h: number
  w: number
}

export interface Full118 {
  h: number
  w: number
}

export interface N78 {
  sizes: Sizes119
  uploaded_t: number
  uploader: string
}

export interface Sizes119 {
  "100": N100120
  "400": N400119
  full: Full119
}

export interface N100120 {
  h: number
  w: number
}

export interface N400119 {
  h: number
  w: number
}

export interface Full119 {
  h: number
  w: number
}

export interface N8 {
  sizes: Sizes120
  uploaded_t: string
  uploader: string
}

export interface Sizes120 {
  "100": N100121
  "400": N400120
  full: Full120
}

export interface N100121 {
  h: number
  w: number
}

export interface N400120 {
  h: number
  w: number
}

export interface Full120 {
  h: number
  w: number
}

export interface N81 {
  sizes: Sizes121
  uploaded_t: number
  uploader: string
}

export interface Sizes121 {
  "100": N100122
  "400": N400121
  full: Full121
}

export interface N100122 {
  h: number
  w: number
}

export interface N400121 {
  h: number
  w: number
}

export interface Full121 {
  h: number
  w: number
}

export interface N82 {
  sizes: Sizes122
  uploaded_t: number
  uploader: string
}

export interface Sizes122 {
  "100": N100123
  "400": N400122
  full: Full122
}

export interface N100123 {
  h: number
  w: number
}

export interface N400122 {
  h: number
  w: number
}

export interface Full122 {
  h: number
  w: number
}

export interface N84 {
  sizes: Sizes123
  uploaded_t: number
  uploader: string
}

export interface Sizes123 {
  "100": N100124
  "400": N400123
  full: Full123
}

export interface N100124 {
  h: number
  w: number
}

export interface N400123 {
  h: number
  w: number
}

export interface Full123 {
  h: number
  w: number
}

export interface N85 {
  sizes: Sizes124
  uploaded_t: number
  uploader: string
}

export interface Sizes124 {
  "100": N100125
  "400": N400124
  full: Full124
}

export interface N100125 {
  h: number
  w: number
}

export interface N400124 {
  h: number
  w: number
}

export interface Full124 {
  h: number
  w: number
}

export interface N86 {
  sizes: Sizes125
  uploaded_t: number
  uploader: string
}

export interface Sizes125 {
  "100": N100126
  "400": N400125
  full: Full125
}

export interface N100126 {
  h: number
  w: number
}

export interface N400125 {
  h: number
  w: number
}

export interface Full125 {
  h: number
  w: number
}

export interface N87 {
  sizes: Sizes126
  uploaded_t: number
  uploader: string
}

export interface Sizes126 {
  "100": N100127
  "400": N400126
  full: Full126
}

export interface N100127 {
  h: number
  w: number
}

export interface N400126 {
  h: number
  w: number
}

export interface Full126 {
  h: number
  w: number
}

export interface N88 {
  sizes: Sizes127
  uploaded_t: number
  uploader: string
}

export interface Sizes127 {
  "100": N100128
  "400": N400127
  full: Full127
}

export interface N100128 {
  h: number
  w: number
}

export interface N400127 {
  h: number
  w: number
}

export interface Full127 {
  h: number
  w: number
}

export interface N89 {
  sizes: Sizes128
  uploaded_t: number
  uploader: string
}

export interface Sizes128 {
  "100": N100129
  "400": N400128
  full: Full128
}

export interface N100129 {
  h: number
  w: number
}

export interface N400128 {
  h: number
  w: number
}

export interface Full128 {
  h: number
  w: number
}

export interface N9 {
  sizes: Sizes129
  uploaded_t: string
  uploader: string
}

export interface Sizes129 {
  "100": N100130
  "400": N400129
  full: Full129
}

export interface N100130 {
  h: number
  w: number
}

export interface N400129 {
  h: number
  w: number
}

export interface Full129 {
  h: number
  w: number
}

export interface N90 {
  sizes: Sizes130
  uploaded_t: number
  uploader: string
}

export interface Sizes130 {
  "100": N100131
  "400": N400130
  full: Full130
}

export interface N100131 {
  h: number
  w: number
}

export interface N400130 {
  h: number
  w: number
}

export interface Full130 {
  h: number
  w: number
}

export interface N91 {
  sizes: Sizes131
  uploaded_t: number
  uploader: string
}

export interface Sizes131 {
  "100": N100132
  "400": N400131
  full: Full131
}

export interface N100132 {
  h: number
  w: number
}

export interface N400131 {
  h: number
  w: number
}

export interface Full131 {
  h: number
  w: number
}

export interface N92 {
  sizes: Sizes132
  uploaded_t: number
  uploader: string
}

export interface Sizes132 {
  "100": N100133
  "400": N400132
  full: Full132
}

export interface N100133 {
  h: number
  w: number
}

export interface N400132 {
  h: number
  w: number
}

export interface Full132 {
  h: number
  w: number
}

export interface N93 {
  sizes: Sizes133
  uploaded_t: number
  uploader: string
}

export interface Sizes133 {
  "100": N100134
  "400": N400133
  full: Full133
}

export interface N100134 {
  h: number
  w: number
}

export interface N400133 {
  h: number
  w: number
}

export interface Full133 {
  h: number
  w: number
}

export interface N94 {
  sizes: Sizes134
  uploaded_t: number
  uploader: string
}

export interface Sizes134 {
  "100": N100135
  "400": N400134
  full: Full134
}

export interface N100135 {
  h: number
  w: number
}

export interface N400134 {
  h: number
  w: number
}

export interface Full134 {
  h: number
  w: number
}

export interface N95 {
  sizes: Sizes135
  uploaded_t: number
  uploader: string
}

export interface Sizes135 {
  "100": N100136
  "400": N400135
  full: Full135
}

export interface N100136 {
  h: number
  w: number
}

export interface N400135 {
  h: number
  w: number
}

export interface Full135 {
  h: number
  w: number
}

export interface N96 {
  sizes: Sizes136
  uploaded_t: number
  uploader: string
}

export interface Sizes136 {
  "100": N100137
  "400": N400136
  full: Full136
}

export interface N100137 {
  h: number
  w: number
}

export interface N400136 {
  h: number
  w: number
}

export interface Full136 {
  h: number
  w: number
}

export interface N97 {
  sizes: Sizes137
  uploaded_t: number
  uploader: string
}

export interface Sizes137 {
  "100": N100138
  "400": N400137
  full: Full137
}

export interface N100138 {
  h: number
  w: number
}

export interface N400137 {
  h: number
  w: number
}

export interface Full137 {
  h: number
  w: number
}

export interface N98 {
  sizes: Sizes138
  uploaded_t: number
  uploader: string
}

export interface Sizes138 {
  "100": N100139
  "400": N400138
  full: Full138
}

export interface N100139 {
  h: number
  w: number
}

export interface N400138 {
  h: number
  w: number
}

export interface Full138 {
  h: number
  w: number
}

export interface FrontDe {
  imgid: string
  rev: string
  sizes: Sizes139
}

export interface Sizes139 {
  "100": N100140
  "200": N200
  "400": N400139
  full: Full139
}

export interface N100140 {
  h: number
  w: number
}

export interface N200 {
  h: number
  w: number
}

export interface N400139 {
  h: number
  w: number
}

export interface Full139 {
  h: number
  w: number
}

export interface FrontEn {
  imgid: string
  rev: string
  sizes: Sizes140
}

export interface Sizes140 {
  "100": N100141
  "200": N2002
  "400": N400140
  full: Full140
}

export interface N100141 {
  h: number
  w: number
}

export interface N2002 {
  h: number
  w: number
}

export interface N400140 {
  h: number
  w: number
}

export interface Full140 {
  h: number
  w: number
}

export interface FrontEs {
  imgid: string
  rev: string
  sizes: Sizes141
}

export interface Sizes141 {
  "100": N100142
  "200": N2003
  "400": N400141
  full: Full141
}

export interface N100142 {
  h: number
  w: number
}

export interface N2003 {
  h: number
  w: number
}

export interface N400141 {
  h: number
  w: number
}

export interface Full141 {
  h: number
  w: number
}

export interface FrontFr {
  imgid: number
  rev: number
  sizes: Sizes142
}

export interface Sizes142 {
  "100": N100143
  "200": N2004
  "400": N400142
  full: Full142
}

export interface N100143 {
  h: number
  w: number
}

export interface N2004 {
  h: number
  w: number
}

export interface N400142 {
  h: number
  w: number
}

export interface Full142 {
  h: number
  w: number
}

export interface FrontIt {
  coordinates_image_size: string
  imgid: string
  rev: string
  sizes: Sizes143
  x1: number
  x2: number
  y1: number
  y2: number
}

export interface Sizes143 {
  "100": N100144
  "200": N2005
  "400": N400143
  full: Full143
}

export interface N100144 {
  h: number
  w: number
}

export interface N2005 {
  h: number
  w: number
}

export interface N400143 {
  h: number
  w: number
}

export interface Full143 {
  h: number
  w: number
}

export interface FrontNl {
  coordinates_image_size: string
  imgid: string
  rev: string
  sizes: Sizes144
  x1: number
  x2: number
  y1: number
  y2: number
}

export interface Sizes144 {
  "100": N100145
  "200": N2006
  "400": N400144
  full: Full144
}

export interface N100145 {
  h: number
  w: number
}

export interface N2006 {
  h: number
  w: number
}

export interface N400144 {
  h: number
  w: number
}

export interface Full144 {
  h: number
  w: number
}

export interface IngredientsDe {
  imgid: string
  rev: string
  sizes: Sizes145
}

export interface Sizes145 {
  "100": N100146
  "200": N2007
  "400": N400145
  full: Full145
}

export interface N100146 {
  h: number
  w: number
}

export interface N2007 {
  h: number
  w: number
}

export interface N400145 {
  h: number
  w: number
}

export interface Full145 {
  h: number
  w: number
}

export interface IngredientsEs {
  imgid: string
  rev: string
  sizes: Sizes146
}

export interface Sizes146 {
  "100": N100147
  "200": N2008
  "400": N400146
  full: Full146
}

export interface N100147 {
  h: number
  w: number
}

export interface N2008 {
  h: number
  w: number
}

export interface N400146 {
  h: number
  w: number
}

export interface Full146 {
  h: number
  w: number
}

export interface IngredientsFr {
  imgid: string
  rev: string
  sizes: Sizes147
}

export interface Sizes147 {
  "100": N100148
  "200": N2009
  "400": N400147
  full: Full147
}

export interface N100148 {
  h: number
  w: number
}

export interface N2009 {
  h: number
  w: number
}

export interface N400147 {
  h: number
  w: number
}

export interface Full147 {
  h: number
  w: number
}

export interface IngredientsNl {
  coordinates_image_size: string
  imgid: string
  rev: string
  sizes: Sizes148
  x1: number
  x2: number
  y1: number
  y2: number
}

export interface Sizes148 {
  "100": N100149
  "200": N20010
  "400": N400148
  full: Full148
}

export interface N100149 {
  h: number
  w: number
}

export interface N20010 {
  h: number
  w: number
}

export interface N400148 {
  h: number
  w: number
}

export interface Full148 {
  h: number
  w: number
}

export interface NutritionEs {
  imgid: string
  rev: string
  sizes: Sizes149
}

export interface Sizes149 {
  "100": N100150
  "200": N20011
  "400": N400149
  full: Full149
}

export interface N100150 {
  h: number
  w: number
}

export interface N20011 {
  h: number
  w: number
}

export interface N400149 {
  h: number
  w: number
}

export interface Full149 {
  h: number
  w: number
}

export interface NutritionFr {
  imgid: number
  rev: number
  sizes: Sizes150
}

export interface Sizes150 {
  "100": N100151
  "200": N20012
  "400": N400150
  full: Full150
}

export interface N100151 {
  h: number
  w: number
}

export interface N20012 {
  h: number
  w: number
}

export interface N400150 {
  h: number
  w: number
}

export interface Full150 {
  h: number
  w: number
}

export interface NutritionNl {
  coordinates_image_size: string
  imgid: string
  rev: string
  sizes: Sizes151
  x1: number
  x2: number
  y1: number
  y2: number
}

export interface Sizes151 {
  "100": N100152
  "200": N20013
  "400": N400151
  full: Full151
}

export interface N100152 {
  h: number
  w: number
}

export interface N20013 {
  h: number
  w: number
}

export interface N400151 {
  h: number
  w: number
}

export interface Full151 {
  h: number
  w: number
}

export interface PackagingEn {
  imgid: string
  rev: string
  sizes: Sizes152
}

export interface Sizes152 {
  "100": N100153
  "200": N20014
  "400": N400152
  full: Full152
}

export interface N100153 {
  h: number
  w: number
}

export interface N20014 {
  h: number
  w: number
}

export interface N400152 {
  h: number
  w: number
}

export interface Full152 {
  h: number
  w: number
}

export interface PackagingFr {
  imgid: string
  rev: string
  sizes: Sizes153
}

export interface Sizes153 {
  "100": N100154
  "200": N20015
  "400": N400153
  full: Full153
}

export interface N100154 {
  h: number
  w: number
}

export interface N20015 {
  h: number
  w: number
}

export interface N400153 {
  h: number
  w: number
}

export interface Full153 {
  h: number
  w: number
}

export interface Ingredient {
  ciqual_proxy_food_code?: string
  ecobalyse_code?: string
  id: string
  is_in_taxonomy: number
  percent_estimate: number
  percent_max: number
  percent_min: number
  text: string
  vegan?: string
  vegetarian?: string
  ciqual_food_code?: string
  from_palm_oil?: string
  percent?: number
  ingredients?: Ingredient2[]
}

export interface Ingredient2 {
  id: string
  ingredients: Ingredient3[]
  is_in_taxonomy: number
  percent_estimate: number
  percent_max: number
  percent_min: number
  text: string
  vegan: string
  vegetarian: string
}

export interface Ingredient3 {
  ciqual_food_code: string
  id: string
  is_in_taxonomy: number
  percent_estimate: number
  percent_max: number
  percent_min: number
  text: string
  vegan: string
  vegetarian: string
}

export interface IngredientsAnalysis {
  "en:non-vegan": string[]
  "en:palm-oil": string[]
  "en:vegan-status-unknown": string[]
  "en:vegetarian-status-unknown": string[]
}

export interface Languages {
  "en:arabic": number
  "en:chamorro": number
  "en:dutch": number
  "en:english": number
  "en:french": number
  "en:german": number
  "en:italian": number
  "en:romanian": number
  "en:spanish": number
}

export interface LanguagesCodes {
  ar: number
  ch: number
  de: number
  en: number
  es: number
  fr: number
  it: number
  nl: number
  ro: number
}

export interface NovaGroupsMarkers {
  "3": string[][]
  "4": string[][]
}

export interface NutrientLevels {
  fat: string
  salt: string
  "saturated-fat": string
  sugars: string
}

export interface Nutriments {
  "added-sugars": number
  "added-sugars_100g": number
  "added-sugars_serving": number
  "added-sugars_unit": string
  "added-sugars_value": number
  caffeine: number
  caffeine_100g: number
  caffeine_serving: number
  caffeine_unit: string
  caffeine_value: number
  carbohydrates: number
  carbohydrates_100g: number
  carbohydrates_serving: number
  carbohydrates_unit: string
  carbohydrates_value: number
  "carbon-footprint-from-known-ingredients_product": number
  "carbon-footprint-from-known-ingredients_serving": number
  choline: number
  choline_100g: number
  choline_serving: number
  choline_unit: string
  choline_value: number
  copper: number
  copper_100g: number
  copper_serving: number
  copper_unit: string
  copper_value: number
  energy: number
  "energy-kcal": number
  "energy-kcal_100g": number
  "energy-kcal_serving": number
  "energy-kcal_unit": string
  "energy-kcal_value": number
  "energy-kcal_value_computed": number
  "energy-kj": number
  "energy-kj_100g": number
  "energy-kj_serving": number
  "energy-kj_unit": string
  "energy-kj_value": number
  "energy-kj_value_computed": number
  energy_100g: number
  energy_serving: number
  energy_unit: string
  energy_value: number
  fat: number
  fat_100g: number
  fat_serving: number
  fat_unit: string
  fat_value: number
  fiber: number
  fiber_100g: number
  fiber_serving: number
  fiber_unit: string
  fiber_value: number
  "fruits-vegetables-legumes-estimate-from-ingredients_100g": number
  "fruits-vegetables-legumes-estimate-from-ingredients_serving": number
  "fruits-vegetables-nuts-estimate-from-ingredients_100g": number
  "fruits-vegetables-nuts-estimate-from-ingredients_serving": number
  iron: number
  iron_100g: number
  iron_serving: number
  iron_unit: string
  iron_value: number
  magnesium: number
  magnesium_100g: number
  magnesium_serving: number
  magnesium_unit: string
  magnesium_value: number
  manganese: number
  manganese_100g: number
  manganese_serving: number
  manganese_unit: string
  manganese_value: number
  "nova-group": number
  "nova-group_100g": number
  "nova-group_serving": number
  "nutrition-score-fr": number
  "nutrition-score-fr_100g": number
  phosphorus: number
  phosphorus_100g: number
  phosphorus_serving: number
  phosphorus_unit: string
  phosphorus_value: number
  proteins: number
  proteins_100g: number
  proteins_serving: number
  proteins_unit: string
  proteins_value: number
  salt: number
  salt_100g: number
  salt_serving: number
  salt_unit: string
  salt_value: number
  "saturated-fat": number
  "saturated-fat_100g": number
  "saturated-fat_serving": number
  "saturated-fat_unit": string
  "saturated-fat_value": number
  selenium: number
  selenium_100g: number
  selenium_serving: number
  selenium_unit: string
  selenium_value: number
  sodium: number
  sodium_100g: number
  sodium_serving: number
  sodium_unit: string
  sodium_value: number
  starch: number
  starch_100g: number
  starch_serving: number
  starch_unit: string
  starch_value: number
  sugars: number
  sugars_100g: number
  sugars_serving: number
  sugars_unit: string
  sugars_value: number
  "vitamin-a": number
  "vitamin-a_100g": number
  "vitamin-a_serving": number
  "vitamin-a_unit": string
  "vitamin-a_value": number
  "vitamin-b1": number
  "vitamin-b12": number
  "vitamin-b12_100g": number
  "vitamin-b12_serving": number
  "vitamin-b12_unit": string
  "vitamin-b12_value": number
  "vitamin-b1_100g": number
  "vitamin-b1_serving": number
  "vitamin-b1_unit": string
  "vitamin-b1_value": number
  "vitamin-b2": number
  "vitamin-b2_100g": number
  "vitamin-b2_serving": number
  "vitamin-b2_unit": string
  "vitamin-b2_value": number
  "vitamin-b6": number
  "vitamin-b6_100g": number
  "vitamin-b6_serving": number
  "vitamin-b6_unit": string
  "vitamin-b6_value": number
  "vitamin-b9": number
  "vitamin-b9_100g": number
  "vitamin-b9_serving": number
  "vitamin-b9_unit": string
  "vitamin-b9_value": number
  "vitamin-c": number
  "vitamin-c_100g": number
  "vitamin-c_serving": number
  "vitamin-c_unit": string
  "vitamin-c_value": number
  "vitamin-e": number
  "vitamin-e_100g": number
  "vitamin-e_serving": number
  "vitamin-e_unit": string
  "vitamin-e_value": number
  "vitamin-k": number
  "vitamin-k_100g": number
  "vitamin-k_serving": number
  "vitamin-k_unit": string
  "vitamin-k_value": number
  zinc: number
  zinc_100g: number
  zinc_serving: number
  zinc_unit: string
  zinc_value: number
}

export interface Nutriscore {
  "2021": N2021
  "2023": N2023
}

export interface N2021 {
  category_available: number
  data: Data
  grade: string
  nutrients_available: number
  nutriscore_applicable: number
  nutriscore_computed: number
  score: number
}

export interface Data {
  energy: number
  energy_points: number
  energy_value: number
  fiber: number
  fiber_points: number
  fiber_value: number
  fruits_vegetables_nuts_colza_walnut_olive_oils: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number
  is_beverage: number
  is_cheese: number
  is_fat: number
  is_water: number
  negative_points: number
  positive_points: number
  proteins: number
  proteins_points: number
  proteins_value: number
  saturated_fat: number
  saturated_fat_points: number
  saturated_fat_value: number
  sodium: number
  sodium_points: number
  sodium_value: number
  sugars: number
  sugars_points: number
  sugars_value: number
}

export interface N2023 {
  category_available: number
  data: Data2
  grade: string
  nutrients_available: number
  nutriscore_applicable: number
  nutriscore_computed: number
  score: number
}

export interface Data2 {
  components: Components
  count_proteins: number
  count_proteins_reason: string
  is_beverage: number
  is_cheese: number
  is_fat_oil_nuts_seeds: number
  is_red_meat_product: number
  is_water: number
  negative_points: number
  negative_points_max: number
  positive_nutrients: string[]
  positive_points: number
  positive_points_max: number
}

export interface Components {
  negative: Negative[]
  positive: Positive[]
}

export interface Negative {
  id: string
  points: number
  points_max: number
  unit: string
  value: number
}

export interface Positive {
  id: string
  points: number
  points_max: number
  unit: string
  value: number
}

export interface NutriscoreData {
  components: Components2
  count_proteins: number
  count_proteins_reason: string
  grade: string
  is_beverage: number
  is_cheese: number
  is_fat_oil_nuts_seeds: number
  is_red_meat_product: number
  is_water: number
  negative_points: number
  negative_points_max: number
  positive_nutrients: string[]
  positive_points: number
  positive_points_max: number
  score: number
}

export interface Components2 {
  negative: Negative2[]
  positive: Positive2[]
}

export interface Negative2 {
  id: string
  points: number
  points_max: number
  unit: string
  value: number
}

export interface Positive2 {
  id: string
  points: number
  points_max: number
  unit: string
  value: number
}

export interface OwnerFields {
  abbreviated_product_name_fr: number
  allergens: number
  brands: number
  carbohydrates: number
  categories: number
  conservation_conditions_fr: number
  countries: number
  customer_service_fr: number
  data_sources: number
  energy: number
  "energy-kcal": number
  "energy-kj": number
  fat: number
  generic_name_fr: number
  ingredients_text_fr: number
  labels: number
  lang: number
  lc: number
  no_nutrition_data: number
  nutrition_data_per: number
  obsolete: number
  owner: number
  packaging: number
  producer_version_id: number
  product_name_fr: number
  proteins: number
  quantity: number
  salt: number
  "saturated-fat": number
  serving_size: number
  sodium: number
  sugars: number
}

export interface Packaging3 {
  food_contact: number
  material?: string
  number_of_units?: number
  quantity_per_unit?: string
  quantity_per_unit_unit?: string
  quantity_per_unit_value?: string
  recycling?: string
  shape: string
  weight_measured?: number
}

export interface PackagingsMaterials {
  all: All
  "en:glass": EnGlass
  "en:paper-or-cardboard": EnPaperOrCardboard
  "en:plastic": EnPlastic
  "en:unknown": EnUnknown
}

export interface All {
  weight: number
  weight_100g: number
  weight_percent: number
}

export interface EnGlass {
  weight: number
  weight_100g: number
  weight_percent: number
}

export interface EnPaperOrCardboard {
  weight: number
  weight_100g: number
  weight_percent: number
}

export interface EnPlastic {
  weight: number
  weight_100g: number
  weight_percent: number
}

export interface EnUnknown {
  weight: number
  weight_100g: number
  weight_percent: number
}

export interface Product2 {}

export interface Scores2 {}

export interface SelectedImages {
  front: Front
  ingredients: Ingredients
  nutrition: Nutrition
  packaging: Packaging4
}

export interface Front {
  display: Display
  small: Small
  thumb: Thumb
}

export interface Display {
  de: string
  en: string
  es: string
  fr: string
  it: string
  nl: string
}

export interface Small {
  de: string
  en: string
  es: string
  fr: string
  it: string
  nl: string
}

export interface Thumb {
  de: string
  en: string
  es: string
  fr: string
  it: string
  nl: string
}

export interface Ingredients {
  display: Display2
  small: Small2
  thumb: Thumb2
}

export interface Display2 {
  de: string
  es: string
  fr: string
  nl: string
}

export interface Small2 {
  de: string
  es: string
  fr: string
  nl: string
}

export interface Thumb2 {
  de: string
  es: string
  fr: string
  nl: string
}

export interface Nutrition {
  display: Display3
  small: Small3
  thumb: Thumb3
}

export interface Display3 {
  es: string
  fr: string
  nl: string
}

export interface Small3 {
  es: string
  fr: string
  nl: string
}

export interface Thumb3 {
  es: string
  fr: string
  nl: string
}

export interface Packaging4 {
  display: Display4
  small: Small4
  thumb: Thumb4
}

export interface Display4 {
  en: string
  fr: string
}

export interface Small4 {
  en: string
  fr: string
}

export interface Thumb4 {
  en: string
  fr: string
}

export interface Source {
  fields: string[]
  id: string
  images: any[]
  import_t: number
  manufacturer: any
  name: string
  source_licence?: string
  source_licence_url?: string
  url?: string
}

export interface SourcesFields {
  "org-gs1": OrgGs1
}

export interface OrgGs1 {
  gln: string
  gpcCategoryCode: string
  gpcCategoryName: string
  isAllergenRelevantDataProvided: string
  lastChangeDateTime: string
  partyName: string
  productionVariantDescription: string
  publicationDateTime: string
}
