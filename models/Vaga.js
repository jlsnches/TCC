import conexao from '../config/conexao.js'

const Vaga = conexao.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true,
    },
    descricao: {
        type: String,
        required: true,
        trim: true,
    },
    requisitos: {
        type: String,
        required: true,
        trim: true,
    },
    bolsa: {
        type: Number,
        required: true,
        min: 0,
    },
    cargaHorariaSemanal: {
        type: Number,
        required: true,
        min: 1,
        max: 30,
    },
    curso: {
        type: String,
        enum: ['Técnico em Informática', 'Técnico em Agropecuária', 'Técnico em Meio Ambiente'],
        required: true,
    },
    modalidade: {
        type: String,
        enum: ['presencial', 'remoto', 'híbrido'],
        default: 'presencial',
        required: true,
    },
    local: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['rascunho', 'aberta', 'encerrada', 'cancelada'],
        default: 'aberta',
        required: true,
    },
    empresa: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true
    },
    dataEncerramento: {
        type: Date,
    },
}, {
    timestamps: true,
});

export default conexao.model('Vaga', Vaga)
