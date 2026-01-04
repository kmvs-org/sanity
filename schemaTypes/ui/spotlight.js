import { IoMdFlashlight } from 'react-icons/io'
import { translatedField } from '../lang'


export default {
    name: 'spotlight',
    type: 'object',
    title: 'Spotlight',
    icon: IoMdFlashlight,
    fields: [
        {
            name: 'text',
            type: 'text',
            title: 'Text',
            description: 'The text to display in the spotlight.',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'color',
            type: 'string',
            title: 'Color',
            validation: (Rule) => Rule.required(),
            options: {
                list: [
                    { title: 'Brown', value: 'gold' },
                    { title: 'Purple', value: 'purple' },
                    { title: 'Green', value: 'green' },
                    { title: 'Orange', value: 'orange' },
                    { title: 'Red', value: 'red' },
                ],
            },
        },
    ],
    preview: {
        select: {
            subtitle: 'text',
        },
        prepare(selection) {
            return {
                title: 'Spotlight',
                subtitle: selection.subtitle,
            }
        },
    },
}

export const translatedSpotlight = {
    name: 'spotlight',
    type: 'object',
    title: 'Spotlight',
    icon: IoMdFlashlight,
    fields: [
        translatedField(
            {
                name: 'text',
                title: 'Text',
                description: 'The text to display in the spotlight.',
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'text',
                rows: 5,
                validation: (Rule) => Rule.required(),
            }
        ),
        {
            name: 'color',
            type: 'string',
            title: 'Color',
            validation: (Rule) => Rule.required(),
            options: {
                list: [
                    { title: 'Brown', value: 'gold' },
                    { title: 'Purple', value: 'purple' },
                    { title: 'Green', value: 'green' },
                    { title: 'Orange', value: 'orange' },
                    { title: 'Red', value: 'red' },
                ],
            },
        },
    ],
    preview: {
        select: {
            subtitle: 'text.en',
        },
        prepare(selection) {
            return {
                title: 'Spotlight',
                subtitle: selection.subtitle,
            }
        },
    },
}