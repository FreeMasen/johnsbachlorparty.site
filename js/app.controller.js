angular.module('john')
    .controller('bparty', ['$scope', function($scope) {
        $scope.agenda = [];

        var dinner = {
            time: "5:15pm",
            name: "Dinner",
            location: {
                name: "Townhouse Detroit",
                address: "500 Woodward Ave",
                address2: "suite 200",
                city: "Detroit",
                state: "MI",
                zip: "48226"
            },
            website: 'http://EatAtTownHouse.com',
            comments: 'An early dinner so we can make it to the game on time! For more information about Townhouse visit them online at http://EatAtTownHouse.com'
        }
        $scope.agenda.push(dinner)
        var hockey = {
            time: "7:00pm",
            name: "Detroit Red Wings v. Toronto Maple Leafs",
            location: {
                name:"Joe Louis Arena",
                address: "19 Steve Yzerman Dr",
                address2: "",
                city: "Detroit",
                state: "MI",
                zip: "48226"
            },
            website: 'https://www.nhl.com/redwings/schedule',
            comments: "Watch the Detroit Red Wings take on the Toronto Maple Leafs in this pre-season match up.  More notes will be added here when they become available."
        }
        $scope.agenda.push(hockey)
        var afterGame = {
            time: "9:30pm",
            name: "Drinks and/or Second Dinner",
            location: {
                name: "TBD",
                address: "",
                address2: "",
                city: "Detroit",
                state: "MI",
                zip: "48226"
            },
            website: '/#',
            comments: "Will update with more details as soon as I have them"
        }
        $scope.agenda.push(afterGame)
        var afterAfter = {
            time: "2:00am",
            name: "A place to sleep?",
            location: {
                name: "Cortyard Detroit",
                address: "333 E. Jefferson Ave",
                address2: "",
                city: "Detroit",
                state: "MI",
                zip: "48226"
            },
            website: 'http://www.marriott.com/hotels/travel/dtwdc-courtyard-detroit-downtown/',
            comments: "John has a room in this hotel for the evening, if you were interested in getting one for yourself."
        }
        $scope.agenda.push(afterAfter)

        $scope.contact = 'mailto:r.f.masen+jbp@gmail.com?subject=John%27s%20Bachlor%20Party&body=Hello%20Robert%2c'
    }])