export const fetchNutritionData = (data) => {
  return (
  $.ajax({
    method: 'POST',
    url: `https://api.edamam.com/api/nutrition-details?app_id=74b9d2c3&app_key=asdfasdfasdfasdfasdf`,
    data: JSON.stringify(data),
    dataType: "json",
    contentType: "application/json"
  }))
};

//b3d15dc2182b81257d63ac5780f35895