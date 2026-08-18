import conexao from '../config/conexao.js'

const Usuario = conexao.Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
    },
    email: { 
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    senha: {
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum: ['aluno', 'empresa', 'admin'],
        required: true,
    }
}, {
    timestamps: true,
});

export default conexao.model('Usuario', Usuario)
