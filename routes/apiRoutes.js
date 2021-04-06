const fs = require("fs");
const path = require("path")


module.exports =(app) => {
    let notes = require(__dirname + "/../db/db.json");
    // routes
    app.get("/api/notes", (req, res) => {
        // returns the noteArray
        res.json(notes);
    });
    // end of get

    // route for post request to api/notes from front end
    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        const date = new Date();
        // generates a unique id from the name date of post request
        newNote.id = newNote.title.replace(/\s/g, '') + date;
        // adds the newNote to the notesArray
        notes.push(newNote);
        // writes the newly appended array to db.json
        fs.writeFile(__dirname + "/../db/db.json", JSON.stringify(notes), (err) => {
            if (err) throw err;
        });
        res.end;
    })
    // end of post

    app.delete("/api/notes/:id", (req, res) => {
        const noteId = req.params.id;
    
        const filtered = notes.filter(note => {
          return note.id != noteId;
        });
    
        newNotes = JSON.stringify(filtered);
        notes = filtered;
    
        fs.writeFileSync(__dirname + "/../db/db.json", newNotes, (err) => {
          if (err) throw err;
        });
    
        res.end();
      });

}