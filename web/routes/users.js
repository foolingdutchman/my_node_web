var express = require('express');
var router = express.Router();

var users_controller = require('../controllers/usersControler');

/*GET home page*/
router.get('/', users_controller.index);
/* POST request for creating User. */
router.post('', users_controller.user_create_post);
/* GET users listing. */
router.get('/read', users_controller.users_list);

/* GET request for creating User. */
router.get('/create', users_controller.user_create_get);

/* POST request for creating User. */
router.post('/create', users_controller.user_create_post);

/* GET request to delete User. */
router.get('/delete/:id', users_controller.user_delete_get);

/* POST request to delete User. */
router.post('/delete/:id', users_controller.user_delete_post);

/* GET request to update User. */
router.get('/update/:id', users_controller.user_update_get);

/* POST request to update User. */
router.post('/update/:id', users_controller.user_update_post);

module.exports = router;
