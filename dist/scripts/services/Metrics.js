(function() {
  function Metrics($rootScope) {

    var Metrics = {};

    $rootScope.playInfo = [];

    Metrics.registerPlayInfo = function(albumObj, songObj) {
        info= {
            playedAt: new Date(),
            album: albumObj.title,
            artist: albumObj.artist,
            song: songObj.title
        };

        $rootScope.playInfo.push(info);

    };



    Metrics.songCounts = function(){
        function songObj(title, playedAt, count){
            this.title = '';
            this.playedAt = [],
            this.count = 0
        };

        var songs = []

        songs.push(new songObj())

        for (p in songs){
            for (var i in $rootScope.playInfo) {
                if ($rootScope.playInfo[i].song == songs[p].title) {
                    songs[p].playedAt.push($rootScope.playInfo[i].playedAt);
                    songs[p].count++;
                } else if ($rootScope.playInfo[i].song != songs[p].title){
                    var newsong = new songObj()
                    newsong.title = $rootScope.playInfo[i].song
                    newsong.playedAt.push($rootScope.playInfo[i].playedAt);
                    newsong.count++;
                    songs.push(newsong)
                };
            };
            if (songs[p].title = ""){
                songs.pop(songs[p])
            };
        }

        console.log(songs);
        return songs;
    }


//http://jsfiddle.net/HUMxp/
        //
        // var songs = {};
        //
        // for (var i = 0; i < $rootScope.playInfo.length; i++)
        //     if (!songs.hasOwnProperty($rootScope.playInfo[i].song)) {
        //         songs[$rootScope.playInfo[i].song] = 0
        //     } else {
        //     songs[$rootScope.playInfo[i].song] += $rootScope.playInfo[i].count;
    //     }
    //     console.log(songs);
    //     return songs;
    // }

    return Metrics;
 }


  angular
    .module('blocJams')
    .service('Metrics', ['$rootScope', Metrics]);
})();
