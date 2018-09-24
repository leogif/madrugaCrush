import * as mongoose from "mongoose";
import CrushSchema from "./schema";

export default mongoose.model("Crush", CrushSchema);

// Vamos passar o "schema" para o mongoose, sempre que quisermos executar algo com o mongo o mongoose tem a função de verificar se essa "tabela" existe, se não existir ele cria pra nós e usa em seguida sem que o usuário perceba o que está acontecendo
