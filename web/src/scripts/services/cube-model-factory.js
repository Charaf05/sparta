(function () {
  'use strict';

  angular
    .module('webApp')
    .factory('CubeModelFactory', CubeModelFactory);

  function CubeModelFactory() {
    var cube = {};

    function init() {
      cube.name = "";

      cube.dimensions = [];
      cube.operators = [];
      cube.checkpointConfig = {};
      cube.checkpointConfig.timeDimension = "";
      cube.checkpointConfig.interval = null;
      cube.checkpointConfig.timeAvailability = null;
      cube.checkpointConfig.granularity = "";
    };

    return {
      ResetCube: function () {
        init();
      },
      GetCube: function () {
        if (Object.keys(cube).length == 0) init();
        return cube;
      }
    }
  }

})
();

