import { IoMdMegaphone } from "react-icons/io";

import title from './ui/title'
import image from './ui/image'
import excerpt from './ui/excerpt'
import content from './ui/impactContent'
import slug from './ui/slug'

export default {
    name: 'impactStory',
    type: 'document',
    title: 'Impact Story',
    icon: IoMdMegaphone,

    fields: [
        title,
        slug({ type: 'impact' }),
        image,
        excerpt,
        {
            name: 'programme',
            type: 'reference',
            title: 'Programme',
            to: [{ type: 'programme' }],
            options: {
                disableNew: true,
            }
        },
        content,
    ],
}
