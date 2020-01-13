/* Dependencies */
/* -------------------------------*/

const express = require('express');
const path = require('path');

/* Global variables and instances */
/* -------------------------------*/

const PORT = process.env.PORT || 3001;
const app = express();

/* MAIN */
/* -------------------------------*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// Send miscellaneous requests to the React app
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
