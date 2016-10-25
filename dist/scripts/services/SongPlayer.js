(function() {
    function SongPlayer(Fixtures) {

/**
* @desc  a variable set to an empty object so that the service returning this object sets its properties and methods public to the rest of the application.
*/
        var SongPlayer = {};

/**
* @desc retrieves, and when changed, stores, the current album
*/
        var currentAlbum = Fixtures.getAlbum();

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
            SongPlayer.currentSong.playing = null;
          }

          currentBuzzObject = new buzz.sound(song.audioUrl, {
            formats: ['mp3'],
            preload: true
          });

          SongPlayer.currentSong = song;
        };

/**
* @desc retrieves, and when changed, stores, the current index of the song object within the current album's songs array
*/
        var getSongIndex = function(song){
          return currentAlbum.songs.indexOf(song);
        };

/**
* @desc Active song object from list of songs
* @type {Object}
*/
        SongPlayer.currentSong = null;

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
* @function stopSong
* @desc sets currentBuzzObject to stop and song.playing to false
* @param {Object} song
*/
        var stopSong = function(song){
          currentBuzzObject.stop();
          SongPlayer.currentSong.playing = null;
        }

/**
* @function SongPlayer.play
* @desc makes currentBuzzObject publicly available, checks to see if it selected song is already selected - if not, then sets and plays - if selected is set as seleted but is paused, then plays it
* @param {Object} song
*/
        SongPlayer.play = function(song) {
          song = song || SongPlayer.currentSong;
          if (SongPlayer.currentSong !== song) {
            setSong(song);
            playSong(song);

          } else if (SongPlayer.currentSong === song) {
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
          song = song || SongPlayer.currentSong;
          currentBuzzObject.pause();
          song.playing = false;
        };

/**
* @function SongPlayer.previous
* @desc sets currentSongIndex and decrements the index by one, then uses setSong and playSong. Checks to see if currentSongIndex is less than zero and clears index if it is.
* @param {Object}
*/
        SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

             if (currentSongIndex < 0) {
                 stopSong(song);
               } else {
                 var song = currentAlbum.songs[currentSongIndex];
                 setSong(song);
                 playSong(song);
               }
        };
/**
* @function SongPlayer.next
* @desc sets currentSongIndex and decrements the index by one, then uses setSong and playSong. Checks to see if currentSongIndex is greater than album length and clears index if it is.
* @param {Object}
*/
      SongPlayer.next = function() {
          var currentSongIndex = getSongIndex(SongPlayer.currentSong);
          currentSongIndex++;

           if (currentSongIndex > currentAlbum.songs.length) {
               stopSong(song);
             } else {
               var song = currentAlbum.songs[currentSongIndex];
               setSong(song);
               playSong(song);
             }
      };

      return SongPlayer;
    }


    angular
        .module('blocJams')
        .factory('SongPlayer', SongPlayer);
})();
