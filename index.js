// Importing frameworks
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 2000;

// Using bodyParser middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serving static files from the 'public' directory
app.use(express.static("public"));

// Setting the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

// Render year one home page
app.get("/yearone", async (req, res) => {
  res.render("yearOne/yearOne");
});

//MANAGER SQUAD
app.get("/managersquad", async (req, res) => {
  res.render("yearOne/managerSquad/managerSquadHome");
});

app.get("/managersquadwork", async (req, res) => {
  res.render("yearOne/managerSquad/managerSquadWork");
});

app.get("/managersquadlearn", async (req, res) => {
  res.render("yearOne/managerSquad/managerSquadLearn");
});

//TEST ENGINEERING
app.get("/testengineering", async (req, res) => {
  res.render("yearOne/testEngineering/testEngineeringHome");
});
 
app.get("/testengineeringlearn", async (req, res) => {
  res.render("yearOne/testEngineering/testEngineeringLearn");
});

app.get("/testengineeringwork", async (req, res) => {
  res.render("yearOne/testEngineering/testEngineeringWork");
});

//DESIGN SQUAD
app.get("/designsquad", async (req, res) => {
  res.render("yearOne/designSquad/designSquadHome");
});

app.get("/designsquadlearn", async (req, res) => {
  res.render("yearOne/designSquad/designSquadLearn");
});

app.get("/designsquadwork", async (req, res) => {
  res.render("yearOne/designSquad/designSquadWork");
});

//ACCESSIBILITY TASKFORCE
app.get("/accessibilitytaskforce", async (req, res) => {
  res.render("yearOne/accessibilityTaskforce/accessibilityTaskforceHome");
});

app.get("/accessibilitytaskforcelearn", async (req, res) => {
  res.render("yearOne/accessibilityTaskforce/accessibilityTaskforceLearn");
});

app.get("/accessibilitytaskforcework", async (req, res) => {
  res.render("yearOne/accessibilityTaskforce/accessibilityTaskforceWork");
});

// Render year two home page
app.get("/yeartwo", async (req, res) => {
  res.render("yearTwo/yearTwo");
});

// Render year three home page
app.get("/yearthree", async (req, res) => {
  res.render("yearThree/yearThree");
});

// Starting the server and listening on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
