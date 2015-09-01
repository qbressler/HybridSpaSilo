customerApp.controller("customerListViewModel", ['$scope', function ($scope) {
    $scope.pageTitle = "Customer List";

    $scope.customers = [
                  {
                      CustomerID: 1,
                      CustomerName: "Chef Wang",
                      CustomerEmail: "ChefWang@provider.com"
                  },
                  {
                      CustomerID: 2,
                      CustomerName: "Shanny Shoes",
                      CustomerEmail: "Shanny@provider.com"
                  },
                  {
                      CustomerID: 3,
                      CustomerName: "Bears Beers",
                      CustomerEmail: "Bears@provider.com"
                  },
                  {
                      CustomerID: 4,
                      CustomerName: "Kitty Kites",
                      CustomerEmail: "Kitty@provider.com"
                  },
                  {
                      CustomerID: 5,
                      CustomerName: "Gunthers Guns",
                      CustomerEmail: "gunther@provider.com"
                  }
    ];
}]);