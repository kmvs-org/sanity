import image from './ui/image'
import { translatedField } from './lang'

const metric = {
    name: 'metric',
    type: 'object',
    title: 'Metric',

    fields: [
        translatedField(
            {
                name: 'number',
                title: 'Number',
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'number',
                validation: (Rule) => Rule.required(),
            }
        ),
        translatedField(
            {
                name: 'description',
                title: 'Description',
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(100),
            }
        ),
    ],
    preview: {
        select: {
            title: 'number.en',
            subtitle: 'description.en',
        },
    },
}

export default {
    name: 'homepage',
    type: 'document',
    title: 'Homepage',

    fields: [
        {
            ...image,
            title: 'Hero Image',
        },
        translatedField(
            {
                name: 'tagline',
                title: 'Tagline',
                description: 'Do not edit or translate the html code within angle brackets \'<\' and \'>\'.',
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'text',
                rows: 5,
                validation: (Rule) => Rule.required(),
            }
        ),
        translatedField(
            {
                name: 'about',
                title: 'About',
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'text',
                rows: 5,
                validation: (Rule) => Rule.required(),
            }
        ),
        translatedField(
            {
                name: 'heading_1',
                title: 'Programmes Section Header',
                description: 'Eg. What We Do',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        translatedField(
            {
                name: 'heading_2',
                title: 'Impact Section Header',
                description: 'Eg. Our Impact',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        {
            name: 'impact',
            type: 'array',
            title: 'Impact',
            of: [metric],
        },
        translatedField(
            {
                name: 'heading_3',
                title: 'Events Section Header',
                description: 'Eg. Recent Events',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
    ],
    preview: {
        prepare() {
            return {
                title: 'Homepage',
            }
        },
    },
}
