const Users = require('./Users');
const Concert = require('./Concerts');
const Band = require( './bands' );
const Post = require('./Post');
const Comment = require('./Comment');

Users.hasMany(Concert, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Concert.belongsTo(Users, {
  foreignKey: 'user_id'
});

Users.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(Users, {
  foreignKey: 'user_id'
});

Concert.hasMany(Post, {
  foreignKey: 'concert_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(Concert, {
  foreignKey: 'concert_id'
});

Users.belongsToMany(Band, {
  through: 'band_fans'
})
Band.belongsToMany(Users, {
  through: 'band_fans'
})

Band.hasMany(Post, {
  foreignKey: 'band_id',
  onDelete: 'CASCADE'
});
Post.belongsTo(Band, {
  foreignKey: 'band_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
  as: 'comments'
})
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

Users.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})
Comment.belongsTo(Users, {
  foreignKey: 'user_id'
});

module.exports = { Users, Concert, Post, Band, Comment };