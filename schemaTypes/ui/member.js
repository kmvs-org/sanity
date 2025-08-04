import { IoPerson } from "react-icons/io5"

import title from './title'
import content from './simpleContent'

export default {
    name: 'member',
    type: 'object',
    title: 'Member',
    icon: IoPerson,

    fields: [
        {
            ...title,
            title: 'Name',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'designation',
            type: 'string',
            title: 'Designation',
        },
        {
            name: 'department',
            type: 'string',
            title: 'Department',
        },
        {
            ...content,
            title: 'About',
        },
    ],
    preview: {
        select: {
            title: 'title',
            designation: 'designation',
            department: 'department',
            media: 'image',
        },
        prepare(selection) {
            const { title, designation, department, media } = selection
            return {
                title: title,
                subtitle: `${designation || ''} ${department ? `- ${department}` : ''}`,
                media: media,
            }
        },
    },
}
