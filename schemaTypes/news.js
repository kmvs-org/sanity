import {IoNewspaper} from 'react-icons/io5'

import title from './ui/title'
import image from './ui/image'
import excerpt from './ui/excerpt'

export default {
  name: 'news',
  type: 'document',
  title: 'News',
  icon: IoNewspaper,

  fields: [
    title,
    {
      name: 'publication',
      type: 'string',
      title: 'Publication',
      validation: (Rule) => Rule.max(50),
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
    },
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
  ],

  preview: {
    select: {
      title: 'title',
      publication: 'publication',
      date: 'date',
      media: 'image',
    },
    prepare(selection) {
      const {title, publication, date, media} = selection
      const subtitle = date ? new Date(date).toLocaleDateString() : 'No date'
      return {
        title: title,
        subtitle: `${publication} - ${subtitle}`,
        media: media,
      }
    },
  },
}
