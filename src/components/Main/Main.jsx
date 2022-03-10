import React from 'react';
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from "./Styles";
import Form from "./Form/Form.jsx";
import List from "./List/List.jsx";

const Main = () => {
    const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Powered by Speechly"></CardHeader>
        <CardContent>
            <Typography align="center" variant="h5">Total Balance $100</Typography>
            <Typography variant="subtitle1" style={{lineHeight:'1.5em', marginTop:'20px'}}>
                {/*InfoCard...*/}
                Try Saying: Add income for $100 in Category Salary for Monday... 
            </Typography>
            <Divider></Divider>
            <Form></Form>
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List></List>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main