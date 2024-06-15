export default {
  name: 'excerpt',
  type: 'text',
  title: 'Excerpt',
  validation: (Rule) => Rule.max(150).required(),
}
