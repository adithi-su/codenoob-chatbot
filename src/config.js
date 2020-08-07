import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import LearningOptions from "./components/LearningOptions/LearningOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
botName: "Codenoob",
initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to 		learn?", {
      widget: "learningOptions",
    }),
  ],
 
 widgets: [
     {
     	widgetName: "learningOptions",
    	widgetFunc: (props) => <LearningOptions {...props} />,
     },
     {
      widgetName: "dsaLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Geeks for Geeks:DSA self-paced course",
            url:
              "https://practice.geeksforgeeks.org/courses/dsa-self-paced?source=google&medium=cpc&device=c&keyword=geeksforgeeks%20data%20structures&matchtype=b&campaignid=9546568041&adgroup=97966155295&gclid=EAIaIQobChMIoay0_KuJ6wIVSQ4rCh3m4QlNEAAYASAAEgJ_vvD_BwE",
            id: 1,
          },
          {
            text: "Codechef:DSA Learning Series",
            url:
              "https://www.codechef.com/LEARNDSA",
            id: 2,
          },
          {
            text: "Coursera",
            url: "https://www.coursera.org/specializations/data-structures-algorithms",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "cpLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "CodeChef",
            url:
              "https://www.codechef.com/",
            id: 1,
          },
          {
            text: "Codeforces",
            url:
              "https://codeforces.com/",
            id: 2,
          },
          {
            text: "Leetcode",
            url: "https://leetcode.com/",
            id: 3,
          },
        ],
      },
    },
    { 
      widgetName: "apiLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Mozilla:Introduction to web APIs",
            url:
              "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction",
            id: 1,
          },
          {
            text: "Freecodecamp:apis for beginners",
            url:
              "https://www.freecodecamp.org/news/apis-for-beginners-full-course/",
            id: 2,
          },
          {
            text: "APIs:Crash Course",
            url: "https://www.udemy.com/course/learn-apis/",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Introduction to JS",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Mozilla JS Guide",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Frontend Masters",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
    {
      widgetName: "mlLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Machine Learning by Stanford University",
            url:
              "https://www.coursera.org/learn/machine-learning",
            id: 1,
          },
          {
            text: "Geeksforgeeks:Machine Learning",
            url:
              "https://www.geeksforgeeks.org/machine-learning/",
            id: 2,
          },
          {
            text: "Hackerearth",
            url: "https://www.hackerearth.com/practice/machine-learning/prerequisites-of-machine-learning/basic-probability-models-and-rules/tutorial/",
            id: 3,
          },
        ],
      },
    },
 ],
}

export default config;