import { IoLanguage } from 'react-icons/io5'
import { translatedField } from './lang'

export default {
    name: 'translations',
    type: 'document',
    title: 'Translations',
    icon: IoLanguage,

    groups: [
        {
            name: 'programmes',
            title: 'Programmes',
        },
        {
            name: 'resources',
            title: 'Resources',
        },
        {
            name: 'reports',
            title: 'Reports',
        },
        {
            name: 'events',
            title: 'Events',
        },
        {
            name: 'impact',
            title: 'Impact Stories',
        },
        {
            name: 'search',
            title: 'Search Results',
        },
    ],

    fieldsets: [
        {
            name: 'programmes',
            title: 'Programmes',
            options: {
                collapsible: true,
            }
        },
        {
            name: 'resources',
            title: 'Resources',
            options: {
                collapsible: true,
            }
        },
        {
            name: 'reports',
            title: 'Reports',
            options: {
                collapsible: true,
            }
        },
        {
            name: 'events',
            title: 'Events',
            options: {
                collapsible: true,
            }
        },
        {
            name: 'impact',
            title: 'Impact Stories',
            options: {
                collapsible: true,
            }
        },
        {
            name: 'search',
            title: 'Search Results',
            options: {
                collapsible: true,
            }
        },
    ],

    fields: [
        translatedField(
            {
                name: 'general_1',
                title: 'Read More Link Text',
                description: 'Eg. Read More',
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
                name: 'programmes_1',
                title: 'Page Heading',
                description: 'Eg. What We Do',
                fieldset: 'programmes',
                group: 'programmes',
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
                name: 'resources_1',
                title: 'Page Heading',
                description: 'Eg. Media & Resources',
                fieldset: 'resources',
                group: 'resources',
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
                name: 'resources_2',
                title: 'Filter Option Text - All',
                description: 'Eg. All',
                fieldset: 'resources',
                group: 'resources',
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
                name: 'resources_3',
                title: 'Filter Option Text - Research Studies',
                description: 'Eg. Research Studies',
                fieldset: 'resources',
                group: 'resources',
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
                name: 'resources_4',
                title: 'Filter Option Text - News Articles',
                description: 'Eg. News Articles',
                fieldset: 'resources',
                group: 'resources',
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
                name: 'resources_5',
                title: 'Filter Option Text - Videos',
                description: 'Eg. Videos',
                fieldset: 'resources',
                group: 'resources',
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
                name: 'resources_6',
                title: 'Video Link Text',
                description: 'Eg. Watch Now',
                fieldset: 'resources',
                group: 'resources',
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
                name: 'reports_1',
                title: 'Page Heading',
                description: 'Eg. Reports',
                fieldset: 'reports',
                group: 'reports',
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
                name: 'reports_2',
                title: 'Filter Option Text - All',
                description: 'Eg. All',
                fieldset: 'reports',
                group: 'reports',
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
                name: 'reports_3',
                title: 'Filter Option Text - Annual Reports',
                description: 'Eg. Annual Reports',
                fieldset: 'reports',
                group: 'reports',
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
                name: 'reports_4',
                title: 'Filter Option Text - Audit Reports',
                description: 'Eg. Audit Reports',
                fieldset: 'reports',
                group: 'reports',
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
                name: 'events_1',
                title: 'Page Heading',
                description: 'Eg. Events',
                fieldset: 'events',
                group: 'events',
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
                name: 'impact_1',
                title: 'Page Heading',
                description: 'Eg. Impact Stories',
                fieldset: 'impact',
                group: 'impact',
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
                name: 'impact_2',
                title: 'Programme Link Text Prefix',
                description: 'Eg. A story from',
                fieldset: 'impact',
                group: 'impact',
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
                name: 'impact_3',
                title: 'Linked Stories Heading',
                description: 'Eg. Read More Stories',
                fieldset: 'impact',
                group: 'impact',
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
                name: 'search_1',
                title: 'Page Heading',
                description: 'Eg. Search Results',
                fieldset: 'search',
                group: 'search',
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
                name: 'search_2',
                title: 'No Results Found Prefix',
                description: 'Eg. No results found for',
                fieldset: 'search',
                group: 'search',
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
                name: 'search_3',
                title: 'Results Found Prefix',
                description: 'Eg. Results found for',
                fieldset: 'search',
                group: 'search',
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
                name: 'search_4',
                title: 'Result Category - Programme',
                description: 'Eg. Programme',
                fieldset: 'search',
                group: 'search',
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
                name: 'search_5',
                title: 'Result Category - Resource',
                description: 'Eg. Resource',
                fieldset: 'search',
                group: 'search',
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
                name: 'search_6',
                title: 'Result Category - Report',
                description: 'Eg. Report',
                fieldset: 'search',
                group: 'search',
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
                name: 'search_7',
                title: 'Result Category - Event',
                description: 'Eg. Event',
                fieldset: 'search',
                group: 'search',
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
                name: 'search_8',
                title: 'Result Category - Impact Story',
                description: 'Eg. Impact Story',
                fieldset: 'search',
                group: 'search',
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
                name: 'search_9',
                title: 'Search Box Title',
                description: 'Eg. Search',
                fieldset: 'search',
                group: 'search',
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
                name: 'search_10',
                title: 'Search Box Prompt',
                description: 'Eg. Programmes, resources, reports, impact stories',
                fieldset: 'search',
                group: 'search',
                options: {
                    columns: 2,
                },
                validation: (Rule) => Rule.required(),
            },
            {
                type: 'string',
                validation: (Rule) => Rule.required().max(50),
            }
        ),
    ],
    preview: {
        prepare() {
            return {
                title: 'Miscellaneous Text',
            }
        },
    },
}