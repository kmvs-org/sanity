import {IoLinkOutline} from 'react-icons/io5'

export default {
  name: 'button',
  type: 'object',
  title: 'Button',
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
      description: 'E.g. /services/home-care/',
      validation: (Rule) => Rule.uri({allowRelative: true, relativeOnly: true}).required(),
    },
  ],
}

export const optionalButton = {
  name: 'button',
  type: 'object',
  title: 'Button',
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
      validation: (Rule) => Rule.max(25),
    },
    {
      name: 'link',
      type: 'url',
      title: 'Relative URL',
      description: 'E.g. /services/home-care/',
      validation: (Rule) => Rule.uri({allowRelative: true, relativeOnly: true}),
    },
  ],
}

export const externalLinkButton = {
  name: 'button',
  type: 'object',
  title: 'Button',
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
      validation: (Rule) => Rule.max(25),
    },
    {
      name: 'link',
      type: 'url',
      title: 'URL',
      description: 'https://example.com/link/ or /link/',
      validation: (Rule) => Rule.uri({allowRelative: true}),
    },
  ],
}
