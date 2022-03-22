
// Ao usar props, você pode fazer de duas maneiras: declarando a prop como foi feito abaixo:
export default function Title(props) {
    return (
        <div>
            <h1 className="title">{props.title}</h1>
            <br/>
            <h2 className="subtitle">{props.subtitle}</h2>
        </div>
    )
}

// Ou declarar o nome dos atributos das props diretamente nos parâmetros, como está exemplificado abaixo:
    // export default function Title({ title, subtitle }) {
    //     return (
    //         <div>
    //             <h1 className="title">{title}</h1>
    //             <br/>
    //             <h2 className="subtitle">{subtitle}</h2>
    //         </div>
    //     )
    // }