import * as React from 'react';
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

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from '@mui/material/IconButton';


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

  let correctAnswer = mockData.answer

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

          <FormControlLabel value="1" control={<Radio />} label={mockData.option1} />
          <FormControlLabel value="2" control={<Radio />} label={mockData.option2} />
          <FormControlLabel value="3" control={<Radio />} label={mockData.option3} />
          <FormControlLabel value="4" control={<Radio />} label={mockData.option4} />

        </RadioGroup>

        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined"> Check Answer </Button>
        <Button sx={{ mt: 1, mr: 1 }} variant="outlined"> Next Question </Button>
        <Button sx={{ mt: 1, mr: 1 }} variant="outlined"> Previous Question </Button>
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
    <Box sx={{ display: 'flex', flexDirection: "column", justifyContent:'center', alignItems:"center", height: "100vh", padding: 5 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}



