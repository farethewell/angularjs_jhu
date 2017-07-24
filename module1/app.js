(function(){
  angular.module("LunchCheck", [])
    .controller("LunchCheckController", function($scope) {
      $scope.messageOnUrDiet = "";

      $scope.checkDiet = function() {


        var itemArray = $scope.items.split(',');
        if (itemArray.length == 1 && itemArray[0].length == 0) {
          $scope.messageOnUrDiet = "Please enter data first";
        }
        else if (itemArray.length < 4) {
          $scope.messageOnUrDiet = "Enjoy!";
        }
        else {
          $scope.messageOnUrDiet = "Too much!";
        }
      };

    });
})();
