interface PesquiseAvesAvistadasProps {
    title: string
    cor?: string
}

export function PesquiseAvesAvistadas(props: PesquiseAvesAvistadasProps) {
    const corTexto = props.cor || 'black';
    return (
        <h2 style={{ color: corTexto}}> Pesquise Aves Avistadas!</h2>
    );
}