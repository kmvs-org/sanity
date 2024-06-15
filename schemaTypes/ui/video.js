import {PiVideoFill} from 'react-icons/pi'

export default {
  name: 'video',
  type: 'object',
  title: 'Video',
  icon: PiVideoFill,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'youtube',
      type: 'url',
      title: 'YouTube Link',
      validation: (Rule) =>
        Rule.required().custom((url) => {
          // Regular expression to validate YouTube video URL with a video ID
          const regex =
            /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|live\/|v\/)?)([\w\-]+)(\S+)?$/
          return regex.test(url) ? true : 'Please enter a valid YouTube video URL'
        }),
    },
  ],
}
