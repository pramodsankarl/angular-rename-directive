angular.module('psl.renameDirectiveUtil', [])
.config(['$compileProvider', function ($compileProvider) {
    app.directive = function (name, dirObject) {
        $compileProvider.directive(name, function(){
           return dirObject[0];
        });
    };
}])
.provider('renameDirective', ['$provide' , function($provide){
    var directiveSet;
 
    this.setConfig = function(config){
      directiveSet = config;
      
       angular.forEach(directiveSet, function(targetDir,sourceDir ){
          sourceDir +=  'Directive';
          //Set up decorators
          $provide.decorator(sourceDir, function($delegate){
              app.directive(targetDir, $delegate);
              return function() { return angular.noop };
          });
      });
    };

    this.$get  = ['$injector', function($injector){
      return { 
        rename : function(){
          angular.forEach(directiveSet, function(_,dir){
             var sourceDir = dir + 'Directive';
            $injector.get(sourceDir);
          });
        }
      }
    }];
}]).run(['renameDirective',function(renameDirective){
  renameDirective.rename();
}]);
