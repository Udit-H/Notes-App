import mongoose from "mongoose";

// 1 - Create a scheme
// 2 - Model based off of that scheme

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
        { timestamps: true }
    );

const Note = mongoose.model("Note", noteSchema);

export default Note;