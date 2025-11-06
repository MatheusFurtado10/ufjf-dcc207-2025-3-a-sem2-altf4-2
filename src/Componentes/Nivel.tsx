import Star from '../assets/star.png';

interface NivelProps {
    nivel?: number;
    alinhaNivel?: 'esquerda' | 'direita' | 'centro';
}

export default function Nivel({ nivel = 1, alinhaNivel = 'direita' }: NivelProps) {
    const estilos: React.CSSProperties = {
        justifyContent: alinhaNivel === 'esquerda' ? 'flex-start' : alinhaNivel === 'direita' ? 'flex-end' : 'center',
    };
    const nivelLimite = Math.min(nivel,12);
    return (
        <div className="nivel" style={estilos}>
            {Array.from({ length: nivelLimite }, (_, index) => (
                <img key={index} src={Star} alt="Estrela" />
            ))}
        </div>
    );
}
