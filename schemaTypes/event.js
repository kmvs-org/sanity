import {IoCalendarClearSharp} from 'react-icons/io5'

import title from './ui/title'
import image from './ui/image'
import content from './ui/content'

import {externalLinkButton as button} from './ui/button'

export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  icon: IoCalendarClearSharp,

  fields: [
    title,
    {
      name: 'date',
      type: 'date',
      title: 'Date',
    },
    image,
    content,
    button,
  ],
}
