import Note from "../models/Note.js"

export async function getAllNotes(req, res) {
    try{
        const notes = await Note.find().sort({createdAt:-1});
        res.status(200).json(notes)
    }
    catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message : "Internal Server Error"});
    }
}

export async function createNote(req, res) {
    try{
        const {title,content} = req.body;
        const note = new Note({title,content}); 

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    }
    catch (error) {
        console.error("error in createNote controller", error);
        res.status(500).json({message: "Internal server Error"});
    }
}

export async function updateNote(req, res) {
    try{
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,{title,content},{ new: true,});
        if(!updatedNote) return res.status(404).json({message: "Note Not Found"});
        res.status(200).json(updatedNote);
    }
    catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function deleteNote(req, res) {
    try{
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message: "Note Not Found"});
        res.status(200).json(deletedNote);
    }
    catch(error) {
        console.error("Error in deletedNote controller", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export async function getNoteById(req, res) {
    try {
        const noteID = await Note.findById(req.params.id);
        if(!noteID) return res.status(404).json({message: "Note Not Found"});
        res.status(200).json(noteID);
    } catch (error) {
        console.error("Error in getNoteBID container", error);
        res.status(500).json({message:"Internal Server Error"});
    }
}