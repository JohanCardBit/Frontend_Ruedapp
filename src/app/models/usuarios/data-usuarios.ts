export interface DataUsuarios {
    _id?: string;
    nombre: string;
    apellido: string;
    correo: string;
    password: string;
    foto?: string;
    role?: 'user' | 'admin';
    createdAt?: string;
    updatedAt?: string;
}