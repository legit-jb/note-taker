const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// handle parsing for POST and PUT requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serve static files
app.use(express.static("public"));

// Listener
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

// routes
app.get("/notes", (req, res) =>
{
    res.json(path.join(__dirname, "./public/notes.html"));
});
// end of get

app.get("*", (req, res) => {
    res.json(path.join (__dirname, "./public/index.html"));
});
// end of get

app.get("/api/notes", (req, res) => {
    // returns the noteArray
    res.json(notesArray);
});
// end of get

// route for post request to api/notes from front end
app.post("/api/notes", (req, res) => {
    const newNote = req.body;
    const date = new Date(year, month, day, hours, minutes, seconds, milliseconds);
    // generates a unique id from the name date of post request
    newNote.id = newNote.title.replace(/\s/g, '') + date;
    // adds the newNote to the notesArray
    notesArray.push(newNote);
    // writes the newly appended array to db.json
    fs.writeFile(__dirname + "./db/db.json", JSON.stringify(noteData), (err) => {
        if (err) throw err;
    });
    res.end;
})
// end of post

// route for delete request to api/notes from the front end
app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    // looks for id of note to be deleted
    const axedNoteId = notesArray.indexOf(id);
    if (axedNoteId) {
        notesArray.splice(axedNoteId);
    } else {
        console.log ("note doesn't exist!");
    }
    res.end;
})
// end of delete

