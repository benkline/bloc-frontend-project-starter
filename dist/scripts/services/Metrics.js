(function() {
  function Metrics($rootScope) {

    var Metrics = {};

    $rootScope.playInfo = [];
    // $rootScope.albumsPlayed = [];

    Metrics.registerPlayInfo = function(albumObj, songObj) {
        info={
            playedAt: new Date(),
            album: albumObj.title,
            artist: albumObj.artist,
            song: songObj.title
        };

        $rootScope.playInfo.push(info);

    };

    Metrics.songCounts = function(){
        var songs = {
            'title'     : '',
            'playedAt'  : '',
            'count'     : 0
        };
        for (var i in $rootScope.playInfo) {
            if songs['title'] = song
            songs['playedAt'] = playedAt
            song[count]++
        }

        return songs
    };

    // Metrics.getSong = function(songObj) {
    //     songObj['playedAt'] = new Date();
    //     $rootScope.songsPlayed.push(songObj);
    // }
    //
    // var albumObjAry = $rootScope.albumsPlayed;
    //
    // function songData(title, playedAt) {
    //     this.title = title;
    //     this.playedAt = playedAt;
    // };
    //
    // var artistData = {
    //     'artist'    : ,
    //     'playedAt'  :
    // };
    //
    // var albumData = {
    //     'title'     : ,
    //     'playedAt'  :
    // };
    //
    // function(){
    //     angular.forEach(albumObjAry, function(value, key) {
    //         this.push(key + ': ' + value);
    //     }, songData);
    // };
    //
    // function(){
    //     angular.forEach(albumObjAry, function(value, key) {
    //         this.push(key + ': ' + value);
    //     }, artistData);
    // };
    //
    // function(){
    //     angular.forEach(albumObjAry, function(value, key) {
    //         this.push(key + ': ' + value);
    //     }, albumData);
    // };



    return Metrics;
 }

  angular
    .module('blocJams')
    .service('Metrics', ['$rootScope', Metrics]);
})();
