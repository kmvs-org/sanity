import { IoLinkOutline, IoListOutline } from 'react-icons/io5'
import { translatedField } from './lang'

const subMenuItem = {
    name: 'subMenuItem',
    type: 'object',
    title: 'Sub Menu Item',
    icon: IoLinkOutline,
    fields: [
        translatedField(
            {
                name: 'text',
                title: 'Text',
                description: 'Max character count: 25',
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(25),
            }
        ),
        {
            name: 'link',
            type: 'url',
            title: 'Relative URL',
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

const menuItem = {
    name: 'menuItem',
    type: 'object',
    title: 'Menu Item',
    icon: IoListOutline,
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
                validation: (Rule) => Rule.required().max(20),
            }
        ),
        {
            name: 'subMenu',
            type: 'array',
            title: 'Sub Menu',
            of: [subMenuItem],
        },
    ],
    preview: {
        select: {
            title: 'text.en',
        },
    },
}

export default {
    name: 'header',
    type: 'document',
    title: 'Header',
    fields: [
        {
            name: 'logo',
            type: 'image',
            title: 'Logo',
            validation: (Rule) => Rule.required().assetRequired(),
        },
        {
            name: 'menu',
            type: 'array',
            title: 'Menu',
            of: [menuItem],
            validation: (Rule) => Rule.max(5),
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Header',
            }
        },
    },
}
