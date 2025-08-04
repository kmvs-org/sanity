import { MdHub } from "react-icons/md"


const partner = {
    name: 'partner',
    title: 'Partner',
    type: 'object',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'link',
            media: 'logo',
        },
        prepare(selection) {
            const { title, subtitle, media } = selection
            return {
                title: title,
                subtitle: subtitle,
                media: media,
            }
        },
    },
}

export default {
    name: 'partners',
    title: 'Partners',
    type: 'document',
    icon: MdHub,
    fields: [
        {
            name: 'overview',
            title: 'Overview',
            type: 'text',
            rows: 5,
        },
        {
            name: 'image',
            title: 'Banner Image',
            type: 'image',
        },
        {
            name: 'organisations',
            title: 'Partner Organisations',
            type: 'array',
            of: [partner],
        },
        {
            name: 'networks',
            title: 'Partner Networks',
            type: 'array',
            of: [partner],
        },
        {
            name: 'collaborators',
            title: 'Collaborations',
            type: 'array',
            of: [
                {
                    name: 'partner',
                    title: 'Partner',
                    type: 'object',
                    fields: [
                        {
                            name: 'name',
                            title: 'Name',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                    ],
                    preview: {
                        select: {
                            title: 'name',
                        },
                        prepare(selection) {
                            const { title } = selection
                            return {
                                title: title,
                            }
                        },
                    },
                }
            ],
        },
    ],
    preview: {
        select: {
        },
        prepare() {
            return {
                title: 'Our Partners',
            }
        },
    },
}