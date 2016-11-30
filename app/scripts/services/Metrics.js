(function() {
  function Metrics($rootScope) {

    var Metrics = {};

    $rootScope.playInfo = [];

    Metrics.registerPlayInfo = function(albumObj, songObj) {
        info= {
            playedAt: new Date(),
            album: albumObj.title,
            artist: albumObj.artist,
            title: songObj.title
        };

        $rootScope.playInfo.push(info);

    };

    Metrics.songCounts = function() {

        var songs = {};

        for (var i = 0; i < $rootScope.playInfo.length; i++) {
            var song = $rootScope.playInfo[i];

            if (!songs.hasOwnProperty(song.title)) {
                songs[song.title] = 1;
            } else {
                songs[song.title] += 1;
            }
        }

        console.log(songs);
        return songs;

    }

    return Metrics;
 }


  angular
    .module('blocJams')
    .service('Metrics', ['$rootScope', Metrics]);
})();
