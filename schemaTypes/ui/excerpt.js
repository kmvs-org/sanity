export default {
    name: 'excerpt',
    type: 'text',
    title: 'Excerpt',
    rows: 3,
    validation: (Rule) => Rule.max(150).required(),
}
