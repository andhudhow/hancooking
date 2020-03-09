export const fetchNutritionData = (ingredientArr) => {{
  $.ajax({
    method: 'GET',
    url: `https://api.edamam.com/api/nutrition-data?app_id=74b9d2c3&app_key=b3d15dc2182b81257d63ac5780f35895&ingr=${ingredientArr}`
  })
}}