import { FaAward } from "react-icons/fa"
import { translatedField } from "./lang"

import image from './ui/image'
import title from './ui/title'
import simpleContent from './ui/simpleContent'

export default {
    name: 'awards',
    title: 'Awards & Recognition',
    type: 'document',
    icon: FaAward,
    fields: [
        {
            ...title,
            options: {
                columns: 2,
            }
        },
        {
            ...simpleContent,
            title: 'Overview',
        },
        {
            name: 'awards',
            title: 'Awards',
            type: 'array',
            of: [
                {
                    name: 'award',
                    title: 'Award',
                    type: 'object',
                    fields: [
                        {
                            ...image,
                            title: 'Featured Image',
                            description: 'This image will be displayed in the list view.',
                        },
                        {
                            ...title,
                            description: 'e.g. Laadli Media Award',
                        },
                        translatedField(
                            {
                                name: 'year',
                                title: 'Year',
                                description: 'e.g. 2011-2012',
                            },
                            {
                                type: 'string',
                                validation: (Rule) => Rule.required(),
                            }
                        ),
                        {
                            ...image,
                            title: 'Popup Image',
                            name: 'popupImage',
                            description: 'This image will be displayed in the popup.',
                        },
                        simpleContent,
                    ],
                    preview: {
                        select: {
                            title: 'title.en',
                            subtitle: 'year.en',
                            media: 'image',
                        },
                    },
                }
            ],
        },
        translatedField(
            {
                name: 'quote',
                title: 'Quote',
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required(),
            }
        ),
    ],
    preview: {
        select: {
            title: 'title.en',
        },
    },
}