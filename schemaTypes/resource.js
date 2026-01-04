import { BsStack } from 'react-icons/bs'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

import title from './ui/title'
import slug from './ui/slug'
import content from './ui/content'
import file from './ui/file'

export default {
    name: 'resource',
    type: 'document',
    title: 'Resource',
    icon: BsStack,

    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: "resource", newItemPosition: "before" }),
        title,
        slug({ type: 'resources' }),
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Research Studies', value: 'study-research' },
                    { title: 'News Article', value: 'news-article' },
                    { title: 'Video', value: 'video' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Cover Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        content,
    ],
    preview: {
        select: {
            title: 'title.en',
            media: 'image',
        },
    },
}
