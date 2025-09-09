export interface DataBicicletas {
    _id: string;
    serial: string;
    estado: 'disponible' | 'en uso' | 'en mantenimiento';
    estacion: {
        _id: string;
        nombre: string;
        capacidad: number;
    };
    createdAt: string;
    updatedAt: string;
    __v?: number;
}
