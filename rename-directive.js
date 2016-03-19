angular.module('psl.renameDirectiveUtil', [])
.provider('renameDirective', ['$provide' , '$compileProvider' , function($provide, $compileProvider){
    var directiveSet;
 
    this.setConfig = function setConfig(config){
      directiveSet = config;
       
       angular.forEach(directiveSet, function iterator(targetDir, sourceDir){
          sourceDir +=  'Directive';
          //Set up decorators
          $provide.decorator(sourceDir, function decorate($delegate){
            
             $compileProvider.directive(targetDir, function(){
              return $delegate[0];
             });
             
              return function() { return angular.noop };
          });
      });
    };

    this.$get  = ['$injector', function renameDirectiveService($injector){
      return { 
        rename : function rename(){
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
