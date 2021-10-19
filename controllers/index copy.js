const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bandRoutes = require('./bandRoutes');
const postRoutes = require('./postRoutes')
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes);
router.use('/bands', bandRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
