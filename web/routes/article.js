var express = require('express');
var router = express.Router();

var articleControler = require('../controllers/articleControler');

/*GET article page*/
router.get('/', articleControler.index);
/* POST request for creating article. */
router.post('', articleControler.article_create_post);

/* POST request for creating article. */
router.post('/create', articleControler.article_create_post);

/* GET request to delete article. */
router.get('/delete/:id', articleControler.article_delete_get);

/* POST request to delete article. */
router.post('/delete/:id', articleControler.article_delete_post);

/* GET request to update article. */
router.get('/update/:id', articleControler.article_update_get);

/* POST request to update article. */
router.post('/update/:id', articleControler.article_update_post);

module.exports = router;
