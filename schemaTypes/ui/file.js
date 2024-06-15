import {FaFileAlt} from 'react-icons/fa'

export default {
  name: 'file',
  type: 'file',
  title: 'File',
  icons: FaFileAlt,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Display Name',
      valiation: (Rule) => Rule.required(),
    },
  ],
}
