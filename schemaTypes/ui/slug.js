import { PrefixedSlugInput } from 'sanity-prefixed-slug'

const slug = ({ name = 'slug', title = 'Slug', group = null, fieldset = null, description = null, type = null } = {}) => ({
    name,
    type: 'slug',
    title,
    group,
    fieldset,
    description,
    components: {
        input: PrefixedSlugInput,
    },
    options: {
        source: 'title',
        urlPrefix: (document) => {
            let url = `/`
            url += type || type === '' ? type : document._type ?? ''
            return url;
        },
        isUnique: async (input, context) => {
            const { document, getClient } = context
            const client = getClient({ apiVersion: '2025-08-04' })
            const id = document._id.replace(/^drafts\./, '')
            const params = {
                draft: `drafts.${id}`,
                published: id,
                type: document._type,
                slug: input,
            }
            const query = `!defined(*[!(_id in [$draft, $published]) && _type == $type && slug.current == $slug][0]._id)`
            const result = await client.fetch(query, params)
            return result
        },
        storeFullUrl: true,
    },
    validation: (Rule) => Rule.custom(async (value, { document, getClient }) => {
        if (!value)
        {
            return 'Slug is required'
        }
        return true
    }),
})

export default slug
