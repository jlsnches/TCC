import conexao from '../config/conexao.js'

const Estagio = conexao.Schema({
    candidatura: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Candidatura',
        required: true,
        unique: true,
    },
    aluno: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Aluno',
        required: true,
    },
    empresa: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Empresa',
        required: true,
    },
    vaga: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Vaga',
        required: true,
    },
    dataInicio: {
        type: Date,
        required: true,
    },
    dataFimPrevista: {
        type: Date,
        required: true,
    },
    dataFim: {
        type: Date,
    },
    supervisorEmpresa: {
        type: String,
        required: true,
        trim: true,
    },
    orientadorInstituicao: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['em andamento', 'concluído', 'cancelado'],
        default: 'em andamento',
        required: true,
    },
    observacoes: {
        type: String,
        trim: true,
        default: '',
    },
}, {
    timestamps: true,
});

export default conexao.model('Estagio', Estagio)
