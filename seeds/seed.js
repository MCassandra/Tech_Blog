const sequelize = require('../config/connection');
const { Users, Band, Post } = require('../models');

const bandData = require('./bandData.json');
const userData = require('./userData.json');
const postData = require('./postData.json');


const seedDatabase = async () => {
  try {

  
  await sequelize.sync({ force: true });

  const users = await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const bands = await Band.bulkCreate(bandData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  } catch (err){
    console.log(err)
  }
  

  process.exit(0);
};

seedDatabase();

