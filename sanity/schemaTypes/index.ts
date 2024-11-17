import { type SchemaTypeDefinition } from 'sanity'
import { blogsTypes1 , blogsTypes2} from './blogsTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogsTypes1 , blogsTypes2],
}
