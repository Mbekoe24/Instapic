# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: "Admin", email: "admin@email.com", password: "123456")

p "#{User.count} user(s) created"
Post.create(name: 'Administration', content: "testing", user_id: 1)
Photo.create(name: 'Invader Admin', image_url:'https://www.jamiesale-cartoonist.com/wp-content/uploads/cartoon-business-man-free-2500x2500.png', post_id: 1)


User.create(username: "Jason56", email: "jason56@email.com", password: "121212")
Post.create(name: 'Jason', content: "I know best", user_id: 2)
Photo.create(name: 'Jason', image_url:'https://www.indiewire.com/wp-content/uploads/2018/06/02_CobraKai.jpg?w=780', post_id: 2)