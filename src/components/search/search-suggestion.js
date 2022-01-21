var list = ['bombay duck', 'mutton', 'shimla mirch', 'dried mango', 'flour', 
'cardamom powder', 'pearl onions', 'dinner rolls', 'rice flakes', 'bengal gram flour',
 'brown rice flour', 'dry coconut', 'molu leaf', 'rapeseed oil', 'rose syrup', 'orange rind',
  'whole egg', 'fish fillets', 'glutinous rice', 'filling', 'wild mushrooms', 'bell peppers', 
  'long beans', 'yellow mustard', 'mustard seeds', 'dried fruits', 'chenna cheese', 'tindora',
  'arbi ke patte', 'dry roasted', 'baby corn', 'cashew nuts', 'skinless chicken breasts', 'sticky rice',
  'bitter gourd', 'maida flour', 'atta', 'gur', 'kasuri methi', 'mixed vegetables', 'cardamom',
  'chickpea flour', 'green', 'elephant foot yam', 'potato', 'vinegar', 'badam', 'apricots', 'ghee',
  'desiccated coconut', 'garlic', 'water', 'milk powder', 'pigeon peas', 'bombay rava', 'potol',
  'methi leaves', 'brown rice', 'white flour', 'yellow moong daal', 'capsicum', 'jaggery syrup', 
  'khus-khus seeds', 'sevai', 'black sesame seeds', 'saffron', 'maida', 'corn flour', 'greens',
  'low fat', 'ginger', 'skimmed milk powder', 'chili powder', 'arhar dal', 'mashed potato', 'lamb',
  'naan bread', 'pav bhaji masala', 'sesame', 'kala masala', 'green chillies', 'rock salt', 'banana',
  'biryani masala powder', 'gooseberry', 'sabudana', 'tamarind', 'mung bean', 'bottle gourd',
  'bread crumbs', 'moong dal', 'sorghum flour', 'raw peanuts', 'dough', 'black salt', 'whole wheat rava',
  'turmeric', 'forbidden black rice', 'avocado oil', 'alum powder', 'reduced milk', 'parboiled rice',
  'nigella seeds', 'curd', 'idli rice', 'red chilli', 'pumpkin flowers', 'tandoori masala', 'cucumber',
  'fresh green peas', 'tomato sauce', 'tomato', 'chopped tomatoes', 'gobi', 'chhena', 'kitchen lime',
  'ridge gourd', 'gravy', 'tea bags', 'dates', 'sauce', 'fish', 'litre milk', 'khoa', 'besan', 'cream',
  'red chili', 'sooji', 'whole urad dal', 'hot water', 'oil', 'drumsticks', 'paneer', 'chicken chunks', 
  'garlic powder', 'tomatoes', 'spinach', 'thick poha', 'cardamom pods', 'boiled potatoes', 'prawns', 
  'baking soda', 'brinjal', 'pistachio', 'rice', 'green moong beans', 'mustard seed', 'whole wheat bread', 
  'rice flour', 'semolina', 'cilantro', 'chicken thighs', 'mushroom', 'kewra', 'star anise', 'sambar powder',
  'green chili', ' jaggery', 'chenna', 'jowar flour', 'carrot', 'olive oil', 'garam masala powder',
  'white sesame seeds', 'wheat flour', 'chana daal', 'kokum', 'dry chilli', 'jaggery', 'mustard', 'sweet',
  'dharwadi buffalo milk', 'sliced almonds', 'mustard oil', 'carrots', 'beans', 'garam masala', 'jaggery ',
  'chole', 'musk melon seeds', 'arrowroot powder', 'malvani masala', 'rava', 'chana dal', 'chilli',
  'split urad dal', 'bay leaf', 'fenugreek leaves', 'sugar syrup', 'yoghurt', 'onions', 'mixed nuts',
  'whole red beans', 'beaten rice flakes', 'green chilli', 'panch phoran masala', 'grated coconut',
  'coconut flakes', 'ginger powder', 'steamer', 'green chili paste', 'spices', 'frozen green peas', 
  'whole wheat flour', 'cauliflower', 'chicken', 'bhatura', 'edible gum', 'curry leaves', 'fry', 'palak',
  'raisins', 'coconut ice', 'citric acid', 'chickpeas', 'almonds', 'dry fruits', 'biryani masala',
  'peanut oil', 'chillies', 'white bread slices', 'cashews', 'coconut oil', 'fennel', 'nestle cream',
  'fish roe', 'bell pepper', 'green cardamom', 'bhuna chana', 'roasted gram flour', 'lobster', 'whole red',
  'green chilies', 'ginger and garlic', 'condensed milk', 'red pepper', 'refined flour', 'milk',
  'red chillies', 'pork', 'baingan', 'masoor dal', 'marinade', 'boondi', 'sunflower oil', 'baby potatoes',
  'honey', 'sesame seeds', 'beetroot', 'fennel seeds', 'amaranth leaves', 'amchur powder', 'all purpose flour',
  'meat curry powder', 'lentil flour', 'green bell pepper', 'falooda sev', 'urad dal', 'tea leaves', 'black pepper',
  'cinnamon', 'moong beans', 'toor dal', 'sattu', 'peas', 'khaman', 'khus khus', 'vegetable oil', 'raw banana', 
  'chia seed', 'greek yogurt', 'heavy cream', 'fresh coconut', 'poppy seeds', 'wine vinegar', 
  'sesame oil', 'fenugreek seeds', 'green beans', 'cabbage', 'clarified butter', 'dried rose petals', 
  'elachi', 'dal', 'makki atta', 'lemon juice', 'soaked rice', 'vermicelli pudding', 'fermented bamboo shoot', 
  'nuts', 'rose water', 'red onion', 'basmati rice', 'ladies finger', 'pearl millet flour', 'pav', 'raw papaya', 
  'coriander', 'raw rice', 'peanuts', 'watercress', 'imli', 'surti papdi', 'besan flour', 'mustard green', 'almond', 
  'black lentils', 'sev', 'dry dates', 'sweetened milk', 'dahi', 'cottage cheese', 'powdered sugar', 'masala', 
  'red kidney beans', 'sweet potato', 'whipping cream', 'salt', 'cinnamon stick', 'slivered almonds', 'valor papdi', 
  'thin rice flakes', 'kala jeera', 'coconut', 'firm white pumpkin', 'fish fillet', 'split pigeon peas', 'yogurt', 
  'french beans', 'banana flower', 'peanut', 'cooked rice', 'plain flour', 'white urad dal', 'canned coconut milk', 
  'tamarind paste', 'eggplant', 'cashews and raisins', 'green garlic chutney', 'sugar', 'lemon', 'lentils', 
  'gram flour', 'beef', 'axone', 'tomato paste', 'eggs', 'malai', 'fried milk power', 'blend rice', 'egg yolks', 
  'loaf bread', 'drumstick', 'potatoes', 'mawa', 'kala chana', 'butter', 'soy sauce', 'baking powder', 'mint', 
  'fresh green chilli', 'red food coloring', 'pomegranate', 'coconut milk', 'aloo', 'mango', 
  'green peas', 'boiled pork'];

  export default list;