export const fetchNutritionData = (data) => (
    $.ajax({
      method: 'POST',
      // url: `https://api.edamam.com/api/nutrition-details?app_id=74b9d2c3&app_key=b3d15dc2182b81257d63ac5780f35895`,
      url: `https://api.edamam.com/api/nutrition-details?app_id=d4fcc8ee&app_key=56730f33d7840757ce4ef41594288bc8`,
      data: JSON.stringify(data),
      dataType: "json",
      contentType: "application/json"
    })
);

//74b9d2c3//b3d15dc2182b81257d63ac5780f35895

//d4fcc8ee//56730f33d7840757ce4ef41594288bc8