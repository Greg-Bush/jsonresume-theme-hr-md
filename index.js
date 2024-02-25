const fs = require('fs');
const Mustache = require('mustache');
const htmlToMd = require('html-to-md');

function arrayToString() {
    return this.join(', ');
}
Array.prototype.toString = arrayToString;
Array.prototype.toLocaleString = arrayToString;

function getParents(data) {
    return [data.work, data.volunteer, data.projects]
}

function mdfyHighlights(data) {
    getParents(data).forEach((v) => {
        if (!v) return
        v.forEach((p) => {
            p.highlights?.forEach((h, i) => {
                p.highlights[i] = htmlToMd(h);
            })
        })
    })
    return data
}

function render(resumeObject) {
    const theme = fs.readFileSync(__dirname + '/resume.template.md', 'utf8');

    resumeObject = mdfyHighlights(resumeObject);

    const result = Mustache.render(theme, resumeObject);
    return result;
};
module.exports = {
    render: render
}
