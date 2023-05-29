import React from 'react'
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from '@mui/material/Popover';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import BugReportIcon from '@mui/icons-material/BugReport';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useFirestore } from '../contexts/FirestoreContext';
import CloseIcon from '@mui/icons-material/Close';
import { Checkmark } from 'react-checkmark'

export default function QuestionCardHeader() {

    // Hooks and Functions to handle more button popover
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const handleMoreClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleMoreClose = () => {
        setAnchorEl(null)
    }

    // Hooks and Functinos to handle report an issue dialog
    const [issueDialogOpen, setIssueDialogOpen] = React.useState(false)
    const handleIssueClick = () => {
        setIssueDialogOpen(prevIssueDialogOpen => !prevIssueDialogOpen)
    }

    // Hooks to handle submit successful fade 
    const [checked, setChecked] = React.useState(false);
    // Firestore context
    const { addIssue } = useFirestore()
    // Hook and State to handle issue description
    const [issueDescription, setIssueDescription] = React.useState('')
    // Function to handle submit issue
    const handleIssueSubmit = () => {
        addIssue(issueDescription)
        setChecked(true);
    }
    // Function to handle closing successful message
    const handleCloseSuccess = () => {
        setChecked(false)
    }

    return (
        <React.Fragment>
            <CardHeader action={
                <>
                    <IconButton onClick={handleMoreClick}>
                        <MoreVertIcon />
                    </IconButton>
                    <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleMoreClose}
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary='Save this question'
                            />
                        </ListItemButton>
                        <ListItemButton onClick={handleIssueClick}>
                            <ListItemIcon>
                                <BugReportIcon />
                            </ListItemIcon>
                            <ListItemText
                                primary='Report an issue'
                            />
                        </ListItemButton>

                        <Dialog open={issueDialogOpen} onClose={handleIssueClick}>
                            <DialogTitle>Report an Issue</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Please describe the issue, and we will get back to you after investigation. Thanks!
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Describe the issue"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => setIssueDescription(e.target.value)}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleIssueClick}>Cancel</Button>
                                <Button onClick={handleIssueSubmit}>Submit</Button>
                            </DialogActions>
                        </Dialog>



                    </Popover>
                </>
            }
            />

            <Dialog open={checked} onClose={handleCloseSuccess} PaperProps={{
                sx: {
                    width: '16em',
                    height: '16em',
                },
            }}>
                <DialogContent>

                    <DialogTitle>
                        <Checkmark />
                    </DialogTitle>
                    <DialogContentText>
                        Issue Submitted. We will get back to you as soon as possible! Thanks!
                    </DialogContentText>
                </DialogContent>
                <DialogActions disableSpacing={true}>
                    <Button onClick={handleCloseSuccess}>Close</Button>

                </DialogActions>
            </Dialog>

        </React.Fragment>
    )
}
