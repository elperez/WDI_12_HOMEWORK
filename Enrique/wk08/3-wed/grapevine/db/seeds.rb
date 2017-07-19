# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.create name: 'click bait'
Category.create name: 'sports'
Comment.create name: 'kit perez', comment: 'Awesome.', article_id: '1'
Comment.create name: 'Adrian Mancusso', comment: 'This is great.', article_id: '1'
Comment.create name: 'Brett Cremmer', comment: 'King good.', article_id: '1'
