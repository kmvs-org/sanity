import {IoMdFlashlight} from 'react-icons/io'

export default {
  name: 'spotlight',
  type: 'object',
  title: 'Spotlight',
  icon: IoMdFlashlight,
  fields: [
    {
      name: 'text',
      type: 'text',
      title: 'Text',
      description: 'The text to display in the spotlight.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      type: 'string',
      title: 'Color',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Brown', value: 'gold'},
          {title: 'Green', value: 'green'},
          {title: 'Orange', value: 'orange'},
        ],
      },
    },
  ],
  preview: {
    select: {
      subtitle: 'text',
    },
    prepare(selection) {
      return {
        title: 'Spotlight',
        subtitle: selection.subtitle,
      }
    },
  },
}
