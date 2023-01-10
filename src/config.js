import Templates from "./components/assets/Templates"
import Backgrounds from "./components/assets/Backgrounds"
import Texts from "./components/assets/Texts"
import Attributes from "./components/assets/Attributes"
import Images from "./components/assets/Images"

const tools = [{
    label: 'Templates',
    icon: '||||',
    assets: Templates
}, {
    label: 'Background',
    icon: 'B',
    assets: Backgrounds
},{
    label: 'Text',
    icon: 'T',
    assets: Texts
},{
    label: 'Attributes',
    icon: '{x}',
    assets: Attributes
},{
    label: 'Elements',
    icon: 'E',
    assets: Images
}]

export default {
    tools
}