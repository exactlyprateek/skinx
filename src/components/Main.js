import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './AppBar';
import { Container } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import MyDropzone from './MyDropzone';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
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

export default function FullWidthGrid() {
	const classes = useStyles();
	const [ age, setAge ] = React.useState('one');
	const handleChange = (event) => {
		setAge(event.target.value);
	};

	return (
		<span>
			<ButtonAppBar />
			<Container maxWidth="lg">
				<Typography className="pt-4" align="left" variant="h5" gutterBottom>
					AI for good
				</Typography>
				<div className={classes.root}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={4}>
							<Paper className={classes.paper}>
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
								<MyDropzone />

								<FormControl variant="outlined" className="mt-2" style={{width:"80%"}}>
									<InputLabel id="demo-simple-select-outlined-label">Test for</InputLabel>
									<Select
										labelId="demo-simple-select-outlined-label"
										id="demo-simple-select-outlined"
										value={age}
										onChange={handleChange}
										label="Test For"
									>
										<MenuItem value="two">
											<em>None</em>
										</MenuItem>
										<MenuItem value={10}>Cancer</MenuItem>
										<MenuItem value={20}>Cancer1</MenuItem>
										<MenuItem value={30}>Cancer2</MenuItem>
									</Select>
								</FormControl>
								
								<Button style={{width:"80%"}} className="mt-2" variant="outlined" color="primary">
									Predict
								</Button>
                                <Alert style={{width:"100%"}} className="mt-2" severity="success">
									Image uploaded successfully!
								</Alert>
							</Paper>
						</Grid>

						<Grid item xs={12} sm={4}>
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
						<Grid item xs={12} sm={4}>
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
