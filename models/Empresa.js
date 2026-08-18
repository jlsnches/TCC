import conexao from '../config/conexao.js'

const Empresa = conexao.Schema({
    usuario: {
        type: conexao.Schema.Types.ObjectId, 
        ref: 'Usuario',
        required:true
    },
    cnpj: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    nomeEmpresa: {
        type: String,
        required: true,
        trim: true,
    },
    endereco: {
        type: String,
        required: true,
        trim: true,
    },
    telefone: {
        type: String,
        required: true,
        trim: true,
    },
    logo:{
        type: String,
        default: '',
    },
    descricao: {
        type: String,   
        required: true,
        trim: true,
    },
    site: {
        type: String,
        trim: true,
        default: '',
    },
    status: {
        type: String,
        enum: ['pendente', 'ativa', 'inativa'],
        default: 'pendente',
        required: true,
    }   

}, {
    timestamps: true,
});

export default conexao.model('Empresa',Empresa)
