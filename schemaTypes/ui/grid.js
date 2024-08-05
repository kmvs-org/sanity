import {BsGrid1X2Fill} from 'react-icons/bs'

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'grid',
  type: 'object',
  title: 'Grid',
  icon: BsGrid1X2Fill,
  fields: [
    {
      name: 'style',
      type: 'string',
      title: 'Style',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Masonry Layout With Images', value: '1'},
          {title: 'List Layout With Images', value: '2'},
          {title: 'Masonry Layout Without Images', value: '3'},
        ],
      },
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      validation: (Rule) => Rule.max(3).min(2),
      of: [
        {
          name: 'item',
          type: 'object',
          title: 'Item',
          fields: [
            {
              name: 'text',
              type: 'text',
              title: 'Text',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
            },
          ],
          preview: {
            select: {
              title: 'text',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      style: 'style',
      items: 'items',
    },
    prepare(selection) {
      const {style, items} = selection
      const styleTitle =
        style === '1'
          ? 'Masonry Layout With Images'
          : style === '2'
            ? 'List Layout With Images'
            : style === '3'
              ? 'Masonry Layout Without Images'
              : ''
      const itemCount = items ? items.length : 0
      return {
        title: `Grid - ${styleTitle}`,
        subtitle: `${itemCount} grid items`,
      }
    },
  },
}
