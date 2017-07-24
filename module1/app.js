(function(){
  angular.module("LunchCheck", [])
    .controller("LunchCheckController", function($scope) {
      $scope.messageOnUrDiet = "";

      $scope.checkDiet = function() {
        $scope.messageOnUrDiet = "test";
      };

    });
})();
