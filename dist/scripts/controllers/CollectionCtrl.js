(function() {
    function CollectionCtrl(Fixtures) {
      this.albums = Fixtures.getCollection(4);
      // this.albums = [];
      // for (var i=0; i < 12; i++) {
      //   this.albums.push(Fixtures.getAlbum());
      // }
    }

    angular
        .module('blocJams')
        .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
})();
