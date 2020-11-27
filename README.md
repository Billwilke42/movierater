## Year One API Challenge
[Bill Wilke](https://alumni.turing.io/alumni/bill-wilke)
#### Back-End Repo
https://github.com/Billwilke42/movie-rater-api

### Abstract

This challenge was completed YearOne. The challenge was to build a small web application that allows a user to search for a movie title, click on that movie title for more information, and give that movie a thumbs up or thumbs down. The challenge instructions allowed me to use and API of my choice for the search and displaying the movies information. For giving a rating of the selected movie, I had to make an API to save implement some type of storage or database to persist movie titles and how many thumbs up or thumbs down they’ve received.

### Technology Used

- React
- JavaScript
- React and Jest testing libraries
- React Router
- Git
- Travis-CI
- CSS
- Postgres
- Node.js
- Express.js

## Set Up

1. If you do not have Postgres installed, go to their site and follow the docs: https://www.postgresqltutorial.com/install-postgresql/

2. Go to the Back-End repo here: https://github.com/Billwilke42/movie-rater-api and clone it.

3. Cd into movie-rater-api folder and run in your terminal: 

```bash
$ npm install
```

4. On your command line run: 

```bash
$ psql

$ CREATE DATABASE movieapi;

$ CREATE TABLE ratings (imdb_id text, thumbs_up integer, thumbs_down integer, title text);

$ SELECT * FROM ratings;
```

If everything went well you should see something like this on your command line: 

[![Screen-Shot-2020-11-27-at-10-40-34-AM.png](https://i.postimg.cc/sX2vwvyC/Screen-Shot-2020-11-27-at-10-40-34-AM.png)](https://postimg.cc/ns6FLVC3)

5. Open a new terminal window.

6. Cd into movie-rater-api

7. Run in your terminal:

```bash
$ node index.js
```

8. Open a new terminal window. 

9. Clone down this repository and cd into project folder.

10. In your terminal run: 

```bash
$ npm install
$ npm start
```

11. You should now be able to view the application in your browser at http://localhost:3000/

12. Go ahead and search for some movies and add your ratings, if you run in your Postgres CLI:

```bash
 $ SELECT * FROM ratings;
```

You should be able to view your ratings!

### GIFS and Screenshots

#### Homepage

[![Screen-Shot-2020-11-27-at-10-52-57-AM.png](https://i.postimg.cc/KzYd9gzb/Screen-Shot-2020-11-27-at-10-52-57-AM.png)](https://postimg.cc/DWtj00Lp)

#### Searching from Homepage

[!Searching](https://media.giphy.com/media/V43kzlxYGjPV5pal0w/giphy.gif)



