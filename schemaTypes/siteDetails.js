import { translatedField } from './lang'

export default {
  name: 'siteDetails',
  type: 'document',
  title: 'Site Details',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'contactDetails',
      title: 'Contact Information',
    },
    {
      name: 'socialMedia',
      title: 'Social Media Links',
    },
  ],
  fields: [
    translatedField(
      {
        name: 'title',
        title: 'Title',
        group: 'seo',
        validation: (Rule) => Rule.required(),
      },
      {
        type: 'string',
        validation: (Rule) => Rule.max(50).required()
      }
    ),
    translatedField(
      {
        name: 'tagline',
        title: 'Tagline',
        group: 'seo',
        validation: (Rule) => Rule.required(),
      },
      {
        type: 'string',
        validation: (Rule) => Rule.max(100).required()
      }
    ),
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      group: 'contactDetails',
      validation: (Rule) => Rule.email().required(),
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Phone',
      group: 'contactDetails',
      validation: (Rule) => Rule.max(20).required(),
    },
    {
      name: 'instagram',
      type: 'url',
      title: 'Instagram',
      group: 'socialMedia',
    },
    {
      name: 'facebook',
      type: 'url',
      title: 'Facebook',
      group: 'socialMedia',
    },
    {
      name: 'twitter',
      type: 'url',
      title: 'Twitter',
      group: 'socialMedia',
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'LinkedIn',
      group: 'socialMedia',
    },
    {
      name: 'youtube',
      type: 'url',
      title: 'YouTube',
      group: 'socialMedia',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Details',
      }
    },
  },
}
