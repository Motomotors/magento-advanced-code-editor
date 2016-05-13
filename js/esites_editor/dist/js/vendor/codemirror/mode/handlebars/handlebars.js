!function(mod){"object"==typeof exports&&"object"==typeof module?mod(require("../../lib/codemirror"),require("../../addon/mode/simple"),require("../../addon/mode/multiplex")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../addon/mode/simple","../../addon/mode/multiplex"],mod):mod(CodeMirror)}(function(CodeMirror){"use strict";CodeMirror.defineSimpleMode("handlebars-tags",{start:[{regex:/\{\{!--/,push:"dash_comment",token:"comment"},{regex:/\{\{!/,push:"comment",token:"comment"},{regex:/\{\{/,push:"handlebars",token:"tag"}],handlebars:[{regex:/\}\}/,pop:!0,token:"tag"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"},{regex:/'(?:[^\\']|\\.)*'?/,token:"string"},{regex:/>|[#\/]([A-Za-z_]\w*)/,token:"keyword"},{regex:/(?:else|this)\b/,token:"keyword"},{regex:/\d+/i,token:"number"},{regex:/=|~|@|true|false/,token:"atom"},{regex:/(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/,token:"variable-2"}],dash_comment:[{regex:/--\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}],comment:[{regex:/\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}]});CodeMirror.defineMode("handlebars",function(config,parserConfig){var handlebars=CodeMirror.getMode(config,"handlebars-tags");return parserConfig&&parserConfig.base?CodeMirror.multiplexingMode(CodeMirror.getMode(config,parserConfig.base),{open:"{{",close:"}}",mode:handlebars,parseDelimiters:!0}):handlebars});CodeMirror.defineMIME("text/x-handlebars-template","handlebars")});