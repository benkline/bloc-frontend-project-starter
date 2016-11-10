(function() {
  function Metrics($rootScope, SongPlayer) {

    var Metrics = {};

    $rootScope.songsPlayed = [];
    $rootScope.albumsPlayed = [];
    $rootScope.artistsPlayed = [];

    var albumObj = SongPlayer.currentAlbum();
    var artistObj = albumObj.artist();
    var songObj = SongPlayer.currentSong();

    getSongPlayed = function(songObj) {
        songObj['playedAt'] = new Date();
        $rootScope.songsPlayed.push(songObj);
      },

    listSongsPlayed = function() {
        var songs = [];
        angular.forEach($rootScope.songsPlayed, function(song) {
            songs.push(song.title);
        });
        return songs;
      }

    getAlbumPlayed = function(albumObj) {
        //songObj is the song before the song that starts via autoplay
        albumObj['playedAt'] = new Date();
        $rootScope.albumsPlayed.push(albumObj);
    },

    listAlbumsPlayed = function() {
        var albums = [];
        angular.forEach($rootScope.albumsPlayed, function(album) {
            albums.push(album.title);
        });
        return albums;
      },

    getArtistPlayed = function(artistObj) {
        //songObj is the song before the song that starts via autoplay
        artistObj['playedAt'] = new Date();
        $rootScope.artistsPlayed .push(albumObj);
    },

    listArtistsPlayed = function() {
        var artists = [];
        angular.forEach($rootScope.artistsPlayed, function(artist) {
            artists.push(artist.name);
        });
        return artists;
      },

    Metrics.getMetrics = function () {
        getArtistPlayed();
        getAlbumPlayed();
        getSongPlayed();
      }

    };

  angular
    .module('blocJams')
    .service('Metrics', ['$rootScope', 'SongPlayer', Metrics]);
})();
