import {BsFillSignpost2Fill} from 'react-icons/bs'

import content from './ui/content'
import excerpt from './ui/excerpt'

export default {
  name: 'opportunity',
  type: 'document',
  title: 'Opportunity',
  icon: BsFillSignpost2Fill,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.max(100).required(),
    },
    {
      name: 'type',
      type: 'tag',
      title: 'Type',
      validation: (Rule) => Rule.required(),
      options: {
        includeFromRelated: 'type',
        predefinedTags: [
          {label: 'Consultancy', value: 'Consultancy'},
          {label: 'Internship', value: 'Internship'},
          {label: 'Fellowship', value: 'Fellowship'},
        ],
      },
    },
    {
      name: 'deadline',
      type: 'date',
      title: 'Deadline',
    },
    excerpt,
    content,
    {
      name: 'file',
      type: 'file',
      title: 'Job Description',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'type',
    },
  },
}
