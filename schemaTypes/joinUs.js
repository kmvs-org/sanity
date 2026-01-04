import { FaBuildingUser } from "react-icons/fa6";
import title from './ui/title'
import image from './ui/image'
import content from './ui/content'
import { translatedField } from './lang'


export default {
    name: 'joinUs',
    title: 'Join Us',
    type: 'document',
    icon: FaBuildingUser,
    fields: [
        {
            ...title,
            options: {
                columns: 2,
            }
        },
        {
            name: 'banner',
            title: 'Banner',
            type: 'object',
            fields: [
                image,
                translatedField(
                    {
                        name: 'line_1',
                        title: 'Line 1',
                        description: 'Eg. KMVS is more than an organisation',
                    },
                    {
                        type: 'string',
                        validation: (Rule) => Rule.required().max(40),
                    }
                ),
                translatedField(
                    {
                        name: 'line_2',
                        title: 'Line 2',
                        description: 'Eg. It\'s a movement',
                    },
                    {
                        type: 'string',
                        validation: (Rule) => Rule.required().max(20),
                    }
                ),
                translatedField(
                    {
                        name: 'line_3',
                        title: 'Line 3',
                        description: 'Eg. Come join us',
                    },
                    {
                        type: 'string',
                        validation: (Rule) => Rule.required().max(20),
                    }
                ),
            ],
        },
        content,
    ],
    preview: {
        prepare() {
            return {
                title: 'Join Us',
            }
        },
    },
}