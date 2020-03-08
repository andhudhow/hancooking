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


User.create(email: "andhudhow@gmail.com", password: "password", nickname: "Andrew H.")
10.times do
  User.create(email: Faker::Internet.email, password: Faker::Beer.brand, nickname: Faker::Kpop.girl_groups)
end

25.times do
  Recipe.create(title: Faker::Food.sushi, author_name: Faker::Kpop.solo, description: Faker::Food.description + " " + Faker::Food.description + " " + Faker::Food.description, servings: Faker::Number.between(from: 2, to: 8) , min_duration: Faker::Number.between(from: 15, to: 180))
end


demo_id = User.find_by(email: "andhudhow@gmail.com").id

recipe_id = Recipe.first.id
while recipe_id <= Recipe.last.id
  
    10.times do
      Ingredient.create!(recipe_id: recipe_id, quantity: Faker::Number.between(from: 2, to: 8), description: ["cups", "tbs", "tsp", "grams"].sample + " " + Faker::Food.ingredient)
    end
    
    step = 1
    5.times do
      PrepStep.create!(recipe_id: recipe_id, step: step, description: Faker::GreekPhilosophers.quote + " " + Faker::GreekPhilosophers.quote + " " + Faker::GreekPhilosophers.quote + " " + Faker::GreekPhilosophers.quote + " " + Faker::GreekPhilosophers.quote + " " + Faker::GreekPhilosophers.quote + " " + Faker::GreekPhilosophers.quote + " " + Faker::GreekPhilosophers.quote)
      step += 1
    end

    5.times do
      Comment.create!(recipe_id: recipe_id, user_id: (User.first.id..User.last.id).to_a.sample, body: Faker::Hipster.sentence)
    end

    RecipeSave.create!(recipe_id: recipe_id, user_id: demo_id)
  
  recipe_id += 1
end

Recipe.all.each do |recipe|
  recipe.photo.attach(io: File.open('app/assets/images/jajangmyeon.jpg'), filename: 'jajangmyeon.jpg')
end