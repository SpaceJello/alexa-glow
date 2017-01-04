/*
 * Alex O
 * 1/1/2017
 * version 1.0
 * Enables the Alexa LED to glow for a set amount of time dependent on user input
 * Times are as followed
 * "one" - one minute glow
 * "two" - two minute glow
 * "three" - five minute glow 
 * "four" - ten minute glow
 * "five" - 30 minute glow
 * "six" - hour glow
 *
 * Example Use
 * "Alexa ask glow one"
 */

'use strict';
var Alexa = require('alexa-sdk');
var APP_ID =  ''; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Get Glow';


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var minGlow = '<break time="10s"/> <break time="10s"/> <break time="10s"/><break time="10s"/> <break time="10s"/> <break time="10s"/>';
var time = 0;
var timeOutput = '';

var handlers = {
    //function used for one minute glow
    'GetGlowONE': function () {
        time = 1;
        timeOutput = 'one minute glow';
        this.emit('EnableGlow');

    },
	//function used for two minute glow
    'GetGlowTWO' : function (){
        time = 2;
        timeOutput = 'two minute glow';
        this.emit('EnableGlow');
    },
	//function used for five minute glow
    'GetGlowTHREE' : function (){
        time = 5;
        timeOutput = 'five  minute glow';
        this.emit('EnableGlow');

    },
	//function used for 10 minute glow
    'GetGlowFOUR' : function (){
        time = 10;
        timeOutput = 'ten minute glow';
        this.emit('EnableGlow');

    },
	//function used for 30 minute glow
    'GetGlowFIVE' : function (){
        time = 30;
        timeOutput = 'thirty minute glow';
        this.emit('EnableGlow');

    },
	//function used for hour glow
    'GetGlowSIX' : function (){
        time = 60;//max 67
        timeOutput = 'hour glow';
        this.emit('EnableGlow');

    },
    'Unhandled' : function () {
        this.emit(':ask','Sorry, I/"m not sure what you asked me.');
    },
    
    'EnableGlow': function () {

		var speechOutput = timeOutput;
		timeOutput = '';//reset time output
		//for loop to assign the correct pause time to speechOutput
		for(var x = 0; x < time; x++){
		    speechOutput = speechOutput + minGlow
		}
		//output
        this.emit(':tell', speechOutput)
        speechOutput = '';//reset speechOutput
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can ask me to turn on glow followed by the time interval ";
        this.emit(':tell', speechOutput);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
