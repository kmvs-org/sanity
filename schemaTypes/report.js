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
