import {externalLinkButton as button} from './ui/button'
import image from './ui/image'
import section from './ui/section'
import title from './ui/title'

export default {
  name: 'ourStory',
  type: 'document',
  title: 'Our Story',

  fields: [
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [section],
      validation: (Rule) => Rule.min(1),
    },
    {
      name: 'timeline',
      type: 'array',
      title: 'Timeline',

      of: [
        {
          name: 'milestone',
          type: 'object',
          title: 'Milestone',

          fields: [
            {
              name: 'year',
              type: 'string',
              title: 'Year',
              validation: (Rule) => Rule.required(),
            },
            image,
            title,
            {
              name: 'description',
              type: 'text',
              title: 'Description',
              validation: (Rule) => Rule.required(),
            },
            button,
          ],
          preview: {
            select: {
              media: 'image',
              title: 'year',
              subtitle: 'description',
            },
          },
        },
      ],
    },
  ],
}
