import { RiLayoutColumnFill } from "react-icons/ri"

import image from './image'

export default {
    name: 'imageText',
    type: 'object',
    title: 'Image + Text',
    icon: RiLayoutColumnFill,

    fields: [
        image,
        {
            name: 'text',
            type: 'text',
            title: 'Text',
            rows: 5,
        }
    ],
    preview: {
        select: {
            media: 'image',
            text: 'text',
        },
        prepare(selection) {
            const { text, media } = selection
            return {
                title: '2 Column Image & Text Block',
                media: media,
                subtitle: text.slice(0, 100) + '...',
            }
        },
    },
}
