import {IoPeople} from 'react-icons/io5'

import title from './ui/title'
import image from './ui/image'
import content from './ui/content'

export default {
  name: 'member',
  type: 'document',
  title: 'Member',
  icon: IoPeople,

  fields: [
    {
      ...title,
      title: 'Name',
    },
    image,
    {
      name: 'designation',
      type: 'string',
      title: 'Designation',
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      options: {
        list: ['Staff', 'Board'],
        layout: 'radio',
      },
    },
    {
      ...content,
      title: 'About',
    },
  ],
  initialValue: {
    category: 'Staff',
  },
}
