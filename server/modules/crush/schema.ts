import * as mongoose from "mongoose";
// artigo 58

const CrushSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  apelido: { type: String, unique: true, required: true },
  whatsapp: { type: String, unique: true, required: true },
  observacoes: { type: String, unique: true, required: true },
  foto: { type: String, required: true },
  nota: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default CrushSchema;
