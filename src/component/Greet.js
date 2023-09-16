import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Input, colors } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Rating, { IconContainerProps } from '@mui/material/Rating';


// function Greet(){
//     return <h1>Hello Shruti</h1>
// }

// const Greet = () => <h1>Hello Shruti</h1>

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Greet() {
    return (
        <div style={{ marginLeft: "20%", marginTop: "20px", width: "30%" }}>
            <Box
                component="form"
                sx={{
                    mx: "auto",
                    height: 550,
                    width: 800,
                    p: 2,
                    m: 1,
                    border: "5px solid",
                    borderRadius: "16px",
                    borderColor: "primary.main",
                   
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <h2 style={{color: "royalblue", marginBottom:'0.5em'}}>REGISTRATION</h2>
                </div>
                
                <TextField
                    fullWidth
                    multiline
                    variant="filled"
                    label="UserName"
                    id="fullWidth"
                    color="primary" 
                    margin="normal"
                    size="small"
                    focused
                />
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={8}>
                    <TextField
                        fullWidth
                        id="filled-multiline-flexible"
                        label="First Name"
                        multiline
                        maxRows={4}
                        variant="filled"
                        color="primary" 
                        margin="normal"
                        size="small"
                        focused
                        />
                    </Grid>
                    <Grid item xs={8}>
                    <TextField
                        fullWidth
                        id="filled-multiline-flexible"
                        label="Last Name"
                        multiline
                        maxRows={4}
                        variant="filled"
                        color="primary" 
                        margin="normal"
                        size="small"
                        focused
                        />
                    </Grid>
                </Grid>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />



                
                <TextField
                    fullWidth
                    variant="filled"
                    label="Email"
                    id="fullWidth"
                    color="primary"
                    margin="normal"
                    size="small"
                    focused
                />
                <TextField
                    fullWidth
                    variant="filled"
                    label="Password"
                    type="password"
                    id="fullWidth"
                    color="primary"
                    margin="normal"
                    size="small"
                    focused
                />
                <TextField
                    fullWidth
                    variant="filled"
                    label="Confirm Password"
                    id="fullWidth"
                    color="primary"
                    margin="normal"
                    size="small"
                    focused
                />
                <Stack spacing={1}>
                    <Rating name="size-medium" defaultValue={2} />
                </Stack>
                <Button fullWidth variant="contained" color="primary">Subscribe</Button>
            </Box>
        </div>
    );
}
export default Greet;
