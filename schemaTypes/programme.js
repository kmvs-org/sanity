import { GoGoal } from 'react-icons/go'

import title from './ui/title'
import image from './ui/image'
import excerpt from './ui/excerpt'
import content from './ui/content'
import slug from './ui/slug'
import impact from './ui/impact'

export default {
    name: 'programme',
    type: 'document',
    title: 'Programme',
    icon: GoGoal,

    fields: [
        title,
        slug({ type: 'programmes' }),
        image,
        excerpt,
        {
            name: 'banner',
            type: 'object',
            title: 'Banner',
            fields: [
                image,
                {
                    name: 'title',
                    type: 'string',
                    title: 'Title ',
                    validation: (Rule) => Rule.max(100).required(),
                },
                {
                    name: 'subtitle',
                    type: 'string',
                    title: 'Subtitle ',
                    validation: (Rule) => Rule.max(100).required(),
                },
            ],
        },
        {
            ...content,
            of: [
                ...content.of,
                impact,
            ]
        },
    ],
}
