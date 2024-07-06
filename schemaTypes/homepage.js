import image from './ui/image'

const metric = {
  name: 'metric',
  type: 'object',
  title: 'Metric',

  fields: [
    {
      name: 'number',
      type: 'number',
      title: 'Number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.required().max(100),
    },
  ],
  preview: {
    select: {
      title: 'number',
      subtitle: 'description',
    },
  },
}

export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',

  fields: [
    {
      ...image,
      title: 'Hero Image',
    },
    {
      name: 'tagline',
      type: 'text',
      title: 'Tagline',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'about',
      type: 'text',
      title: 'About',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'impact',
      type: 'array',
      title: 'Impact',
      of: [metric],
    },
  ],
}
