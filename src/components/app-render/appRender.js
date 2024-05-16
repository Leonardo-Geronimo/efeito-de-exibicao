import BoxText from '../colorize/colorize'

const titlesparagraph = ['Título card 1']

const TextUpper = () => {
    return (
        <div>
            <h2>Desafio React básico</h2>
            <div>
                {titlesparagraph.map((titleparagraph, index) => {
                    return (
                        <BoxText key={index} >
                            <h3>{titleparagraph}</h3>
                            <p style={{ textTransform: 'uppercase' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil cupiditate consectetur similique 
                                natus ratione labore, blanditiis ullam, corrupti modi fuga ea quod, quam aliquam omnis accusantium consequatur asperiores sit.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil cupiditate consectetur similique natus ratione labore, 
                                blanditiis ullam, corrupti modi fuga ea quod, quam aliquam omnis accusantium consequatur asperiores sit.
                            </p>
                        </BoxText>
                    )
                })}
            </div>
        </div>
    )
}

export default TextUpper