const fs = require('fs');
const Mustache = require('mustache');

function render(resumeObject) {
    const theme = fs.readFileSync(__dirname + '/resume.template.md', 'utf8');
    const result = Mustache.render(theme, resumeObject);
    return result;
};
module.exports = {
    render: render
}
