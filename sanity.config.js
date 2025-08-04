import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

import { HiDocumentDuplicate } from 'react-icons/hi2'
import { GoGoal } from 'react-icons/go'
import { FaAward } from 'react-icons/fa'
import { MdHub } from 'react-icons/md'
import {
    BsBuildingFillGear,
    BsStack,
    BsFillSignpost2Fill,
} from 'react-icons/bs'
import {
    IoCalendarClearSharp,
    IoPeople,
    IoMenu,
    IoHome,
    IoBook,
} from 'react-icons/io5'
import { IoMdMegaphone } from 'react-icons/io'


// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore'])

// Define the singleton document types
const singletonTypes = new Set(['siteDetails', 'header', 'footer', 'homepage', 'ourStory', 'team', 'awards', 'partners'])

const singletonListItem = (S, typeName, title) =>
    S.listItem()
        .title(title || typeName)
        .id(typeName)
        .child(S.document().schemaType(typeName).documentId(typeName).title(title))

export default defineConfig({
    name: 'default',
    title: 'KMVS Website',

    projectId: 'k53lfb44',
    dataset: 'production',

    plugins: [
        structureTool({
            title: 'Content',
            structure: (S) =>
                S.list()
                    .title('Content')
                    .items([
                        // Our singleton type has a list item with a custom child
                        S.divider(),
                        singletonListItem(S, 'siteDetails', 'Site Details').icon(BsBuildingFillGear),
                        singletonListItem(S, 'header', 'Header').icon(IoMenu),
                        singletonListItem(S, 'footer', 'Footer').icon(IoMenu),
                        S.divider(),
                        singletonListItem(S, 'homepage', 'Home Page').icon(IoHome),
                        singletonListItem(S, 'ourStory', 'Our Story').icon(IoBook),
                        singletonListItem(S, 'team', 'Team & Board').icon(IoPeople),
                        singletonListItem(S, 'awards', 'Awards & Recognition').icon(FaAward),
                        singletonListItem(S, 'partners', 'Our Partners').icon(MdHub),
                        S.documentTypeListItem('page').title('Other Pages').icon(HiDocumentDuplicate),
                        S.divider(),
                        // Regular document types
                        S.documentTypeListItem('programme').title('Programmes').icon(GoGoal),
                        S.documentTypeListItem('resource').title('Resources').icon(BsStack),
                        S.documentTypeListItem('event').title('Events').icon(IoCalendarClearSharp),
                        S.documentTypeListItem('opportunity').title('Careers').icon(BsFillSignpost2Fill),
                        S.documentTypeListItem('impactStory').title('Impact Stories').icon(IoMdMegaphone),
                    ]),
        }),
        ...(process.env.NODE_ENV === 'development' ? [visionTool()] : []),
    ],

    schema: {
        types: schemaTypes,

        // Filter out singleton types from the global “New document” menu options
        templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
    },

    document: {
        // For singleton types, filter out actions that are not explicitly included
        // in the `singletonActions` list defined above
        actions: (input, context) =>
            singletonTypes.has(context.schemaType)
                ? input.filter(({ action }) => action && singletonActions.has(action))
                : input,
    },
})
