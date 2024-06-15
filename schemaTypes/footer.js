import {IoLinkOutline} from 'react-icons/io5'

const menuItem = {
  name: 'menuItem',
  type: 'object',
  title: 'Menu Item',
  icon: IoLinkOutline,
  options: {
    columns: 2,
  },
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
      description: 'Max character count: 20',
      validation: (Rule) => Rule.max(20).required(),
    },
    {
      name: 'link',
      type: 'url',
      title: 'Realtive URL',
      description: 'E.g. /programmes/yuva-vani/',
      validation: (Rule) => Rule.uri({allowRelative: true, relativeOnly: true}).required(),
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'link',
    },
  },
}

export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
    },
    {
      name: 'menu',
      type: 'array',
      title: 'Menu',
      of: [menuItem],
    },
  ],
}
