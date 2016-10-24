(function() {
    function SongPlayer() {

/**
* @desc  a variable set to an empty object so that the service returning this object sets its properties and methods public to the rest of the application.
*/
        var SongPlayer = {};
/**
* @desc sets variable to null to refresh app for each instance
*/
        var currentSong = null;
/**
* @desc Buzz object audio file
*/
        var currentBuzzObject = null;
/**
* @function setSong
* @desc Stops currently playing song and loads new audio file as currentBuzzObject
* @param {Object} song
*/
        var setSong = function(song){
          if (currentBuzzObject) {
            currentBuzzObject.stop();
            currentSong.playing = null;
          }

          currentBuzzObject = new buzz.sound(song.audioUrl, {
            formats: ['mp3'],
            preload: true
          });

          currentSong = song;
        };

/**
* @function playSong
* @desc sets currentBuzzObject to play and song.playing to true
* @param {Object} song
*/
        var playSong = function(song){
          currentBuzzObject.play();
          song.playing = true;
        }

/**
* @function SongPlayer.play
* @desc makes currentBuzzObject publicly available, checks to see if it selected song is already selected - if not, then sets and plays - if selected is set as seleted but is paused, then plays it
* @param {Object} song
*/
        SongPlayer.play = function(song) {
          if (currentSong !== song) {
            setSong(song);
            playSong(song);

          } else if (currentSong === song) {
              if (currentBuzzObject.isPaused()) {
                  playSong(song);
              }
          }
        };

/**
* @function SongPlayer.pause
* @desc makes currentBuzzObject publicly available, sets currentBuzzObject to paused and song.playing to false
* @param {Object} song
*/
        SongPlayer.pause = function(song) {
          currentBuzzObject.pause();
          song.playing = false;
        };

      return SongPlayer;
    }


    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
