import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
// import react, { useState,useEffect } from "react";
// import Tooltip from '@material-ui/core/Tooltip';
// import AddIcon from '@material-ui/icons/Add';
// import DeleteIcon from '@material-ui/icons/Delete';
// import Button from '@material-ui/core/Button';





const About = () => {


        const history = useHistory();
      const [userData, setUserData] = useState({});

      const AboutPage = async() => {
            try {
                  const res =  await fetch('/about', {
                        method: "GET",
                        headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json"
      
                        },
                        credentials: "include"

                  });

                  const data = await res.json();
                  console.log(data);
                  setUserData(data);

                  if (!res.status === 200) {
                        const error = new Error(res.error);
                        throw error;

                  }
                 

            } catch (err) {
                  console.log(err);
                  history.push('/login');

            }

      }

      useEffect(() => {
            AboutPage();
           
      }, []);
     
      return (
        <>
        <h1>Why Quora Exists</h1>
        <h1>{ userData.name }</h1>
        <div className="para">
        <p>Quora’s mission is to share and grow the world’s knowledge. A vast amount of the knowledge that would be valuable to many people is currently only available to a few — either locked in people’s heads, or only accessible to select groups. We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge for the benefit of the rest of the world.</p>
        </div>
        <img src="img/text-books.jpg" height="500px" width="500px" alt=""></img>
        <h1>Gather Around a Question</h1>
        <div className="para">
        The heart of Quora is questions — questions that affect the world, questions that explain recent world events, questions that guide important life decisions, and questions that provide insights into why other people think differently. Quora is a place where you can ask questions you care about and get answers that are amazing.<br/>

Quora has only one version of each question. It doesn’t have a left wing version, a right wing version, a western version, and an eastern version. Quora brings together people from different worlds to answer the same question, in the same place — and to learn from each other. We want Quora to be the place to voice your opinion because Quora is where the debate is happening. We want the Quora answer to be the definitive answer for everybody forever.
        </div>
        <h1>Understand The World and The People In It</h1>
        <div className="para">
        Quora has content you will feel good about having read. Quora helps you understand why the world works the way it does, why people behave the way they do, and what we can all do to make the world better. Quora provides a personalized feed of insightful answers to questions you hadn’t realized you should ask.<br/>

Quora’s answers come from people who really understand the issues and have first-hand knowledge. Quora is the place to read Barack Obama on the Iran deal, prisoners on life in prison, scientists on global warming, police officers on how to deter burglars, and TV producers on how their shows are made. Quora is the place to read inspiring people such as Gloria Steinem, Stephen Fry, Hillary Clinton, Glenn Beck, Sheryl Sandberg, Vinod Khosla, and Gillian Anderson directly answering the questions people most wanted them to answer. Quora is where you can read important insights that have never been shared anywhere else, from people you could never reach any other way.

        </div>


        
       
    
        </>
      )
    }
    export default About;