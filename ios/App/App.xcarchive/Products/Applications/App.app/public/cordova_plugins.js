
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "cordova-plugin-calendar.Calendar",
          "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
          "pluginId": "cordova-plugin-calendar",
        "clobbers": [
          "Calendar"
        ]
        },
      {
          "id": "cordova-plugin-badge.Badge",
          "file": "plugins/cordova-plugin-badge/www/badge.js",
          "pluginId": "cordova-plugin-badge",
        "clobbers": [
          "cordova.plugins.notification.badge"
        ]
        },
      {
          "id": "cordova-plugin-device.device",
          "file": "plugins/cordova-plugin-device/www/device.js",
          "pluginId": "cordova-plugin-device",
        "clobbers": [
          "device"
        ]
        },
      {
          "id": "cordova-plugin-ionic.common",
          "file": "plugins/cordova-plugin-ionic/dist/common.js",
          "pluginId": "cordova-plugin-ionic",
        "clobbers": [
          "IonicCordova"
        ]
        },
      {
          "id": "cordova-plugin-ionic.guards",
          "file": "plugins/cordova-plugin-ionic/dist/guards.js",
          "pluginId": "cordova-plugin-ionic",
        "runs": true
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-badge": "0.8.8",
      "cordova-plugin-calendar": "5.1.6",
      "cordova-plugin-device": "2.1.0",
      "cordova-plugin-ionic": "5.5.3"
    };
    // BOTTOM OF METADATA
    });
    