import express from 'express';
import jsonGraphqlExpress from 'json-graphql-server';

import DATA from './data.js';

const PORT = 3001;
const app = express();
const data = DATA;

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

	if (req.method === 'OPTIONS') {
		return res.sendStatus(200);
	}

	next();
});

app.use('/graphql', jsonGraphqlExpress(data));

app.listen(PORT, () => {
	console.log('Server is running on port 3001');
});
