import conexao from '../config/conexao.js'

const Aluno = conexao.Schema({
    usuario: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
        unique: true,
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    telefone: {
        type: String,
        required: true,
        trim: true,
    },
    dataNascimento: {
        type: Date,
        required: true,
    },
    endereco: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['ativo', 'inativo', 'formado'],
        default: 'ativo',
        required: true,
    },
}, {
    timestamps: true,
});

export default conexao.model('Aluno', Aluno)
