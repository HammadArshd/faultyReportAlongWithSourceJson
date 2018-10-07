$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/mh/learningo/automation/iljapavlovs/cucumber-jvm-parallel-template/src/test/resources/features/eggs.feature");
formatter.feature({
  "name": "Google Search For Eggs",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@eggs"
    }
  ]
});
formatter.scenario({
  "name": "Search for eggs",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@eggs"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I navigate to Google page",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefs.iNavigateToGoogleCom()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search for \"Eggs!\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.iSearchFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "first result should contain word \"eggs\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.firstResultShouldContainWord(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});