import { translatedField } from '../lang'

export default translatedField(
    {
        name: 'content',
        title: 'Description',
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
        ],
    }
)
