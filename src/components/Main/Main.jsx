import React, { useContext } from 'react';
import { Card, CardHeader, CardContent,Typography, Grid, Divider } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../Context/context';
import InfoCard from '../InfoCard';
import Form from './Form/Form';
import List from './List/List';
import useStyles from './styles';


const Main = () => {
    const { balance } = useContext(ExpenseTrackerContext);
    const classes = useStyles();
    return (
        <Card className={classes.root}>
           <CardHeader title="Expense Tracker" subheader="Powered by Speechly"/>
           <CardContent>
               <Typography align='center' variant='h5'> Total Balance ${balance} </Typography>
               
               <Typography variant='subtitle1' style={{ lineHeight:'1.5em', marginTop:'20px' }}> 
                    <InfoCard />
               </Typography>
                <Divider />
                <Form />
           </CardContent>
           <CardContent className={classes.cardContent}>
               <Grid container spacing={2}>
                   <Grid item xs={12}>
                            <List />
                   </Grid>
               </Grid>

           </CardContent>
        </Card>
    );
}

export default Main;
