(function() {
  function Metrics($rootScope) {

    var Metrics = {};

    $rootScope.songsPlayed = [];
    $rootScope.albumsPlayed = [];

    Metrics.getSong = function(songObj) {
        songObj['playedAt'] = new Date();
        $rootScope.songsPlayed.push(songObj);
    },

    listSongs = function() {
        var songs = [];
        angular.forEach($rootScope.songsPlayed, function(song) {
            songs.push(song);
        });
        return songs;
      }

    Metrics.getAlbum = function(albumObj) {
        albumObj['playedAt'] = new Date();
        $rootScope.albumsPlayed.push(albumObj);
    },

    listAlbums = function() {
        var albums = [];
        angular.forEach($rootScope.albumsPlayed, function(album) {
            albums.push(album);
        });
        return albums;
      }
      
    return Metrics;
 }

  angular
    .module('blocJams')
    .service('Metrics', ['$rootScope', Metrics]);
})();
