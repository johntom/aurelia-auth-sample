added to config.js
1
"Dogfalo/materialize": "github:Dogfalo/materialize@0.97.0",
but had to
jspm install github:Dogfalo/materialize@0.97.0
2
chane animation-main
import materialize from 'Dogfalo/materialize';
3
comment out in app.js
//import 'bootstrap';
//import 'bootstrap/css/bootstrap.css!';


# aurelia-skeleton-navigation mods
# 8-6
jspm install github:paulvanbladel/aurelia-auth

# 7-28
jspm install github:components/jquery@2.1.4
             github:components/jqueryui@1.11.4
// there is no lib for below
// jspm install npm:jquery-sequence
        //      github:components/jquery-sequence
## Running The App

C:\Aurelia\Jul17\skeleton-navigation\src\animation-main.js replace main.js
add import materialize from 'Dogfalo/materialize'; // ensure the materialize jquery plugins are installed.
copy C:\Aurelia\aurelia-breeze-northwind\src\resources
jsmp moment
npm numeral
merge into package.json
task-q


https://javascriptkicks.com/
http://blog.differential.com/the-story-behind-meteors-next-big-move/

http://patrickwalters.net/page/2/
https://github.com/colinsr/Aurelia
http://d20tools.com/
https://gitter.im/Aurelia/Discuss
https://medium.com/javascript-scene/learn-javascript-b631a4af11f2
https://www.youtube.com/watch?v=2aki4UqJZuc
http://www.sitepoint.com/composition-aurelia-report-builder/
https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/
http://blog.durandal.io/2015/06/12/aurelia-in-oslo/
https://www.airpair.com/angularjs/posts/top-10-mistakes-angularjs-developers-make
https://engineering.iconnect360.com/angularjs/
https://github.com/angular-class/NG6-starter/tree/jspm


http://www.sitepoint.com/creating-next-generation-javascript-application-aurelia/

Jul 18 2015
must change materialize for northwind
delete C:\Aurelia\aurelia-breeze-northwind\jspm_packages\github\Dogfalo
jspm install github:Dogfalo/materialize@0.97.0 --save
package.json
  "jspm": {
    "dependencies": {
      "Dogfalo/materialize": "github:Dogfalo/materialize@0.97.0",

# aurelia-skeleton-navigation mods

## Running The App
jspm install lodash
C:\Aurelia\Jul17\skeleton-navigation\src\animation-main.js replace main.js
add import materialize from 'Dogfalo/materialize'; // ensure the materialize jquery plugins are installed.
copy C:\Aurelia\aurelia-breeze-northwind\src\resources
jsmp moment
npm numeral
merge into package.json
task-q

In index.html
<body aurelia-app="animation-main">


jspm install aurelia-animator-css aurelia-binding aurelia-bootstrapper aurelia-dependency-injection aurelia-framework aurelia-http-client aurelia-router aurelia-event-aggregator aurelia-history-browser aurelia-loader-default aurelia-loader aurelia-metadata aurelia-route-recognizer aurelia-templating-binding aurelia-templating-resources aurelia-templating-router aurelia-templating aurelia-logging aurelia-task-queue aurelia-history aurelia-path


jspm install github:charlespockert/aurelia-bs-grid
jspm install aurelia-bs-modal



jul 7
1
jspm install bootstrap

delete  browser-sync
npm install -g browser-sync
npm install browser-sync --save


174.37.214.250:3306

JohnTomaselli  /  p@ss34w0rd
