# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ingredient.destroy_all
Recipe.destroy_all
User.destroy_all


User.create(email: "andhudhow@gmail.com", password: "password", first_name: "Andrew", last_name: "Howell")
10.times do
  User.create(email: Faker::Internet.email, password: Faker::Beer.brand, first_name: Faker::Name.first_name, last_name: Faker::Name.last_name)
end

10.times do
  Recipe.create(title: Faker::Food.sushi, author_name: Faker::GreekPhilosophers.name, description: Faker::Food.description, servings: Faker::Number.between(from: 2, to: 8) , min_duration: Faker::Number.between(from: 15, to: 180))
end

min_recipe_id = Recipe.minimum(:id)
max_recipe_id = Recipe.maximum(:id)

recipe_id = min_recipe_id

while recipe_id <= max_recipe_id
    10.times do
      Ingredient.create!(recipe_id: recipe_id, quantity: Faker::Food.measurement, description: Faker::Food.ingredient)
    end
    
    step = 1
    5.times do
      PrepStep.create!(recipe_id: recipe_id, step: step, description: Faker::GreekPhilosophers.quote)
      step += 1
    end
  
  recipe_id += 1
end