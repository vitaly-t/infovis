const exampleSurvey = {
 pages: [
  {
   name: "page1",
   questions: [
    {
     type: "matrix",
     columns: [
      {
       value: "1",
       text: "very disatisfied"
      },
      {
       value: "2 ",
       text: "somewhat disatisfied"
      },
      {
       value: "3",
       text: "neutral"
      },
      {
       value: "4",
       text: "somewhat satisfied"
      },
      {
       value: "5",
       text: "satisfied"
      }
     ],
     name: "question1",
     rows: [
      "1"
     ],
     title: "How confident are you in your answer?"
    },
    {
     type: "matrix",
     columns: [
      {
       value: "1",
       text: "very disatisfied"
      },
      {
       value: "2 ",
       text: "somewhat disatisfied"
      },
      {
       value: "3",
       text: "neutral"
      },
      {
       value: "4",
       text: "somewhat satisfied"
      },
      {
       value: "5",
       text: "satisfied"
      }
     ],
     name: "question2",
     rows: [
      "1"
     ],
     title: "Satisfaction"
    }
   ]
  }
 ]
};


const demographic = {
 pages: 
  [
    {
      name: "page1",
      questions: [

        // 1. Email
        {
          name: "email",
          type: "text",
          inputType: "email",
          title: "Email",
        },

        // 2. Age
        {
          name: "age",
          type: "text",
          inputType: "number",
          title: "Age",
        },

        // 3. Gender
        {
          name: "gender",
          title: "Gender",
          type: "dropdown",
          isRequired: true,
          choices: [
            {
             value: "male",
             text: "Male"
            },
            {
             value: "female",
             text: "Female"
            },
          ],
        },

        // 4. Education
        {
          name: "education",
          title: "Education",
          type: "dropdown",
          isRequired: true,
          choices: [
            {
             value: "1",
             text: "High School"
            },
            {
             value: "2",
             text: "Some College"
            },
            {
             value: "3",
             text: "Bachelor’s Degree"
            },
            {
             value: "4",
             text: "Master's Degree"
            },
            {
             value: "5",
             text: "Professional Degree"
            },
            {
             value: "6",
             text: "Doctorate Degree"
            },
            {
             value: "7",
             text: "other"
            }
          ],
        },

        // 5. Experience
        {
          name: "experience",
          type: "matrix",
          columns: [
            {
              value: "1",
              text: "disagree"
            },
            {
              value: "2",
              text: "somewhat disagree"
            },
            {
              value: "3",
              text: "neutral"
            },
            {
              value: "4",
              text: "somewhat agree"
            },
            {
              value: "6",
              text: "agree"
            }
          ],
          
          rows: [
            {
              value: "stats",
              text: "I have experience with statistics",
            },
            {
              value: "charts",
              text: "I have experience using charts or graphs to solve problems",
            },
            {
              value: "cbm",
              text: "I am familiar with progress monitoring and Curriculum Based Measures (CBM)",
            },
          ],
          isRequired: true
        },
      ]
    }
  ],
  completedHtml: '<p>woo hoo</p>'
}

const multipleChoice = {
 pages: [
  {
   name: "q1",
   questions: [
    {
     type: "radiogroup",
     choices: [
      {
       value: "1",
       text: "first item"
      },
      {
       value: "2",
       text: "second item"
      },
      {
       value: "3",
       text: "third item"
      }
     ],
     name: "question2"
    }
   ]
  }
 ]
};

const constants = {
  SURVEY_DEMOGRAPHIC: demographic,
  SURVEY_EXAMPLE: exampleSurvey,
  MULTIPLE_CHOICE: multipleChoice,
};

export default constants;
