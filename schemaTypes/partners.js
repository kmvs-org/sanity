import { MdHub } from "react-icons/md"
import { translatedField } from './lang'

import title from './ui/title'

const partner = {
    name: 'partner',
    title: 'Partner',
    type: 'object',
    fields: [
        translatedField(
            {
                name: 'name',
                title: 'Name',
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required(),
            }
        ),
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            validation: (Rule) => Rule.required().assetRequired(),
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url',
        },
    ],
    preview: {
        select: {
            title: 'name.en',
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
            ...title,
            options: {
                columns: 2,
            }
        },
        translatedField(
            {
                name: 'overview',
                title: 'Overview',
            },
            {
                type: 'text',
                rows: 5,
            }
        ),
        {
            name: 'image',
            title: 'Banner Image',
            type: 'image',
            validation: (Rule) => Rule.required().assetRequired(),
        },
        translatedField(
            {
                name: 'heading_1',
                title: 'Organisations Section Heading',
                description: 'Eg. Partner Organisations',
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
            name: 'organisations',
            title: 'Partner Organisations',
            type: 'array',
            of: [partner],
        },
        translatedField(
            {
                name: 'heading_2',
                title: 'Networks Section Heading',
                description: 'Eg. Partner Networks',
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
            name: 'networks',
            title: 'Partner Networks',
            type: 'array',
            of: [partner],
        },
        translatedField(
            {
                name: 'heading_3',
                title: 'Collaborations Section Heading',
                description: 'Eg. Collaborations',
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
            name: 'collaborators',
            title: 'Collaborations',
            type: 'array',
            of: [
                {
                    name: 'partner',
                    title: 'Partner',
                    type: 'object',
                    fields: [
                        translatedField(
                            {
                                name: 'name',
                                title: 'Name',
                                validation: (Rule) => Rule.required(),
                            },
                            {
                                type: 'string',
                                validation: (Rule) => Rule.required(),
                            }
                        ),
                    ],
                    preview: {
                        select: {
                            title: 'name.en',
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
            title: 'title.en',
        },
    },
}