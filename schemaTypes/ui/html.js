import {FaCode} from 'react-icons/fa6'

export default {
  name: 'html',
  type: 'object',
  title: 'HTML',
  icon: FaCode,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Label the code to inform others what it does.',
    },
    {
      name: 'code',
      title: 'HTML Code',
      type: 'text',
      description: 'SECURITY WARNING: Make sure you trust the code you enter.',
    },
  ],
}
