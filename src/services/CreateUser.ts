/**
 * Para criar um usuario: name, email, password
 */

// interface: é uma forma de definir typagem de conjuntos de dados
// principalmente objetos
// Sempre crie uma nova interface para definir o formato de um novo componente
interface TechObject{
  title: string,
  experience: number;
}

// ? representa ele ser opcional
// | representa "ou"
interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>
}
// string[]

export default function createUser({ name = "", email, password }: CreateUserData){
  const user = {
    name,
    email,
    password
  }
  return user;
}