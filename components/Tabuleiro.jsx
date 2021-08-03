import CasaTabuleiro from "./CasaTabuleiro"

export default function casaTabuleiro() {

    return (
        <>
            <div className="flex-box">
                {gerarcasaTabuleiro(8)}
            </div>
        </>
    )

}

function gerarcasaTabuleiro(params) {

    let casaTabuleiro = []

    for (let index = 0; index < params; index++) {

        casaTabuleiro.push(
            <div key={index}>
                <CasaTabuleiro background={returnBackgroundColor(index)} />
                <CasaTabuleiro background={returnBackgroundColor2(index)} />
                <CasaTabuleiro background={returnBackgroundColor(index)} />
                <CasaTabuleiro background={returnBackgroundColor2(index)} />
                <CasaTabuleiro background={returnBackgroundColor(index)} />
                <CasaTabuleiro background={returnBackgroundColor2(index)} />
                <CasaTabuleiro background={returnBackgroundColor(index)} />
                <CasaTabuleiro background={returnBackgroundColor2(index)} />
            </div>
        )
    }

    return casaTabuleiro

}

function returnBackgroundColor(index) {

    return (index % 2 == 0) ? "gray" : "black"

}

function returnBackgroundColor2(index) {

    return (index % 2 == 0) ? "black" : "gray"

}