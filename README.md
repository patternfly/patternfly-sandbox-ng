[![Build Status](https://travis-ci.org/patternfly/patternfly-sandbox-ng.svg?branch=master)](https://travis-ci.org/patternfly/patternfly-sandbox-ng) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Welcome to the PatternFly-Ng sandbox.  This is a library of common Angular components for use with the PatternFly reference implementation. Below is information on how to get started.  If you wish to contribute, please go to our [Contributions page][contributing].

- Web site: https://www.patternfly.org
- API Docs: http://www.patternfly.org/patternfly-sandbox-ng/
- Build Status: https://travis-ci.org/patternfly/patternfly-sandbox-ng.svg?branch=master


### Using the PatternFly-Ng sandbox In Your Application

This example demonstrates using the Angular-cli to get started with the PatternFly-Ng sandbox

1. Installing angular-cli  
*Note*: you can skip this part if you already have generated an Angular application using `ng-cli` and webpack
  
 ```bash
 npm i -g @angular/cli
 ng new patternfly-sandbox-ng-app
 cd patternfly-sandbox-ng-app
 ng serve
 ```

2. Install patternfly-sandbox-ng
   ```bash
     npm install patternfly-sandbox-ng --save
   ```

3. Add patternfly-sandbox-ng dependencies
 
 - install `patternfly`

 ```bash
   npm install patternfly --save
 ```
 
4. Add a patternfly-sandbox-ng component
- open `src/app/app.module.ts` and add

```typescript
import { NotificationModule } from 'patternfly-sandbox-ng/notification';
// Or
import { NotificationModule } from 'patternfly-sandbox-ng';
...

@NgModule({
   ...
   imports: [NotificationModule, ... ],
    ... 
})
```

- open `angular.json` and insert a new entry into the styles array 

```json
      "styles": [

        "./node_modules/patternfly/dist/css/patternfly.min.css",
        "./node_modules/patternfly/dist/css/patternfly-additions.min.css",
        "./node_modules/patternfly-ng/dist/css/patternfly-ng.min.css",
        "./node_modules/patternfly-sandbox-ng/dist/css/patternfly-sandbox-ng.min.css",
        "styles.css",
      ],
```

- open `src/app/app.component.html` and add
```
<pfng-toast-notification
  [header]="'test header'"
  [message]="'this is a notification'"
  [showClose]="'true'"
  [type]="'success'">
</pfng-toast-notification>
```

### Optional Dependencies

1. To enable table drag and drop, add dragula.min.css from the ng2-dragula package

- open `angular.json` and insert a new entry into the styles array 

```json
      "styles": [
        "./node_modules/dragula/dist/dragula.min.css",
        "./node_modules/patternfly/dist/css/patternfly.min.css",
        "./node_modules/patternfly/dist/css/patternfly-additions.min.css",
        "./node_modules/patternfly-ng/dist/css/patternfly-ng.min.css",
        "./node_modules/patternfly-sandbox-ng/dist/css/patternfly-sandbox-ng.min.css",
        "styles.css",
      ],
```

2. To enable charts, add patternfly-settings.js from the patternfly package

- open `angular.json` and insert a new entry into the scripts array 

```json
      "scripts": [
        "./node_modules/patternfly/dist/js/patternfly-settings.js"
      ],
```

## <a name="question"></a> Do you have a question?
 - Search our [GitHub issues][github-issues]
 - Join our patternfly-ng channel on [Slack](http://slack.patternfly.org)
 - Join our mailing-list following the instructions on [patternfly.org](http://www.patternfly.org/community/)

[contributing]: https://github.com/patternfly/patternfly-sandbox-ng/blob/master/CONTRIBUTING.md
[github-issues]: https://github.com/patternfly/patternfly-sandbox-ng/issues
