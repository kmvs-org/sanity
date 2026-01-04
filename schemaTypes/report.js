import { BsFileEarmarkBarGraphFill } from 'react-icons/bs'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

import title from './ui/title'
import slug from './ui/slug'
import content from './ui/content'

export default {
    name: 'report',
    type: 'document',
    title: 'Report',
    icon: BsFileEarmarkBarGraphFill,

    orderings: [orderRankOrdering],
    fields: [
        orderRankField({ type: "report", newItemPosition: "before" }),
        title,
        slug({ type: 'reports' }),
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Annual Report', value: 'annual-report' },
                    { title: 'Audit Report', value: 'audit-report' },
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
