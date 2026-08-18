import conexao from '../config/conexao.js'

const Candidatura = conexao.Schema({
    status: {
        type: String,
        enum: ['em análise', 'aprovado', 'recusado', 'cancelado'],
        default: 'em análise',
        required: true,
    },
    dataCandidatura: {
        type: Date,
        default: Date.now,
        required: true,
    },
    aluno: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Aluno',
        required: true,
    },
    vaga: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Vaga',
        required: true,
    },
    cartaApresentacao: {
        type: String,
        trim: true,
        default: '',
    },
    observacaoEmpresa: {
        type: String,
        trim: true,
        default: '',
    },
    dataResposta: {
        type: Date,
    },
}, {
    timestamps: true,
});

Candidatura.index({ aluno: 1, vaga: 1 }, { unique: true });

export default conexao.model('Candidatura', Candidatura)
