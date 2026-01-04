import { GoGoal } from 'react-icons/go'

import title from './ui/title'
import image from './ui/image'
import excerpt from './ui/excerpt'
import content from './ui/content'
import slug from './ui/slug'

export default {
    name: 'programme',
    type: 'document',
    title: 'Programme',
    icon: GoGoal,

    fields: [
        title,
        slug({ type: 'programmes' }),
        {
            ...image,
            description: 'This image will be displayed in the programmes list view.',
        },
        {
            ...excerpt,
            description: 'This will be displayed in the programmes list view.',
        },
        {
            name: 'banner',
            type: 'object',
            title: 'Banner',
            description: 'This will be displayed on the individual programme\'s page.',
            fields: [
                image,
                {
                    ...title,
                    title: 'Subtitle',
                },
            ],
        },
        content,
    ],
    preview: {
        select: {
            title: 'title.en',
            subtitle: 'excerpt.en',
            media: 'image',
        },
    },
}
