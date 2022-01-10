/*An array containing all the country names in the world:*/
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


/*initiate the autocomplete function on the "Input" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), list);


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/

  var currentFocus;
  /*execute a function when someone writes in the text field:*/


  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });


  /*execute a function presses a key on the keyboard:*/

  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });


  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

