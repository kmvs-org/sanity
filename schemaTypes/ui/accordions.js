import { nonTranslatedButton } from './button'
import { TfiLayoutAccordionMerged } from 'react-icons/tfi'

const accordion = {
  name: 'accordion',
  type: 'object',
  title: 'Accordion',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'text',
      type: 'text',
      title: 'Text',
      validation: (Rule) => Rule.required(),
    },
    nonTranslatedButton,
  ],
}

export default {
  name: 'accordions',
  type: 'array',
  title: 'Accordions',
  icon: TfiLayoutAccordionMerged,
  of: [accordion],
}
