const skills = [
  {id: 125223, skill: 'CSS', done: true},
  {id: 127904, skill: 'HTML', done: true},
  {id: 139608, skill: 'Javascript', done: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  delete: deleteOne,
  update
};

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find((skill) => skill.id === id);
  // Merge the updatedTodo's properties into the 
  // existing todo object's properties
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  const skillIdx = skills.findIndex((t) => t.id === id);
  skills.splice(skillIdx, 1);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function getAll() {
  return skills;
}