import { IoCalendarClearSharp } from 'react-icons/io5'

import title from './ui/title'
import image from './ui/image'
import slug from './ui/slug'
import excerpt from './ui/excerpt'
import content from './ui/content'


export default {
    name: 'event',
    type: 'document',
    title: 'Event',
    icon: IoCalendarClearSharp,

    fields: [
        title,
        slug({ type: 'events' }),
        {
            name: 'start_date',
            type: 'date',
            title: 'Start Date',
            description: 'Used to order the events, latest first.',
            validation: (Rule) => Rule.required(),
        },
        image,
        excerpt,
        content,
    ],
    preview: {
        select: {
            title: 'title.en',
            subtitle: 'excerpt.en',
            media: 'image',
        },
    },
}
