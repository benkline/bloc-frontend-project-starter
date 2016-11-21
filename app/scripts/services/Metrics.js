(function() {
  function Metrics($rootScope) {

    var Metrics = {};

    $rootScope.songsPlayed = [];
    $rootScope.albumsPlayed = [];

    Metrics.getAlbum = function(albumObj) {
        albumObj['playedAt'] = new Date();
        angular.toJson(albumObj);
        $rootScope.albumsPlayed.push(albumObj);
    }

    Metrics.getSong = function(songObj) {
        songObj['playedAt'] = new Date();
        $rootScope.songsPlayed.push(songObj);
    }

    return Metrics;
 }

  angular
    .module('blocJams')
    .service('Metrics', ['$rootScope', Metrics]);
})();
