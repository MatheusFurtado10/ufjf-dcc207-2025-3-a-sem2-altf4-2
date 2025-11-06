interface ImagemProps{
    imagem: string;
    colorido?: boolean;
    espelhado?: boolean;
    girado?: boolean;
}

export default function Imagem({
    imagem='',
    colorido=true,
    espelhado=false,
    girado=false,
}: ImagemProps){
    const estilos: React.CSSProperties = {
        filter: colorido ? 'none' : 'grayscale(100%)',
        transform: `${espelhado ? 'scaleX(-1)' : ''} ${girado ? 'rotate(180deg)' : ''}`.trim(),
    };
    
    return (
        <div className="imagem">
        <img src={imagem} style={estilos}/>
        </div>
    )
}