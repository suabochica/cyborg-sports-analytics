import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
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

// Define the Post Schema. Minute 19:40 of the video.
const Post = new GraphQLObjectType({
  name: 'Post',
  description: 'This is a Post',
  fields: () => {
    return {
      id: {
        type: GraphQLInt,
        resolve(post) {
          return post.id
        }
      },
      title: {
        type: GraphQLString,
        resolve(post) {
          return post.title
        }
      },
      content: {
        type: GraphQLString,
        resolve(post) {
          return post.content
        }
      },
    }
  },
})

// Create the root query, starter point to GraphQL for give shape to the data . Minute 20:48 of the video.
const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => {
    return {
      people: {
        type: new GraphQLList(Person),
        args: {
          id: {
            type: GraphQLInt,
          },
          email: {
            type: GraphQLString,
          },
        },
        // You should define what args you expected to prevent security issues
        resolve(root, args) {
          return blogDatabase.models.person.findAll({where:args})
        }
      }
    }
  }
})

// Create the Schema. Minute 25:36 of the video. Use the GraphQLList

const Schema = new GraphQLSchema({
  query: Query
})

export default Schema