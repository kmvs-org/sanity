import { type SlugSourceContext } from '@sanity/types'
import { useMemo } from 'react'
import {
    useCurrentUser,
    useDataset,
    useProjectId,
    useSchema,
    useClient
} from 'sanity'

/**
 * @internal
 */
export type SlugContext = Omit<SlugSourceContext, 'parent' | 'parentPath'>

/**
 * @internal
 */
export function useSlugContext(): SlugContext {
    const client = useClient({ apiVersion: '2025-08-04' })
    const schema = useSchema()
    const currentUser = useCurrentUser()
    const projectId = useProjectId()
    const dataset = useDataset()

    return useMemo(() => {
        return {
            projectId,
            dataset,
            getClient: () => client,
            schema: schema,
            currentUser,
        }
    }, [client, schema, currentUser, projectId, dataset])
}