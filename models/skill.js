const skills = [
  { id: 123, skill: "Collaboration and teamwork", present: true },
  { id: 111, skill: "JavaScript", present: true },
  { id: 100, skill: "Growth mindset", present: true }
]


module.exports = {
  getAll,
  getOne,
  create,
  deleteOne
};


function deleteOne (id) {
  id = parseInt(id);
  //find the index for the skill
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}

function create (skill) {
  //Add the id
  skill.id = Date.now() % 1000;
  skill.present = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}
function getAll() {
  return skills;
}



