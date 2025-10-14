import { IoPeople } from 'react-icons/io5'

import member from './ui/member'

export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    icon: IoPeople,

    fields: [
        {
            name: 'staffTitle',
            type: 'string',
            title: 'Staff Title',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'staff',
            title: 'Staff',
            type: 'array',
            of: [member],
        },
        {
            name: 'boardTitle',
            type: 'string',
            title: 'Board Title',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'board',
            title: 'Board',
            type: 'array',
            of: [member],
        },
    ],
    preview: {
        select: {
        },
        prepare() {
            return {
                title: 'Team & Board',
            }
        },
    },
}