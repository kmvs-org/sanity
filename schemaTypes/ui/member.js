import { IoPerson } from "react-icons/io5"
import { translatedField } from "../lang"

import title from './title'
import simpleContent from './simpleContent'

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
            validation: (Rule) => Rule.required().assetRequired(),
        },
        translatedField(
            {
                name: 'designation',
                title: 'Designation',
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required(),
            }
        ),
        translatedField(
            {
                name: 'department',
                title: 'Department',
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required(),
            }
        ),
        simpleContent,
    ],
    preview: {
        select: {
            title: 'title.en',
            designation: 'designation.en',
            department: 'department.en',
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
