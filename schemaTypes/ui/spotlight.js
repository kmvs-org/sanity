import {IoMdFlashlight} from 'react-icons/io'

// noinspection JSUnusedGlobalSymbols
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
  ],
  preview: {
    select: {
      subtitle: 'text',
    },
    prepare(selection) {
      return {
        title: 'Spotlight',
        subtitle: selection.subtitle,
      };
    },
  },
}
