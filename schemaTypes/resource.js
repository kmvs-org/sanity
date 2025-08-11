import { BsStack } from 'react-icons/bs'

import title from './ui/title'
import slug from './ui/slug'

export default {
    name: 'resource',
    type: 'document',
    title: 'Resource',
    icon: BsStack,

    fields: [
        title,
        slug({ type: 'resources' }),
        {
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Study', value: 'study' },
                    { title: 'Report', value: 'report' },
                    { title: 'Research', value: 'research' },
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
