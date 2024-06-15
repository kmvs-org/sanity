import {RxSection} from 'react-icons/rx'
import content from './content'

export default {
  name: 'section',
  type: 'object',
  title: 'Section',
  icon: RxSection,
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: (Rule) => Rule.max(50),
    },
    content,
  ],
}
