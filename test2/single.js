
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    "title": "Employment Reference Check",
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "question1",
                    "title": "What is your relationship with the candidate?"
                },
                {
                    "type": "comment",
                    "name": "question2",
                    "title": "How would you describe the candidate’s reliability and dependability?"
                },
                {
                    "type": "comment",
                    "name": "question3",
                    "title": "What are the candidate’s strengths and weaknesses?"
                },
                {
                    "type": "comment",
                    "name": "question4",
                    "title": "What was one of the candidate’s most memorable accomplishments while working with you?"
                },
                {
                    "type": "comment",
                    "name": "question5",
                    "title": "What type of work environment do you think the candidate would be most likely to thrive in, and why?"
                },
                {
                    "type": "comment",
                    "name": "question6",
                    "title": "What skills would you have liked to see the candidate develop to reach their full potential?"
                },
                {
                    "type": "comment",
                    "name": "question7",
                    "title": "How did the candidate handle stress/conflict/pressure?"
                },
                {
                    "type": "rating",
                    "name": "question8",
                    "title": "How would you rate the candidate's listening and communication skills?",
                    "rateMax": 10
                },
                {
                    "type": "comment",
                    "name": "question9",
                    "title": "What else should we know about the candidate?"
                },
                {
                    "type": "boolean",
                    "name": "question10",
                    "title": "Would you recommend this candidate?"
                }
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "single_thanks.html";
    });

$("#surveyElement").Survey({ model: survey });