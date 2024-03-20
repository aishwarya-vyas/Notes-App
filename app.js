const v = require("validator")
const c = require("chalk")
const y = require("yargs")
const no = require("./notes.js")

y.command({
    command : "Add",
    describe : "Adding a note",
    builder: {
        title:{
            describe: "Title of the note",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Body of the note",
            demandOption: true,
            type: "string" 
        }
    },
    handler : function(argv){
        no.addNotes(argv.title,argv.body)
    }
})

y.command({
    command : "Update",
    describe : "Updating a note",
    builder: {
        title:{
            describe: "Title of the note",
            demandOption: true,
            type: "string"
        },
        t:{
            describe: "New title of the note",
            demandOption: false,
            type: "string"
        },
        b: {
            describe: "New body of the note",
            demandOption: false,
            type: "string" 
        }
    },
    handler : function(argv){
        no.updateNotes(argv.title,argv.t,argv.b)
    }
})

y.command({
    command : "Remove",
    describe : "Removing a note",
    builder: {
        title:{
            describe: "Title of the note",
            demandOption: true,
            type: "string"
        }
    },

    handler : function(argv){
        no.removeNotes(argv.title)
    }
})

y.command({
    command : "Read",
    describe : "Reading a note",
    builder: {
        title:{
            describe: "Title of the note",
            demandOption: true,
            type: "string"
        }
    },
    handler : function(argv){
        no.readNotes(argv.title)
    }
})

y.command({
    command : "List",
    describe : "Listing a note",
    handler : function(){
        no.listNotes()
    }
})

y.parse()
///console.log(y.argv)