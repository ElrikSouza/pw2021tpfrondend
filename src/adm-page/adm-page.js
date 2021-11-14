import { Link } from "react-router-dom";

export const AdmPage = () => (
  <div>
    <Link to="/products/create">Criar um produto</Link>
    <Link to="/collaborators/create">Cadastrar um novo colaborador</Link>
  </div>
);
