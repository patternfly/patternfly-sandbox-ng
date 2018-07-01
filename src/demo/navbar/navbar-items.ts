export class NavbarItems {
  static readonly COMPONENTS: any[] = [{
    id: 'treelist',
    path: 'treelist',
    title: 'Tree List'
/*
    id: 'lists',
    title: 'Lists',
    children: [{
      id: 'list',
      path: 'list',
      title: 'Basic List'
    }, {
      id: 'treelist',
      path: 'treelist',
      title: 'Tree List'
    }]
*/
  }];

  static readonly DIRECTIVES: any[] = [{
  }];

  static readonly GETSTARTED: any[] = [{
    hasChildren: false,
    id: 'getstarted',
    path: 'welcome',
    title: 'Welcome'
  }, {
    hasChildren: true,
    id: 'components',
    path: 'treelist',
    title: 'Components'
/*
  }, {
    hasChildren: true,
    id: 'directives',
    path: 'remainingcharscount',
    title: 'Directives'
  }, {
    hasChildren: true,
    id: 'pipes',
    path: 'searchhighlight',
    title: 'Pipes'
  }, {
    hasChildren: true,
    id: 'services',
    path: 'copyservice',
    title: 'Services'
*/
  }];

  static readonly PIPES: any[] = [{
  }];

  static readonly SERVICES: any[] = [{
  }];
}
