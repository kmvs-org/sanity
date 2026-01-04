import { RiLayoutColumnFill } from "react-icons/ri"
import { translatedField } from '../lang'

import image from './image'

export default {
    name: 'imageText',
    type: 'object',
    title: 'Image + Text',
    icon: RiLayoutColumnFill,

    fields: [
        image,
        translatedField(
            {
                name: 'text',
                title: 'Text',
            },
            {
                type: 'text',
                rows: 5,
            }
        ),
    ],
    preview: {
        select: {
            media: 'image',
            text: 'text.en',
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
