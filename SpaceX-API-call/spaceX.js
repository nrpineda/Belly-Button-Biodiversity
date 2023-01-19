// 1. API call to SpaceX is made in these two lines of code:

const url = "https://api.spacexdata.com/v2/launchpads";
d3.json(url).then(receivedData => console.log(receivedData));

// 2. Rewrite the code to retrieve the details only from the 
// Vandenberg Air Force Base:

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0]));

// She would use indexing to retrieve only the first 
// element in the array returned from the API call

// 3. Access the latitude of the Vandenberg Airforce Base

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));



