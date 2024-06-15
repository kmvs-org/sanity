import {IoLinkOutline, IoListOutline} from 'react-icons/io5'

const subMenuItem = {
  name: 'subMenuItem',
  type: 'object',
  title: 'Sub Menu Item',
  icon: IoLinkOutline,
  options: {
    columns: 2,
  },
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
      description: 'Max character count: 25',
      validation: (Rule) => Rule.required().max(25),
    },
    {
      name: 'link',
      type: 'url',
      title: 'Relative URL',
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

const menuItem = {
  name: 'menuItem',
  type: 'object',
  title: 'Menu Item',
  icon: IoListOutline,
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
      description: 'Max character count: 15',
      validation: (Rule) => Rule.required().max(15),
    },
    {
      name: 'subMenu',
      type: 'array',
      title: 'Sub Menu',
      of: [subMenuItem],
    },
  ],
}

export default {
  name: 'header',
  type: 'document',
  title: 'Header',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'menu',
      type: 'array',
      title: 'Menu',
      of: [menuItem],
      validation: (Rule) => Rule.max(3),
    },
  ],
}
