import * as React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Pagination from '@mui/material/Pagination';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

function QuestionCard() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  // Hooks to handle initial api fetch and next question api fetch
  const apiUri = 'https://g1-api.onrender.com/g1-exam-questions/'
  const [questionData, setQuestionData ] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  //hool to handle loading spinner
  const [loadStatus, setLoadStatus] = useState(false)

  // component did mount hook
  // fetch api when component render
  useEffect(() => {
    axios.get(apiUri)
      .then(res => {
        setQuestionData(res.data)
        setLoadStatus(true)
      })
  }, []);

  const handlePageChange = (event, pageSelected) => {
    console.log(questionData[pageSelected])
    setCurrentQuestion(pageSelected-1) // since array index starts at 0. -1 to match array index
  }

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === questionData[currentQuestion].answer) {
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

  // Question component
  function Question() {
    if(questionData[currentQuestion].question.startsWith('=IMAGE')) {
      const regex = /=IMAGE\("(.+)"\)/;
      const match = regex.exec(questionData[currentQuestion].question);
      const imagePath = match[1];

      return (
        <Box><img src={imagePath} alt="question" style={{ width: '9em', height: '9em' }} /></Box>
      );
    } else {
      return (
        <Typography variant="h5" > {questionData[currentQuestion].question} </Typography>
      )
    }
  }

  const cardContent = 
  <>
    <CardHeader action={<IconButton>
      <MoreVertIcon />
    </IconButton>}/>
      
    <CardContent sx={{height:'10em'}}>
      { questionData && <Typography paragraph> Question: {questionData[currentQuestion].questionNumber} </Typography>}

      { questionData && <Question/>}
      
    </CardContent>
    
      <form onSubmit={handleSubmit} style={{margin:'1em'}}>
          <FormLabel>Please select your answer...</FormLabel>
          
          <RadioGroup value={value} onChange={handleRadioChange}>
            {questionData && <FormControlLabel value="0" control={<Radio />} label={questionData[currentQuestion].option1} />}
            {questionData && <FormControlLabel value="1" control={<Radio />} label={questionData[currentQuestion].option2} />}
            {questionData && <FormControlLabel value="2" control={<Radio />} label={questionData[currentQuestion].option3} />}
            {questionData && <FormControlLabel value="3" control={<Radio />} label={questionData[currentQuestion].option4} />}
          </RadioGroup>

          <FormHelperText error={error}>{helperText}</FormHelperText>
          
          <Box display='flex' justifyContent='center'>
            <Button type="submit" variant="outlined"> Check Answer </Button>
          </Box>  
      </form>

      <Box display='flex' justifyContent='center'>
        <Pagination count={161} variant="outlined" showFirstButton showLastButton onChange={handlePageChange} />
      </Box>
    </>

    const loadingContent = 
    <>
    <Grid container display='flex' flexDirection='column' justifyContent='center' alignItems='center' sx={{height:'65vh'}}>
      <Grid item >
        <CircularProgress/>
      </Grid>

    </Grid>
    </>

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", marginBottom:'12em', marginTop:'5em' }}>
      <Card variant="outlined" sx={{padding:'1em', width:'35em'}}>
          
          {loadStatus? cardContent : loadingContent }

      </Card>
    </Box>
  );
}

export default QuestionCard;

/* mockdata
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
*/