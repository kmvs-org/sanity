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
    content,
    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [section],
    },
    gallery,
  ],
}
