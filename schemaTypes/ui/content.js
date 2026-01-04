import { nonTranslatedButton } from './button'
import image from './image'
import video from './video'
import html from './html'
import file from './file'
import spotlight from './spotlight'
import grid from './grid'
import quote from './quote'
import impact from './impact'

import { translatedField } from '../lang'

export default translatedField(
    {
        name: 'content',
        title: 'Content',
    },
    {
        type: 'array',
        of: [
            {
                type: 'block',
                styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H2', value: 'h2' },
                    { title: 'H3', value: 'h3' },
                ],
                marks: {
                    decorators: [
                        { title: 'Strong', value: 'strong' },
                        { title: 'Emphasis', value: 'em' },
                    ],
                },
            },
            nonTranslatedButton,
            {
                ...image,
                fields: [
                    ...image.fields,
                    {
                        name: 'width',
                        type: 'string',
                        title: 'Width',
                        initialValue: 'half',
                        options: {
                            list: [
                                { title: 'Full Width', value: 'full' },
                                { title: 'Half Width', value: 'half' },
                            ],
                        },
                        validation: (Rule) => Rule.required(),
                    },
                ]
            },
            video,
            html,
            file,
            spotlight,
            grid,
            quote,
            impact,
        ],
    }
)
