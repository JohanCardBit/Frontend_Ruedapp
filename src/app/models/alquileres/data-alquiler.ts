export interface DataAlquiler {
    _id?: string; 
    usuario: string; 
    bicicleta: string; 
    estacionSalida: string; 
    estacionLlegada?: string | null; 
    fechaInicio: Date;
    fechaFin?: Date | null;
    duracionMs: number;
    duracionTexto?: string | null;
    activo: boolean;
    createdAt?: Date; 
    updatedAt?: Date;
}
