import FrontCover from './編譯器期末專案/FrontCover'
import Introduction from './編譯器期末專案/Introduction'
import EnviromentAndLanguage from './編譯器期末專案/EnviromentAndLanguage'
import Lex from './編譯器期末專案/Lex'
import Ending from './編譯器期末專案/Ending'
import Yacc from './編譯器期末專案/Yacc'

const RootSlides = () => {

    const content = [
        ...FrontCover(),
        ...Introduction(),
        ...EnviromentAndLanguage(),
        ...Lex(),
        ...Yacc(),
        ...Ending(),
    ]

    return content

}

export default RootSlides