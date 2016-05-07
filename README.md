This template is based on the [blank](https://github.com/driftyco/ionic-starter-blank) starter template for the [Ionic Framework](http://ionicframework.com/). This template comes with an example Login component and a route configured for it (most of my projects have needed Login screens).

## What it's for
From the Ionic [documentation](http://ionicframework.com/docs/cli/start.html): A starter template is what becomes the www directory within the Cordova project.
This template is mainly used to save me the trouble of manually restructuring my Ionic projects.

## How it's different
The ionic starter templates are fine for getting up and running with the Ionic Framework. However, as projects grow in size and complexity, the project structure can become cluttered. This template provides extra directories within www/ for better organization. 

Inspiration for the following structure came from [this article on scotch.io](https://scotch.io/tutorials/angularjs-best-practices-directory-structure).

```bash
www/
    lib/                           -----any bower dependencies will get put here
    app/
        components/                -----screens in the app
            login/
                login.controller.js
                login.view.html
        directives/                -----reusable ui components
            custom-directive/
        services/                  -----factories and services
            starter.service.js
        app-routes.js              -----route configuration js
        app.js                     -----app configuration js
    assets/                        -----assets and other images besides icons and splash screens go here
        img/                       
        files/
    css/                           -----css files organized by directive or view here, or in scss folder
        components/ 
            login.css
        directives/
    index.html
```


## How to use this template

*This template does not work on its own*. It is missing the Ionic library, and AngularJS.

To use this, either create a new ionic project using the ionic node.js utility, or copy and paste this into an existing Cordova project and download a release of Ionic separately.

### With the Ionic tool:

If you don't have the Ionic CLI installed, get it with npm:

```bash
$ sudo npm install -g ionic cordova
```

Start a project based on this template:

```bash
$ ionic start myApp https://github.com/chris-newman/tidy-ionic-starter
```
### Up and running with your new project

First things first, cd into `myApp`

The Ionic framework always includes the most recent starter app.js in www/js/app.js

Copy it into the new structure and remove it from the original location

```bash
$ cp -f www/js/app.js www/app/app.js && rm -r www/js
```

Then, a quick test in your browser to make sure everything is in order:

```bash
$ ionic serve
```

And to build and run on an emulator:

```bash
$ ionic platform add ios 
$ ionic build ios
$ ionic emulate ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.
