import { BsStack } from 'react-icons/bs'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

import title from './ui/title'
import slug from './ui/slug'
import content from './ui/content'

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
                    { title: 'Studies & Research', value: 'study-research' },
                    { title: 'News Article', value: 'news-article' },
                    { title: 'Video', value: 'video' },
                    { title: 'Gallery', value: 'gallery' },
                ],
            },
        },
        {
            name: 'image',
            title: 'Cover Image',
            type: 'image',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'excerpt',
            title: 'Description',
            type: 'text',
            rows: 3,
        },
        content,
        {
            type: 'file',
            title: 'File (PDF)',
            name: 'file',
            options: {
                accept: '.pdf',
            },
        },
    ],
}
