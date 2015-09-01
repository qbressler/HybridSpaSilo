# HybridSpaSilo
Hybrid Spa Silo - Mini Spa's

A sample ASP.NET MVC Application using one of the may ways to create a 'Spa Silo' in ASP.NET MVC
This is varient of Miguel Castro's 'Spa Silo / mini-spa'. (https://www.youtube.com/watch?v=f67PFtrldGQ)

The initial view from the controller is the entry point into the 'Spa Silo'

Controller -> View -> ASP.NET Razor view -> Spa Silo

Example of an entry point view:

@{ 
    ViewBag.InitialModule = "customer";
}

<script src="~/App/Customer/app.js"></script>
<script src="~/App/Customer/ViewModels/rootViewModel.js"></script>
<script src="~/App/Customer/ViewModels/customerListViewModel.js"></script>

<script type="text/javascipt">
    angular.bootstrap(document.getElementById('customer'), ['customer'])
</script>

<div id="customer" ng-controller="rootViewModel">
    <h2>{{ pageTitle }}</h2>
    <a href="#/customerList" class="btn btn-primary">Customer List</a>
    <a href="#/customerAnotherLink" class="btn btn-primary">Another Customer Link</a>
    <div ng-view style="margin-top: 50px;"></div>
</div>


Example of a sub view
<div ng-controller="customerListViewModel">
    <h3>{{ pageTitle }}</h3>
    <div class="input-group" style="margin-bottom: 50px">
        <span class="input-group-addon">
            <span class="glyphicon glyphicon-search"></span>
        </span>
        <input type="text" placeholder="Filter: CustomerID, Customer Name, Email" class="form-control" ng-model="searchInput">
    </div>

    <table class="table table-striped" style="width: 100%">
        <thead>
            <tr>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Custome Email</th>
                <th></th>
            </tr>
        </thead>
        <tr ng-repeat="customer in customers | filter:searchInput">
            <td>{{ customer.CustomerID }}</td>
            <td>{{ customer.CustomerName }}</td>
            <td><a ng-href="mailto:{{ customer.CustomerEmail }}">{{ customer.CustomerEmail}}</a></td>
            <td>
                <button type="button" class="btn btn-primary" ng-click="open(customer)">Show Details</button>
            </td>
        </tr>
    </table>
</div>
