import conexao from '../config/conexao.js'

const PerfilAcademico = new conexao.Schema({
    aluno: {
        type: conexao.Schema.Types.ObjectId,
        ref: 'Aluno',
        required: true,
        unique: true,
    },
    curso: {
        type: String,
        enum: ['Técnico em Informática', 'Técnico em Agropecuária', 'Técnico em Meio Ambiente'],
        required: true,
    },
    semestre: {
        type: Number,
        min: 1,
        max: 8,
        required: true,
    },
    matricula: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    competencias: [{
        type: String,
        trim: true,
    }],
    curriculo: {
        type: String,
        default: '',
    },
    disponibilidade: {
        type: String,
        enum: ['manhã', 'tarde', 'noite', 'integral'],
        required: true,
    },
}, {
    timestamps: true,
});

export default conexao.model('PerfilAcademico', PerfilAcademico)
