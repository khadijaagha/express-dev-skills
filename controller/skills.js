const Skill = require('../models/skill');

module.exports = {
//allows us to export all functions, 
//easier to keep track and can add any if we create new ones.
index,
show,
new: newSkill,
create,
delete: deleteSkill
};

function deleteSkill (req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect('/todos');
}

function create (req, res) {
  console.log(req.body);
  //models are responsible for CRUD'ing data
  Skill.create(req.body);
  //always do redirect when data is changed
  res.redirect('/skills');
}

function newSkill (req, res) {
  res.render('skills/new', { title: 'New Skill' });
}

function show (req, res) {
    res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    title: 'Skill Details'    
    });

}

function index(req, res) {
    console.log(Skill.getAll());
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: 'View all Skills'
    });
  }

  //implement index functionality for skills resource (above)





