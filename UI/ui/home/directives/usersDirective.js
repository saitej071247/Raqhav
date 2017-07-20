angular.module('Home', [])

.directive('userData', function () {
    return {
        templateUrl:      'home/directives/users.html',
        restrict:         'A',
        scope:            false
    }

}
)
