# {{basics.name}}
*{{basics.label}}*

![Profile Image]({{basics.image}})

- **Email:** {{basics.email}}
- **Phone:** {{basics.phone}}
- **Website:** [{{basics.url}}]({{basics.url}})
- **Location:** {{basics.location.city}}, {{basics.location.address}}

## Summary
{{basics.summary}}

## Profiles
{{#basics.profiles}}
- **{{network}}:** [{{username}}]({{url}})
{{/basics.profiles}}

## Work Experience
{{#work}}
### {{name}}
**{{position}}** *({{startDate}} - {{endDate}})*
- **Location:** {{location}}
- **Keywords:** {{keywords}}
- **Highlights:**
  {{#highlights}} 
    - {{.}}
  {{/highlights}}
- **Summary:** {{summary}}
- **URL:** [{{website}}]({{url}})
{{/work}}

## Projects
{{#projects}}
### {{name}}
*{{startDate}} - {{endDate}}*
- **Description:** {{description}}
- **Roles:**
{{#roles}}
  - {{.}}
{{/roles}}
- **Entity:** {{entity}}
- **URL:** [{{url}}]({{url}})
{{/projects}}

{{#education}}
## Education
### {{institution}}
*{{startDate}} - {{endDate}}*
- **Area:** {{area}}
- **Study Type:** {{studyType}}
- **URL:** [{{url}}]({{url}})
- **Score:** {{score}}
- **Courses:** 
  {{#courses}} 
  - {{.}} 
  {{/courses}}
- **Skills:** 
  {{keywords}}
{{/education}}

## Awards
{{#awards}}
- **{{title}}**
  - *Date:* {{date}}
  - *Awarder:* {{awarder}}
  - *Summary:* {{summary}}
{{/awards}}

## Skills
{{#skills}}
- **{{name}}**
  - *Level:* {{level}}
  - *Keywords:* {{keywords}}
{{/skills}}

## Languages
{{#languages}}
- **{{language}}**
  - *Fluency:* {{fluency}}
{{/languages}}

## Interests
{{#interests}}
- **{{name}}**
{{/interests}}

## Volunteer Experience
{{#volunteer}}
### {{organization}}
**{{position}}** *({{startDate}} - {{endDate}})*
- **URL:** [{{url}}]({{url}})
{{#summary}}
- **Summary:** {{.}}
{{/summary}}
- **Highlights:**
  {{#highlights}} 
    - {{.}}
  {{/highlights}}
{{/volunteer}}
