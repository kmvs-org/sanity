import {GoGoal} from 'react-icons/go'

import title from './ui/title'
import image from './ui/image'
import excerpt from './ui/excerpt'
import content from './ui/content'

import section from './ui/section'
import gallery from './ui/gallery'

export default {
  name: 'programme',
  type: 'document',
  title: 'Programme',
  icon: GoGoal,

  fields: [
    title,
    image,
    excerpt,
    {
      name: 'banner',
      type: 'object',
      title: 'Banner',
      fields: [
        image,
        {
          name: 'title',
          type: 'string',
          title: 'Title ',
          validation: (Rule) => Rule.max(100).required(),
        },
        {
          name: 'subtitle',
          type: 'string',
          title: 'Subtitle ',
          validation: (Rule) => Rule.max(100).required(),
        },
      ],
    },
    content,
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [section],
    },
    gallery,
    {
      name: 'newsMentions',
      type: 'array',
      title: 'News Mentions',
      of: [
        {
          name: 'newsMention',
          type: 'reference',
          to: [
            {
              type: 'news',
            },
          ],
        },
      ],
    },
  ],
}
