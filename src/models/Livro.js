import mongoose from "mongoose";
import autopopulate from "mongoose-autopopulate";
// import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId
    },
    titulo: {
        type: String, required: [true, "O título do livro é obrigatório"]
    },
    editora: {
        type: String,
        required: [true, "A editora é obrigatória"],
        enum: {
            values: ["Casa do código", "Alura", "Felicidade", "Felicidade FC"],
            message: "A editora {VALUE} não é um valor permitido"}
    },
    preco: {
        type: Number
    },
    paginas: {
        type: Number,
        validate: {
            validator: (valor) => {
                return valor >= 10 && valor <= 5000;
            },
            message: "O número de páginas deve estar entre 10 e 5000. Valor fornecido: {VALUE}"
        }
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "autores",
        required: [true, "O(a) autor(a) é obrigatório(a)"],
        autopopulate: true
    }
}, {
    versionKey: false
});

livroSchema.plugin(autopopulate);
const livro = mongoose.model("livros", livroSchema);

export default livro;