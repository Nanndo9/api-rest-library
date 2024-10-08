import mongoose from 'mongoose';
import { IBooks } from './BookInterface';
import { authorSchema } from '../author/author';

const bookSchema = new mongoose.Schema<IBooks>(
    {
        id: { type: mongoose.Schema.Types.ObjectId },
        titulo: { type: String, required: true },
        editora: { type: String },
        preco: { type: Number },
        paginas: { type: Number },
        autor: authorSchema,
    },
    { versionKey: false }
);

const Books = mongoose.model<IBooks>('livros', bookSchema);

export default Books;
