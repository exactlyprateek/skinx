import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './AppBar';
import { Container } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';

import Alert from '@material-ui/lab/Alert';
import Upload from './Upload';



const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary
	}
}));
// function setToken(userToken) {
// 	sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
// 	const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

export default function Main() {

	const classes = useStyles();


	
	return (
		<span>
			<ButtonAppBar />
			<Container maxWidth="lg">
				<Typography className="pt-4" align="left" variant="h5" gutterBottom>
					AI for good
				</Typography>
				<div className={classes.root}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Paper align="center" className={classes.paper}>
								<Typography className="py-2" align="left" variant="p">
									Choose an Image
								</Typography>
								{/* <input
									accept="image/*"
									className={classes.input}
									id="contained-button-file"
									multiple
									type="file"
								/>
								<label htmlFor="contained-button-file">
									<Button variant="contained" color="primary" component="span">
										Upload
									</Button>
								</label> */}
								{/* <MyDropzone /> */}
								<Upload />
								
								
								<div className="ml-4">
									<div className="ml-4">
										<Alert style={{ width: '82%' }} className="mt-2 ml-4 " severity="error">Image not uploaded Try Again!</Alert>
										<Alert style={{ width: '82%' }} className="mt-2 ml-4 " severity="success">
											Image uploaded successfully!
										</Alert>
									</div>{' '}
								</div>
							</Paper>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Paper className={classes.paper}>
								<Typography align="left" variant="h5" gutterBottom>
									Original Image
								</Typography>
								<img alt="150" src="https://via.placeholder.com/150" />
								<Alert className="mt-2" severity="success">
									Some other options are shown aside!
								</Alert>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={12}>
							<Paper className={classes.paper}>
								<Typography className="pt-2" align="left" variant="h5" gutterBottom>
									Some Other Examples
								</Typography>
								<Grid container spacing={2}>
									{[ '1', '2', '3', '4', '5', '6' ].map((i, idx) => (
										<Grid item xs={6} sm={6}>
											<img alt={idx} src={`https://via.placeholder.com/150?text=${i}`} />
										</Grid>
									))}
								</Grid>
							</Paper>
						</Grid>
					</Grid>
				</div>
			</Container>
		</span>
	);
}
