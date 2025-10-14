import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: 'k53lfb44',
        dataset: 'production'
    },
    deployment: {
        autoUpdates: true,
        appId: 'f53zocscmaqt2f09bpiu5mzp',
    },
})
