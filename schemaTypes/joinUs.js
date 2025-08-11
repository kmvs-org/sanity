import { FaBuildingUser } from "react-icons/fa6";
import title from './ui/title'
import image from './ui/image'
import content from './ui/content'
import spotlight from './ui/spotlight'


export default {
    name: 'joinUs',
    title: 'Join Us',
    type: 'document',
    icon: FaBuildingUser,
    fields: [
        title,
        image,
        spotlight,
        content,
    ],
}