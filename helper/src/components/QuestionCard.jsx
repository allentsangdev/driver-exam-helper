import * as React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';

// mockdata
const mockData = {
  _id: "641577fa7d058360fb2fc9e7",
    questionNumber: "161",
    question: "When approaching an intersection and the traffic lights are not working, you should:",
    option1: "Yield to the traffic to your right",
    option2: "Wait until there are no vehicles before proceeding",
    option3: "Treat it as an all-ways stop sign",
    option4: "Slow down and proceed with caution",
    answer: "2"
}

function AnswerForm() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  // Hooks to handle initial api fetch and next question api fetch
  const [currentQuestion, setCurrentQuestion] = useState(1)
  const apiUri = 'https://g1-api.onrender.com/g1-exam-questions/'
  const [questionData, setQuestionData] = useState([])
  let correctAnswer = questionData.answer

  const fetchApi = () => {
    axios.get(apiUri)
    .then(response=>{
      setQuestionData(response.data)
      console.log(questionData[1])
  })}

  const handleNextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1)
    console.log(currentQuestion)
    //setApiUri('https://g1-api.onrender.com/g1-exam-questions/questionNumber/' + currentQuestion)
    fetchApi()
  }

  const handlePreviousQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1)
    console.log(currentQuestion)
    //setApiUri('https://g1-api.onrender.com/g1-exam-questions/questionNumber/' + currentQuestion)
    fetchApi()
  }

  // component did mount hook
  // fetch api when component render
  useEffect(()=>{
    fetchApi()
  },[])

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === correctAnswer) {
      setHelperText('You got it!');
      setError(false);
    } else if (value === '') {
      setHelperText('Please select an option');
      setError(true);
    } else {
      setHelperText('Incorrect');
      setError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <FormLabel>Please select your answer...</FormLabel>
        <RadioGroup value={value} onChange={handleRadioChange}>

          <FormControlLabel value="1" control={<Radio />} label={questionData.option1} />
          <FormControlLabel value="2" control={<Radio />} label={questionData.option2} />
          <FormControlLabel value="3" control={<Radio />} label={questionData.option3} />
          <FormControlLabel value="4" control={<Radio />} label={questionData.option4} />

        </RadioGroup>

        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined"> Check Answer </Button>
        <Button sx={{ mt: 1, mr: 1 }} variant="outlined" onClick={handleNextQuestion}> Next Question </Button>
        <Button sx={{ mt: 1, mr: 1 }} variant="outlined" onClick={handlePreviousQuestion}> Previous Question </Button>
      </FormControl>
    </form>
  );
}

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14}}> Question: {mockData.questionNumber} </Typography>
      <Typography variant="h5" component="div" sx = {{marginTop:2}}> {mockData.question} </Typography>
    </CardContent>
    <CardActions>
      <AnswerForm/>
    </CardActions>
  </React.Fragment>
);

export default function QuestionCard() {
  return (
    <Box sx={{ display: 'flex', flexDirection: "column", justifyContent:'center', alignItems:"center", padding: '65px 30px 0px 30px' , marginTop: 0 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}



