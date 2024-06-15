import image from './image'
import {MdViewCarousel} from 'react-icons/md'

export default {
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  icon: MdViewCarousel,
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [image],
      validation: (Rule) => Rule.min(2).required(),
    },
  ],
  preview: {
    select: {
      images: 'images',
    },
    prepare(selection) {
      const {images} = selection
      const title = images ? `Gallery: ${images.length} Images` : 'Gallery: No Images'
      return {
        title: title,
      }
    },
  },
}
