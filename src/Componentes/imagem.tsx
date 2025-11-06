interface ImagemProps{
    imagem: string;
    colorido?: boolean;
    espelhado?: boolean;
}

export default function Imagem({
    imagem='',
    colorido=true,
    espelhado=false,
}: ImagemProps){
    const estilos: React.CSSProperties = {
        filter: colorido ? 'none' : 'grayscale(100%)',
        transform: `${espelhado ? 'scaleX(-1)' : ''}`,
    };
    
    return (
        <>
        <img className="imagem" src={imagem} style={estilos} />
        </>
    )
}