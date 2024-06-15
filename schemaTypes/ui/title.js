export default {
  name: 'title',
  type: 'string',
  title: 'Title',
  validation: (Rule) => Rule.max(50).required(),
}
