import {IoCalendarClearSharp} from 'react-icons/io5'

import title from './ui/title'
import image from './ui/image'
import content from './ui/content'

import {externalLinkButton as button} from './ui/button'
import excerpt from './ui/excerpt'

export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  icon: IoCalendarClearSharp,

  fields: [
    title,
    {
      name: 'dates',
      type: 'object',
      title: 'Dates',
      fields: [
        {
          name: 'start',
          type: 'date',
          title: 'Start',
          description: 'Required',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'end',
          type: 'date',
          title: 'End',
          description: 'Optional',
        },
      ],
      options: {
        columns: 2,
      },
    },
    image,
    excerpt,
    content,
    {
      ...button,
      title: 'Call to Action',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'excerpt',
      media: 'image',
    },
  },
}
