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
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https'],
        }).error('Link must begin with https://'),
    },
    image,
    content,
  ],
}
