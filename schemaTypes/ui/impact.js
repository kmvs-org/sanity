import { IoMdMegaphone } from "react-icons/io";

export default {
    name: 'impact',
    type: 'object',
    title: 'Impact',
    icon: IoMdMegaphone,
    fields: [
        {
            title: 'Impact Story',
            name: 'impactStory',
            type: 'reference',
            to: [{ type: 'impactStory' }],
            options: {
                disableNew: true,
            }
        }
    ],
    preview: {
        select: {
            title: 'impactStory.title.en',
            excerpt: 'impactStory.excerpt.en',
            image: 'impactStory.image',
        },
        prepare(selection) {
            const { title, excerpt, image } = selection;

            return {
                title: `Impact Story: ${title}`,
                subtitle: excerpt,
                media: image,
            }
        },
    },
}
