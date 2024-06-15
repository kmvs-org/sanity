import {FaImage} from 'react-icons/fa6'

export default {
  name: 'image',
  type: 'image',
  title: 'Image',
  icon: FaImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alt Text',
      description: 'Describe the content for visually impaired users.',
      validation: (Rule) => Rule.max(125).required(),
    },
  ],
}
