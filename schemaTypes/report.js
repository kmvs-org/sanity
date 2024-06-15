import {BsFileEarmarkBarGraphFill} from 'react-icons/bs'

export default {
  name: 'report',
  type: 'document',
  title: 'Report',
  icon: BsFileEarmarkBarGraphFill,
  fields: [
    {
      name: 'type',
      type: 'tag',
      title: 'Type',
      validation: (Rule) => Rule.required(),
      options: {
        includeFromRelated: 'type',
        predefinedTags: [
          {label: 'Annual Report', value: 'Annual Report'},
          {label: 'Audit Report', value: 'Audit Report'},
        ],
      },
    },
    {
      name: 'period',
      type: 'tag',
      title: 'Reporting Period',
      validation: (Rule) => Rule.required(),
      description: 'Eg. 2023 / 2023 Q1 / 2022-23 FY',
      options: {
        includeFromRelated: 'type',
      },
    },
    {
      name: 'file',
      type: 'file',
      title: 'File',
      validation: (Rule) => Rule.required().assetRequired(),
    },
  ],
  preview: {
    select: {
      title: 'type',
      subtitle: 'period',
    },
  },
}
