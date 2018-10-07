$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/mh/learningo/automation/iljapavlovs/cucumber-jvm-parallel-template/src/test/resources/features/milk.feature");
formatter.feature({
  "name": "Google Search For Milk",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@milk"
    }
  ]
});
formatter.scenario({
  "name": "Search for milk",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@all"
    },
    {
      "name": "@milk"
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
  "name": "I search for \"Milk!\"",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefs.iSearchFor(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "first result should contain word \"milk\"",
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