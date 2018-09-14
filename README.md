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

3. Add patternfly-ng dependencies

 - install `patternfly` and `patterfly-ng` (if required)

 ```bash
   npm install patternfly --save
   npm install patternfly-ng --save
 ```

4. Add a patternfly-sandbox-ng component
- open `src/app/app.module.ts` and add

```typescript
import { TreeListModule } from 'patternfly-sandbox-ng';
...

@NgModule({
   ...
  imports: [
    BrowserModule,
    TreeListModule,
    ...
  ],
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
<pfng-tree-list #treeList
                [actionTemplate]="actionTemplate"
                [config]="treeListConfig"
                [itemTemplate]="itemTemplate"
                [items]="items"
                [loadTemplate]="loadTemplate"
>
    <ng-template #loadTemplate let-node="node" let-index="index">
        <span>Loading...</span>
    </ng-template>
    <ng-template #itemTemplate let-node="node" let-index="index">
        <div class="list-pf-left">
            <span class="fa list-pf-icon list-pf-icon-bordered list-pf-icon-small"></span>
        </div>
        <div class="list-pf-content-wrapper">
            <div class="list-pf-main-content">
                <div class="list-pf-title">NAME</div>
                <div class="list-pf-description text-overflow-pf">ADDRESS</div>
            </div>
            <div class="list-pf-additional-content">
                <div>
                    <span class="pficon pficon-screen"></span>
                    <strong>Some content</strong> Hosts
                </div>

            </div>
        </div>
    </ng-template>
    <ng-template #actionTemplate let-node="node" let-index="index">
        some action
    </ng-template>
</pfng-tree-list>
```
where items is an memeber of your component
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
