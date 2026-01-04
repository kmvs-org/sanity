import { IoPeople } from 'react-icons/io5'
import { translatedField } from './lang'

import member from './ui/member'

export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    icon: IoPeople,

    fields: [
        translatedField(
            {
                name: 'staffTitle',
                title: 'Staff Title',
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required(),
            }
        ),
        {
            name: 'staff',
            title: 'Staff',
            type: 'array',
            of: [member],
        },
        translatedField(
            {
                name: 'boardTitle',
                title: 'Board Title',
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required(),
            }
        ),
        {
            name: 'board',
            title: 'Board',
            type: 'array',
            of: [member],
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Team & Board',
            }
        },
    },
}