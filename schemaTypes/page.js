import { HiDocument } from 'react-icons/hi2'
import title from './ui/title'
import content from './ui/content'

export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    icon: HiDocument,
    fields: [
        title,
        content,
    ],
}
