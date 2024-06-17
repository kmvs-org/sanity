import {IoGitNetworkSharp} from 'react-icons/io5'

import title from './ui/title'
import image from './ui/image'
import content from './ui/content'

export default {
  name: 'partner',
  type: 'document',
  title: 'Partner',
  icon: IoGitNetworkSharp,

  fields: [
    title,
    {
      name: 'type',
      type: 'tag',
      title: 'Type',
      options: {
        includeFromRelated: 'type',
        predefinedTags: [
          {label: 'Partner', value: 'Partner'},
          {label: 'Network Member', value: 'Network Member'},
          {label: 'Donor', value: 'Donor'},
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https', 'http'],
        }).error('Link must begin with https:// or http://'),
    },
    image,
    content,
  ],
}
