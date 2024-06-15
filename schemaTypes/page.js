import {HiDocument} from 'react-icons/hi2'
import content from './ui/content'
import title from './ui/title'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: HiDocument,
  fields: [title, content],
}
