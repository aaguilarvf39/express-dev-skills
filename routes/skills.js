var express = require('express');
var router = express.Router();
// Require our skills controller module
const skillsCtrl = require('../controllers/skills');

// All routes will start with '/skills'

// GET /skills (index functionality - list all)
router.get('/', skillsCtrl.index);
// GET /skills/new (new functionality - show a form)
router.get('/new', skillsCtrl.new);
// GET /skills/:id (show functionality - show one skill)
router.get('/:id', skillsCtrl.show);
// GET /skills/:id/edit (edit functionality - show the form to edit the skill)
router.get('/:somethingcrazy/edit', skillsCtrl.edit);
// POST /skills (create functionality)
router.post('/', skillsCtrl.create);
// DELETE /skills/:id (delete functionality)
router.delete('/:id', skillsCtrl.delete);
// PUT /skills/:id (update functionality)
router.put('/:id', skillsCtrl.update);


module.exports = router;