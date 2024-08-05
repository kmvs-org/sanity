import {externalLinkButton} from './button'
import image from './image'
import video from './video'
import gallery from './gallery'
import html from './html'
import file from './file'
import spotlight from './spotlight'
import grid from './grid'
import quote from './quote'

export default {
  name: 'content',
  type: 'array',
  title: 'Content',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
      },
    },
    externalLinkButton,
    image,
    video,
    gallery,
    html,
    file,
    spotlight,
    grid,
    quote,
  ],
}
