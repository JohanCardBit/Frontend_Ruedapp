export interface Estaciones {
    _id?: string;
    nombre: string;
    ubicacion: {
        direccion?: string;
        latitud: number;
        longitud: number;
    };
    capacidad?: number;
    bicicletasDisponibles?: number;
    bicicletas?: {
        biciId: string;
        serial: string;
    }[];
    foto?: string;
    createdAt?: string;
    updatedAt?: string;
}