# angular-rename-directive
A simple angular 1.0 module to rename a directive


Should you run into issues where you are using some thirdparty directives and having name conflicts where directives are both (attribute and element resticted (`EA`)) and name of one directive (often poorly named) is an attribute for another directive ([Here is an example use case](http://stackoverflow.com/questions/26416206/directive-name-and-attribute-name-clashing)). You can use this module and set up renaming the directives.

Usage:

1) Load `rename-directive.js` script.

2) Set up the utility module as dependency on your module. 

  `angular.module('myApp', [..., psl.renameDirectiveUtil]);`
    
3) Set up a config block in your module and inject `renameDirectiveProvider`

```
angular.module('myApp').config(['renameDirectiveProvider',function(renameDirectiveProvider){
  renameDirectiveProvider.setConfig({
    'sourceDirectiveName1' : 'directiveNewName1',
    'sourceDirectiveName2' : 'directiveNewName2'
  });
}])
```


However note that this is rarely applicable if one follows proper semantics in naming the directives and using proper restriction `E`. For any directive containing template should be only declared as element restricted(`E`). Angular 1.5 `.component(` construct promotes this standard.
