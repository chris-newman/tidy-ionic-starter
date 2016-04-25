This template is based on the [blank](https://github.com/driftyco/ionic-starter-blank) starter template for the [Ionic Framework](http://ionicframework.com/).

## What it's for
A starter template is what becomes the www directory within the Cordova project.
This template is mainly used to save me the trouble of manually restructuring my Ionic projects.

## How it's different
The ionic starter templates are fine for getting up and running with the Ionic Framework. However, as projects grow in size and complexity, the project structure can become cluttered. This template provides extra directories within www/ for better organization. 

Inspiration for the following structure came from [this article on scotch.io](https://scotch.io/tutorials/angularjs-best-practices-directory-structure).

```bash
www/
    lib/                           -----installed bower dependencies will get put here
    app/
        directives/                -----reusable ui components
            custom-directive/
        components/                -----screens in the app
            login/
                login.controller.js
                login.view.html
            home/
                home.controller.js
                home.view.html
        services/                  -----factories and services
            getData.service.js
        app.js                     -----app configuration js
    css/                           -----css files organized by directive or view
        directives/
        components/
    img/                           -----other images besides icons and splash screens go here
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

Then, to run it, cd into `myApp` and run:

```bash
$ ionic platform add ios 
$ ionic build ios
$ ionic emulate ios
```

Substitute ios for android if not on a Mac, but if you can, the ios development toolchain is a lot easier to work with until you need to do anything custom to Android.
