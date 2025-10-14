import { IoMdMegaphone } from "react-icons/io";

import title from './ui/title'
import image from './ui/image'
import excerpt from './ui/excerpt'
import imageText from './ui/imageText'
import content from './ui/impactContent'
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
            description: 'This image will be displayed everywhere the story is linke.',
        },
        {
            ...excerpt,
            description: 'This will be displayed everywhere the story is linked.',
            validation: (Rule) => Rule.max(150),
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
        {
            name: 'overview',
            type: 'text',
            title: 'Overview',
            rows: 5,
        },
        imageText,
        {
            name: 'readMore',
            type: 'array',
            title: 'Read More',
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
        simpleContent,
        {
            ...image,
            name: 'image2',
            title: 'Final Image',
        },
    ],
}
