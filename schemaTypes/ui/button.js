import { IoLinkOutline } from 'react-icons/io5'
import { translatedField } from '../lang'

export default {
  name: 'button',
  type: 'object',
  title: 'Button',
  icon: IoLinkOutline,
  fields: [
    translatedField(
      {
        name: 'text',
        title: 'Text',
        description: 'Max character count: 25',
        validation: (Rule) => Rule.required(),
      },
      {
        type: 'string',
        validation: (Rule) => Rule.required().max(25),
      }
    ),
    {
      name: 'link',
      type: 'url',
      title: 'Relative URL',
      description: 'E.g. /programmes/yuva-vani/',
      validation: (Rule) => Rule.uri({ allowRelative: true, relativeOnly: true }).required(),
    },
  ],
  preview: {
    select: {
      title: 'text.en',
      subtitle: 'link',
    },
  },
}

export const optionalButton = {
  name: 'button',
  type: 'object',
  title: 'Button',
  icon: IoLinkOutline,
  fields: [
    translatedField(
      {
        name: 'text',
        title: 'Text',
        description: 'Max character count: 25',
      },
      {
        type: 'string',
        validation: (Rule) => Rule.max(25),
      }
    ),
    {
      name: 'link',
      type: 'url',
      title: 'Relative URL',
      description: 'E.g. /programmes/yuva-vani/',
      validation: (Rule) => Rule.uri({ allowRelative: true, relativeOnly: true }),
    },
  ],
  preview: {
    select: {
      title: 'text.en',
      subtitle: 'link',
    },
  },
}

export const externalLinkButton = {
  name: 'button',
  type: 'object',
  title: 'Button',
  icon: IoLinkOutline,
  fields: [
    translatedField(
      {
        name: 'text',
        title: 'Text',
        description: 'Max character count: 25',
      },
      {
        type: 'string',
        validation: (Rule) => Rule.max(25),
      }
    ),
    {
      name: 'link',
      type: 'url',
      title: 'URL',
      description: 'https://example.com/link/ or /link/',
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    },
  ],
  preview: {
    select: {
      title: 'text.en',
      subtitle: 'link',
    },
  },
}

export const nonTranslatedButton = {
  name: 'button',
  type: 'object',
  title: 'Button',
  icon: IoLinkOutline,
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
      validation: (Rule) => Rule.uri({ allowRelative: true }),
    },
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'link',
    },
  },
}