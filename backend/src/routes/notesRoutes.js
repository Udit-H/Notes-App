import express from "express";
import { createNote, getAllNotes, updateNote, deleteNote, getNoteById} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

router.get("/:id", getNoteById);

/*app.get("/api/notes", (req,res) => {
    res.status(200).send("you got 10 notes");
    });
    
    app.post("/api/notes", (req,res) =>{
        res.status(201).json({message:"post created sucessfully"});
        })
        
        app.put("/api/notes/:id", (req,res) =>{
            res.status(200).json({message:"post updated succesfully"});
            })
            
            app.delete("/api/notes/:id", (req,res) =>{
                res.status(200).json({message:"Note deleted succesfully"})
                })*/

export default router;