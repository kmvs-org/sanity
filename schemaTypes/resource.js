import {BsStack} from 'react-icons/bs'

import title from './ui/title'
import image from './ui/image'
import content from './ui/content'
import excerpt from './ui/excerpt'

export default {
  name: 'resource',
  type: 'document',
  title: 'Resource',
  icon: BsStack,

  fields: [
    title,
    image,
    excerpt,
    content,
    {
      name: 'tags',
      type: 'tags',
      title: 'Tags',
      options: {
        includeFromRelated: 'tags',
        predefinedTags: [
          {label: 'Posters', value: 'Posters'},
          {label: 'Training Modules', value: 'Training Modules'},
          {label: 'Research', value: 'Research'},
        ],
      },
    },
  ],
}
