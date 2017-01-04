# alexa-glow
#### Skill to Control Alexa LED Light

 Enables the Alexa LED to glow for a set amount of time dependent on user input
 
 Times are as followed:
 +"one" - one minute glow
 +"two" - two minute glow
 +"three" - five minute glow 
 +"four" - ten minute glow
 +"five" - 30 minute glow
 +"six" - hour glow
 
 Example:
 "Alexa ask glow four" - LEDs will glow for 10 min
 
 see SampleUtterances.json for more ways to trigger each of the times



#### Set Up:
If you need help making this skill work on your alexa check out this [guide](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/content/fact-skill2-1) from Amazon.

Copy and paste the alexa-glow intent schema, and sample utterances into the appripriate fields in interaction model step

alexa-glow IntentSchema
```javascript
{
  "intents": [
    {
      "intent": "GetGlowONE"
    },
     {
      "intent": "GetGlowTWO"
    },
    {
      "intent": "GetGlowTHREE"
    },
     {
      "intent": "GetGlowFOUR"
    },
     {
      "intent": "GetGlowFIVE"
    },
     {
      "intent": "GetGlowSIX"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    }
  ]
}
```
alexa-glow SampleUtterances
```javascript
GetGlowONE one
GetGlowONE on one
GetGlowONE light one
GetGlowONE light on one
GetGlowONE turn on one

GetGlowTWO two
GetGlowTWO on two
GetGlowTWO light two
GetGlowTWO light on two
GetGlowTWO turn on two

GetGlowTHREE three
GetGlowTHREE Five Minute Glow
GetGlowTHREE turn on three
GetGlowTHREE light three

GetGlowFOUR four
GetGlowFOUR ten minute Glow
GetGlowFOUR turn on four
GetGlowFOUR light four

GetGlowFIVE five

GetGlowSIX six
GetGlowSIX hour


AMAZON.HelpIntent help
AMAZON.HelpIntent for help
AMAZON.StopIntent stop
AMAZON.StopIntent stop glow
```
Next all you have to do is replace the index.json in the SpaceFactsSkillsTemplate.json with index.json from alexa-glow.
