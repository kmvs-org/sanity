import { translatedField } from "../lang"

export default translatedField(
  {
    name: 'title',
    title: 'Title',
    validation: (Rule) => Rule.required(),
  },
  {
    type: 'string',
    validation: (Rule) => Rule.max(100).required(),
  }
)
