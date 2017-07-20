angular.module('Home', [])
    .directive('messageData', function () {
            return {
                templateUrl:      'home/directives/message.html',
                restrict:         'A',
                scope:            false
            }

        }
    )
