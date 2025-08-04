import { FaAward } from "react-icons/fa"

import image from './ui/image'

export default {
    name: 'awards',
    title: 'Awards & Recognition',
    type: 'document',
    icon: FaAward,
    fields: [
        {
            name: 'description',
            title: 'Overview',
            type: 'text',
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
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            description: 'e.g. Laadli Media Award',
                        },
                        {
                            name: 'subtitle',
                            title: 'Subtitle',
                            type: 'string',
                            description: 'e.g. For Gender Sensitivity',
                        },
                        {
                            name: 'year',
                            title: 'Year',
                            type: 'string',
                            description: 'e.g. 2011-2012',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        },
                        image,
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'subtitle',
                            year: 'year',
                            media: 'image',
                        },
                        prepare(selection) {
                            const { title, subtitle, year, media } = selection
                            return {
                                title: `${title || ''} ${subtitle ? `- ${subtitle}` : ''}`,
                                subtitle: year,
                                media: media,
                            }
                        },
                    },
                }
            ],
        }
    ],
    preview: {
        select: {
        },
        prepare() {
            return {
                title: 'Awards & Recognition',
            }
        },
    },
}