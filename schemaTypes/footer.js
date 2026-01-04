import { IoLinkOutline } from 'react-icons/io5'
import { translatedField } from './lang'
import title from './ui/title'

const menuItem = {
    name: 'menuItem',
    type: 'object',
    title: 'Menu Item',
    icon: IoLinkOutline,
    fields: [
        translatedField(
            {
                name: 'text',
                title: 'Text',
                description: 'Max character count: 20',
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.max(20).required(),
            }
        ),
        {
            name: 'link',
            type: 'url',
            title: 'Realtive URL',
            description: 'E.g. /programmes/yuva-vani/',
            validation: (Rule) => Rule.uri({ allowRelative: true, relativeOnly: true }).required(),
        },
    ],
    preview: {
        select: {
            title: 'text.en',
            subtitle: 'link',
        },
    },
}

export default {
    name: 'footer',
    type: 'document',
    title: 'Footer',
    fields: [
        {
            ...title,
            options: {
                columns: 2,
            }
        },
        translatedField(
            {
                name: 'heading_1',
                title: 'Contact Form Heading',
                description: 'Eg. Contact',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        translatedField(
            {
                name: 'heading_2',
                title: 'Newsletter Form Heading',
                description: 'Eg. Newsletter',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        translatedField(
            {
                name: 'label_name',
                title: 'Name Field Label',
                description: 'Eg. Name',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        translatedField(
            {
                name: 'label_email',
                title: 'Email Field Label',
                description: 'Eg. Email',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        translatedField(
            {
                name: 'label_phone',
                title: 'Phone Field Label',
                description: 'Eg. Mobile Number',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        translatedField(
            {
                name: 'label_message',
                title: 'Message Field Label',
                description: 'Eg. Message',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        translatedField(
            {
                name: 'label_submit',
                title: 'Submit Button Text',
                description: 'Eg. Submit',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        translatedField(
            {
                name: 'label_subscribe',
                title: 'Subscribe Button Text',
                description: 'Eg. Subscribe',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        translatedField(
            {
                name: 'submit_success',
                title: 'Submit Success Message',
                description: 'Eg. Thank you for getting in touch! We will get back to you soon.',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        translatedField(
            {
                name: 'subscribe_success',
                title: 'Subscribe Success Message',
                description: 'Eg. Thank you for subscribing!',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        {
            name: 'logo',
            type: 'image',
            title: 'Logo',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'menu',
            type: 'array',
            title: 'Menu',
            of: [menuItem],
            validation: (Rule) => Rule.min(1).max(12),
        },
        translatedField(
            {
                name: 'heading_3',
                title: 'KMVS Office Address Heading',
                description: 'Eg. Registered Office',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        translatedField(
            {
                name: 'address',
                title: 'Address',
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required(),
            }
        ),
    ],
    preview: {
        prepare() {
            return {
                title: 'Footer',
            }
        },
    },
}
