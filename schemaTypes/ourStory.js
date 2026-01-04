import image from './ui/image'
import { FaCalendar } from "react-icons/fa";
import simpleContent from './ui/simpleContent'
import { translatedField } from './lang'
import title from './ui/title'

export default {
    name: 'ourStory',
    type: 'document',
    title: 'Our Story',

    fields: [
        {
            ...title,
            options: {
                columns: 2,
            }
        },
        translatedField(
            {
                name: 'description',
                title: 'Overview',
            },
            {
                type: 'text',
                rows: 3,
            }
        ),
        translatedField(
            {
                name: 'description2',
                title: 'Capitalised Text',
            },
            {
                type: 'text',
                rows: 3,
            }
        ),
        translatedField(
            {
                name: 'description3',
                title: 'Text in brown section',
            },
            {
                type: 'text',
                rows: 3,
            }
        ),
        translatedField(
            {
                name: 'decade_1',
                title: 'Decade Selector Text - 1990',
                description: 'Eg. 1990s',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(5),
            }
        ),
        translatedField(
            {
                name: 'decade_2',
                title: 'Decade Selector Text - 2000',
                description: 'Eg. 2000s',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(5),
            }
        ),
        translatedField(
            {
                name: 'decade_3',
                title: 'Decade Selector Text - 2010',
                description: 'Eg. 2010s',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(5),
            }
        ),
        translatedField(
            {
                name: 'decade_4',
                title: 'Decade Selector Text - 2020',
                description: 'Eg. 2020s',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(5),
            }
        ),
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
                        translatedField(
                            {
                                name: 'year',
                                title: 'Year',
                                validation: (Rule) => Rule.required(),
                            },
                            {
                                type: 'number',
                                validation: (Rule) => Rule.required(),
                            }
                        ),
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
                                    ],
                                    preview: {
                                        select: {
                                            media: 'image',
                                            content: 'content.en',
                                        },
                                        prepare(selection) {
                                            const { content, media } = selection
                                            let title = ' '
                                            try {
                                                title = content[0].children[0].text.slice(0, 100)
                                            } catch (error) {
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
                            title: 'year.en',
                            bgColor: 'bgColor',
                            items: 'items',
                        },
                        prepare(selection) {
                            const { title, bgColor, items } = selection
                            const itemCount = items ? items.length : 0
                            const media = items ? items[0].image : null
                            return {
                                title,
                                subtitle: `${itemCount} items on ${bgColor} background`,
                                media: media,
                            }
                        },
                    },
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'title.en',
        },
    },
}
