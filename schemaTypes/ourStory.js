import image from './ui/image'
import { FaCalendar } from "react-icons/fa";
import simpleContent from './ui/simpleContent'

export default {
    name: 'ourStory',
    type: 'document',
    title: 'Our Story',

    fields: [
        {
            name: 'description',
            title: 'Overview',
            type: 'text',
            rows: 3,
        },
        {
            name: 'description2',
            title: 'Capitalised Text',
            type: 'text',
            rows: 3,
        },
        {
            name: 'description3',
            title: 'Text in brown section',
            type: 'text',
            rows: 3,
        },
        {
            name: 'timeline',
            type: 'array',
            title: 'Timeline',

            of: [
                {
                    name: 'milestone',
                    type: 'object',
                    title: 'Milestone',
                    icon: FaCalendar,
                    fields: [
                        {
                            name: 'year',
                            type: 'number',
                            title: 'Year',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'items',
                            type: 'array',
                            title: 'Items',
                            of: [
                                {
                                    name: 'item',
                                    type: 'object',
                                    title: 'Item',
                                    fields: [
                                        image,
                                        simpleContent,
                                        {
                                            name: 'description',
                                            type: 'text',
                                            title: 'Description',
                                            rows: 8,
                                        },
                                    ],
                                    preview: {
                                        select: {
                                            media: 'image',
                                            content: 'content',
                                        },
                                        prepare(selection) {
                                            const { content, media } = selection
                                            let title = ' '
                                            try
                                            {
                                                title = content[0].children[0].text.slice(0, 100)
                                            } catch (error)
                                            {
                                                title = ' '
                                            }
                                            return {
                                                title: title,
                                                media: media,
                                            }
                                        },
                                    },
                                }
                            ],
                        },
                        {
                            name: 'bgColor',
                            type: 'string',
                            title: 'Background Color',
                            validation: (Rule) => Rule.required(),
                            options: {
                                list: ['White', 'Yellow', 'Pink'],
                            },
                        },
                    ],
                    initialValue: {
                        bgColor: 'White',
                    },
                    preview: {
                        select: {
                            title: 'year',
                            bgColor: 'bgColor',
                        },
                        prepare(selection) {
                            const { title, bgColor } = selection
                            return {
                                title,
                                subtitle: `${bgColor} background`,
                            }
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
        },
        prepare() {
            return {
                title: 'Our Story',
            }
        },
    },
}
