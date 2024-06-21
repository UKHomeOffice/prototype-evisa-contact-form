# eVisa-contact-form

- set env file
- install packages with yarn
- hof.settings.json file update
  - this is where we define the folder name in apps that will get loaded
- build the steps
  - No documentations on all possible properties on a step object
  - forks property
  - fields property
  - backLinks property
- define fields
  - translation folder fields.json will be used to provide text copy
- Create static text page:
  - inside the process folder in apps, create a views folder, create a html file that matches the slug of the step
  - inside the html file, use mustache template and define the variables that will be loaded in from the translation file
  - inside the translation folder, match the buttons etc with the variables used in the template