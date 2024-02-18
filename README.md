# jsonresume-theme-hr-md

**JSON Resume Markdown Theme Repository**

This repository provides a Markdown theme for creating professional resumes using JSON data based on the open-source [JSON-Resume](https://github.com/jsonresume/resume-schema) schema. The theme is designed to be simple, customizable, and easy to integrate with JSON data using Mustache.js syntax.

**Key Features:**
- Markdown-based: The theme generates resumes in Markdown format, making it compatible with Markdown editors and platforms that support Markdown rendering.
- Mustache.js integration: Utilizes Mustache.js syntax to dynamically render resume content from JSON data, allowing for easy customization and dynamic content generation.
- Structured layout: Offers a structured layout with sections for personal information, summary, work experience, projects, education, awards, skills, languages, interests, and volunteer experience.


## Usage

To first get started with this JSONResume theme, you'll need to have the JSONResume CLI installed. If you haven't already install it with `npm install -g resume-cli`. If this doesn't work, try `npm install -g resume-cli`.

After this, you can get your resume.json ready by typing `resume init`. After hitting enter, your resume will be initialized and you can edit it and fill in the neccessary fields. Check out [the official resume-schema repository](https://github.com/jsonresume/resume-schema) for more information on filling these fields.

When you are finished with your resume, you may test it by yet again opening the command line and typing `resume serve --theme kendall-bushmanov` to see how it looks with this theme. You can replace the word `kendall-bushmanov` with other theme names too.

### Install the command line

We're going to use the official [resume-cli](https://github.com/jsonresume/resume-cli) to run our development server.

Go ahead and install it:

```
npm install -g resume-cli
```

### Install npm packages

We need to install the dependencies. `cd` into the theme folder we just downloaded and run:

```bash
npm install
```

This will read the local `package.json` and install the packages listed under `dependencies`.

### Serve theme

While inside the theme folder, simply run:

```
resume serve --theme .
```

You should now see this message:

```
Preview: http://localhost:4000
Press ctrl-c to stop
```

Congratulations, you've made it!

__The theme development can now begin.__


**Note:** This repository serves as a starting point for creating Markdown-based resumes from JSON data following the JSON Resume schema. Users can extend or modify the theme to include additional sections or styling based on their requirements and preferences.

**Contributions:** Contributions and feedback are welcome! Feel free to fork the repository, make changes, and submit pull requests to improve the theme or add new features.
