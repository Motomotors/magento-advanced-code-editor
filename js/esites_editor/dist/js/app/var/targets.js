define(["../module/util","./plugin"],function(util,plugin){"use strict";var targets=["#htmlSource","#template_text"];util.isArray(plugin.settings.selectors)&&(targets=targets.concat(plugin.settings.selectors));return document.querySelectorAll(targets.join())});