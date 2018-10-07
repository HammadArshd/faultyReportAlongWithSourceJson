$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/mh/learningo/automation/iljapavlovs/cucumber-jvm-parallel-template/src/test/resources/features/cheese.feature");
formatter.feature({
  "name": "Google Search For Cheese",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@cheese"
    }
  ]
});
formatter.scenario({
  "name": "Search for cheese",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@cheese"
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
  "name": "I search for \"Cheese!\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.iSearchFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "first result should contain word \"cheese\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefs.firstResultShouldContainWord(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I purposefully fail this scenario to get a screenshot",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefs.iPurposefullyFailThisFeature()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});