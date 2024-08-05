import {HiChatBubbleBottomCenterText} from 'react-icons/hi2'

// noinspection JSUnusedGlobalSymbols
export default {
  name: 'quote',
  type: 'object',
  title: 'Quote',
  icon: HiChatBubbleBottomCenterText,
  fields: [
    {
      name: 'color',
      type: 'string',
      title: 'Color',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          {title: 'Violet', value: 'violet'},
          {title: 'Pink', value: 'pink'},
          {title: 'Blue', value: 'blue'},
        ],
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'quote',
      type: 'text',
      title: 'Quote',
    },
    {
      name: 'author',
      type: 'object',
      title: 'Author',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'description',
          type: 'string',
          title: 'Description',
        },
        {
          name: 'image',
          type: 'image',
          title: 'Image',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      authorName: 'author.name',
      authorImage: 'author.image',
    },
    prepare(selection) {
      const {title, authorName, authorImage} = selection

      return {
        title: title,
        subtitle: authorName,
        media: authorImage,
      }
    },
  },
}
