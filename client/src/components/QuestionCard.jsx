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
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import QuestionCardHeader from './QuestionCardHeader';

function QuestionCard() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('Choose wisely');

  // Hooks to handle initial api fetch and next question api fetch
  const apiUri = 'https://g1-api.onrender.com/g1-exam-questions/'
  const [questionData, setQuestionData ] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)

  // Hook to handle loading spinner
  const [loadStatus, setLoadStatus] = useState(false)

  // Component did mount hook
  // Fetch api when component render
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
    setValue(null)
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
    
    <QuestionCardHeader/>  
    
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