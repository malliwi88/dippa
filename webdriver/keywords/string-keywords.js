"use strict";

var _ = require('underscore');

module.exports = {
    "Join": function() {
        var args = _.toArray(arguments);
        var next = _.head(args);
        var xs = _.tail(args, 1);

        next(xs.join(''));
    }
};