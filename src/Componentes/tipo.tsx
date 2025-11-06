interface TipoProps{
    tipo?: string;
}

export default function Tipo({
    tipo='Besta',
}: TipoProps){
    const estilos: React.CSSProperties = {
        fontSize: 'clamp(3px, 1vw , 15px)',
    };

    return (
        <div className='tipo' style = {estilos}>
          [{tipo}]
        </div>
    )
}