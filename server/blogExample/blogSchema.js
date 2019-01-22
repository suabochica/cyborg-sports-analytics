import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
} from 'graphql'
import blogDatabase from './blogDatabase'

const Person = new GraphQLObjectType({
  name: 'Person',
  description: 'This represent a Person',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(person) {
          return person.id
        }
      },
      firstName: {
        type: GraphQLString,
        resolve(person) {
          return person.firstName
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(person) {
          return person.lastName
        }
      },
      email: {
        type: GraphQLString,
        resolve(person) {
          return person.email
        }
      },
    }
  },
})

// TODO: Define the Post Schema. Minute 19:40 of the video.