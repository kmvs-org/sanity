import { IoMdMegaphone } from 'react-icons/io'
import { translatedField } from './lang'

import title from './ui/title'
import image from './ui/image'
import imageText from './ui/imageText'
import simpleContent from './ui/simpleContent'
import slug from './ui/slug'

export default {
    name: 'impactStory',
    type: 'document',
    title: 'Impact Story',
    icon: IoMdMegaphone,

    fields: [
        title,
        slug({ type: 'impact' }),
        {
            ...image,
            description: 'This image will be displayed everywhere the story is linked.',
        },
        {
            name: 'programme',
            type: 'reference',
            title: 'Related Programme',
            to: [{ type: 'programme' }],
            options: {
                disableNew: true,
            }
        },
        translatedField(
            {
                name: 'overview',
                title: 'Overview',
                description: 'This will be the first paragraph of the story.',
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'text',
                rows: 5,
                validation: (Rule) => Rule.required(),
            }
        ),
        {
            ...imageText,
            description: 'This will be displayed right below the overview.'
        },
        {
            name: 'readMore',
            type: 'array',
            title: 'Read More',
            description: 'This will be displayed on the left side, below the image + text panel.',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'impactStory' }],
                    options: {
                        filter: ({ document, parent }) => {
                            const id = document._id.replace(/^drafts\./, '')
                            const referencedIds = parent.filter((impact) => impact?._ref).map((impact) => impact._ref)
                            return {
                                filter: `!(_id in $excluded)`,
                                params: {
                                    excluded: [...referencedIds, id, `drafts.${id}`]
                                }
                            }
                        },
                        disableNew: true,
                    },
                },
            ],
        },
        {
            ...simpleContent,
            description: 'This will be displayed on the right side, below the image + text panel.',
        },
        {
            ...image,
            name: 'image2',
            title: 'Final Image',
            description: 'This will be displayed on the left side, below the read more panel.',
        },
    ],
    preview: {
        select: {
            title: 'title.en',
            subtitle: 'overview.en',
            media: 'image',
        },
    },
}
