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
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'seo',
      validation: (Rule) => Rule.max(50).required(),
    },
    {
      name: 'tagline',
      type: 'string',
      title: 'Tagline',
      group: 'seo',
      validation: (Rule) => Rule.max(100),
    },
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
      name: 'address',
      type: 'string',
      title: 'Address',
      group: 'contactDetails',
      validation: (Rule) => Rule.required(),
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
}
