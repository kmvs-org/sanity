import { HiDocument } from 'react-icons/hi2'
import title from './ui/title'
import slug from './ui/slug'
import content from './ui/content'

export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    icon: HiDocument,
    fields: [
        title,
        slug({ type: '' }),
        content,
    ],
}
