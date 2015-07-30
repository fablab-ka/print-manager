/*******************************************************************************
 * printrbot.js
 *
 * Configure a specific version of the serial printer.
 *
 ******************************************************************************/
var SerialPrinter = require('./drivers/serial');

var printrbotConfig = {
    // default pauseRetraction
    openPrime    : function () { return 'M115'; },
    // default pauseCommands
    // default resumeCommands
    // default stopCommands

    // default startCommandsFunc
    // default expandCodeFunc()
    // default validateReplyOKFunc()
};

/**
 * Our module export is a creation function that returns a Printrbot configured
 * SerialPrinter
 */
var createPrintrbot = function (data) {
    return new SerialPrinter(data, printrbotConfig);
};

module.exports = createPrintrbot;
