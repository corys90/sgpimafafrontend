// Create interface ApiErrorMessage
// contine la estructura de datos de menajes de respeustas 
// de la Api con mensajes de error

interface ApiErrorMessage {
    idCodigo       : string[];    
    idPos          : string[];   
    cantidad       : string[];
    motivo         : string[];          
}

export default ApiErrorMessage;
