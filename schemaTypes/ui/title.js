export default {
  name: 'title',
  type: 'string',
  title: 'Title',
  validation: (Rule) => Rule.max(100).required(),
}
