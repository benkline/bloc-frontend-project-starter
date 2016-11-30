(function() {
    function DataCtrl(Metrics) {

    this.songoptions =
        {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 55
                },
                x: function(d){ return d.label; },
                y: function(d){ return d.value; },
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.4f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'X Axis'
                },
                yAxis: {
                    axisLabel: 'Y Axis',
                    axisLabelDistance: 30
                }
            }
        };

    var formatSongData = function(rawData){
        var formattedSongDataArray = [];

        for (datum in rawData) {
            var songObj = {"label" : datum, "value" : rawData[datum], "series":0};
            formattedSongDataArray.push(songObj);
          }

        return formattedSongDataArray;
    };

    this.songdata = [{"values":formatSongData(Metrics.songCounts())}]

    };

    angular
        .module('blocJams')
        .controller('DataCtrl', ['Metrics', DataCtrl]);
})();
