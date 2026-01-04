export const languages = [
    { id: 'en', title: 'English', isDefault: true },
    { id: 'gu', title: 'Gujarati' },
]

export const baseLanguage = languages.find(l => l.isDefault)

export const translatedField = (object_props = {}, field_props = {}) => ({
    ...object_props,
    type: 'object',

    fields: languages.map(lang => ({
        ...field_props,
        title: lang.title,
        name: lang.id,
    }))
})