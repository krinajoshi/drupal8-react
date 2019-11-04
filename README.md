# drupal8-react
In your Drupal installation, go to docroot/themes.
Create a new folder called custom.
Create a new theme folder called react.
Create a new *.info.yml file called react.info.yml with the following contents:

    name: React Theme
    type: theme
    description: 'A theme that loads React JavaScript libraries, and a React application.'
    core: 8.x
    base theme: bartik

In Drupal UI, go to /admin/appearance and enable the theme React Theme.

Clear your cache in /admin/config/development/performance if necessary.
