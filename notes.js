const fs = require('fs')
const c = require("chalk")

const addNote = function(title,body){
    const notes = loadNotes()
    const dnotes = notes.find(function(note){
        return note.title === title
    })

    debugger

    if(dnotes === undefined){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(c.green.inverse("Note added!"))
    }
    else {
        console.log(c.red.inverse("Title already taken!"))
    }
}

const saveNotes = function(notes){
    const ndataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",  ndataJSON)
}

const loadNotes = function(){
    try{
        const ndata = fs.readFileSync("notes.json")
        const ndataJSON = ndata.toString()
        return JSON.parse(ndataJSON)
    }

    catch(e){
        return []
    }
}

const removeNote = function(title){
    const notes = loadNotes()
    const nKeep = notes.filter(function(note){
        return note.title !== title
    })

    if(notes.length > nKeep.length){
        saveNotes(nKeep)
        console.log(c.green.inverse("Note removed!"))
    }
    
    else{
        console.log(c.red.inverse("No note found!"))
    }
    
}

const listNote = function() {
    console.log(c.blue.inverse("Your notes!"))
    const notes = loadNotes()
    notes.forEach(function(n) {
        console.log(n.title)
    })
}

const readNote = function(title) {
    const notes = loadNotes()
    const rnotes = notes.find(function(note){
        return note.title === title
    })

    if(!rnotes) {
        console.log(c.yellow.inverse("No Note found!"))
    }

    else {
        console.log(rnotes.title)
        console.log(rnotes.body)
    }
}

const updateNote = function(title,t,b) {
    const notes = loadNotes()
    const dnotes = notes.find(function(note){
      return note.title === title
    })
    if(dnotes === undefined)
    {
      console.log(c.red.inverse("Note doesn't exists"))
    }
    else{
      if(t){
        dnotes.title = t
      }
      if(b){
        dnotes.body = b
      }
      saveNotes(notes)
      console.log(c.green.inverse("Note updated!"))
    }
  }
  
  module.exports = {
      addNotes: addNote,
      removeNotes: removeNote,
      listNotes: listNote,
      readNotes: readNote,
      updateNotes : updateNote
  }