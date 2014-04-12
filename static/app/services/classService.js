/*
 * returning a ton of $http promises, need to change to handling of class data more directly?
 * */
angular.module('dashboardApp').factory('classService', function($http, $route, $routeParams) {

  return {
    getClass: function(id) {
      return $http({
        method: 'GET',
        url: '/classes/' + id
      })
    },

    getClasses: function() {
      return $http({
        method: 'GET',
        url: '/classes'
      })
    },

    createClass: function(classObj) {
      return $http({
        method: 'POST',
        url: '/classes',
        data: angular.toJson(classObj),
        headers: {'Content-Type': 'application/json'}
      })
    },

    deleteClass: function(cid) {
      return $http({
        method: 'DELETE',
        url: '/classes/' + cid
      })
    },

    addStudent: function(email, fname, lname) {
      return $http({
        method: 'POST',
        url: '/classes/' + $routeParams.id + '/student',
        data: angular.toJson({cid: parseInt($routeParams.id), email: email, fname: fname, lname: lname}),
        headers: {'Content-Type': 'application/json'}
      })
    }
  } // end return
});
