# angular-rename-directive
A simple angular 1.0 module to rename a directive


Should you run into issues where you are using some thirdparty directives and having name conflicts where directives are both (attribute and element resticted (`EA`)) and name of one directive (often poorly named) is an attribute for another directive ([Here is an example use case for which i had provided an answer in Stack overflow some time back](http://stackoverflow.com/questions/36049473/renaming-3rd-party-angular-directive-using-provide-not-working)) and [this](http://stackoverflow.com/questions/26416206/directive-name-and-attribute-name-clashing). You can use this module and set up renaming the directives.

Usage:

1) Load `rename-directive.js` script.

2) Set up the utility module as dependency on your module. 

  `angular.module('myApp', [..., psl.renameDirectiveUtil]);`
    
3) Set up a config block in your module and inject `renameDirectiveProvider`. Inside the config block invoke the provider's `setConfig` method with target directive configuration. You can specify multiple directives as well in the config as config is a javascript object in which key is the source directive you want to rename and its value as the new name for the directive.

```
angular.module('myApp').config(['renameDirectiveProvider',function(renameDirectiveProvider){
  renameDirectiveProvider.setConfig({
    'sourceDirectiveName1' : 'directiveNewName1',
    'sourceDirectiveName2' : 'directiveNewName2'
  });
}])
```


However note that this is rarely applicable if one follows proper semantics in naming the directives and using proper restriction `E`. For any directive containing template should be only declared as element restricted(`E`). Angular 1.5 `.component(` construct promotes this standard.
