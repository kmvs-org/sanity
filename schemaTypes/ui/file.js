import {FaFileAlt} from 'react-icons/fa'

export default {
  name: 'file',
  type: 'file',
  title: 'File',
  icon: FaFileAlt,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Display Name',
      validation: (Rule) => Rule.required(),
    },
  ],
}
