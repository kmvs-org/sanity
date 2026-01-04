import { translatedField } from '../lang'

export default translatedField(
    {
        name: 'excerpt',
        title: 'Excerpt',
        validation: (Rule) => Rule.required(),
    },
    {
        type: 'text',
        rows: 3,
        validation: (Rule) => Rule.max(150).required(),
    }
)
