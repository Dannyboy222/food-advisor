import React, { useState } from 'react';
import {
	CircularProgress,
	Grid,
	Typography,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
} from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = () => {
	const classes = useStyles();
	const [type, setType] = useState('Restaurants');
	const [rating, setRating] = useState('');
	const places = [
		{ name: 'cool place' },
		{ name: 'best beer' },
		{ name: 'best steak' },
	];
	return (
		<div className={classes.container}>
			<Typography variant="h4">
				Restaurants, Hotels, and Attractions around you
			</Typography>
			<FormControl className={classes.formControl}>
				<InputLabel>Type</InputLabel>
				<Select value={type} onChange={(e) => setType(e.target.value)}>
					<MenuItem value="restaurants">Restaurants</MenuItem>
					<MenuItem value="restaurants">Hotels</MenuItem>
					<MenuItem value="restaurants">Attractions</MenuItem>
				</Select>
			</FormControl>
			<FormControl className={classes.formControl}>
				<InputLabel>Rating</InputLabel>
				<Select value={type} onChange={(e) => setRating(e.target.value)}>
					<MenuItem value={0}>All</MenuItem>
					<MenuItem value={3}>Above 3.0</MenuItem>
					<MenuItem value={4}>Above 4.0</MenuItem>
					<MenuItem value={4.5}>Above 4.5</MenuItem>
				</Select>
			</FormControl>
			<Grid container spacing={3} className={classes.list}>
				{places?.map((place, i) => (
					<Grid item key={i} xs={12}>
						<PlaceDetails place={place} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default List;
