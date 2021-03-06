const graphql = require('graphql')
const blogDatabase = require('./blogDatabase')

// Define the Person Type. Minute 13:40 of the video.
const Person = new graphql.GraphQLObjectType({
  name: 'Person',
  description: 'This represent a Person',
  fields: () => {
    return {
      id: {
        type: graphql.GraphQLInt,
        resolve(person) {
          return person.id
        }
      },
      firstName: {
        type: graphql.GraphQLString,
        resolve(person) {
          return person.firstName
        }
      },
      lastName: {
        type: graphql.GraphQLString,
        resolve(person) {
          return person.lastName
        }
      },
      email: {
        type: graphql.GraphQLString,
        resolve(person) {
          return person.email
        }
      },
    }
  },
})

// Define the Post Type. Minute 19:40 of the video.
const Post = new graphql.GraphQLObjectType({
  name: 'Post',
  description: 'This is a Post',
  fields: () => {
    return {
      id: {
        type: graphql.GraphQLInt,
        resolve(post) {
          return post.id
        }
      },
      title: {
        type: graphql.GraphQLString,
        resolve(post) {
          return post.title
        }
      },
      content: {
        type: graphql.GraphQLString,
        resolve(post) {
          return post.content
        }
      },
      // TODO: Relate a person with a post. Minute 33:40 of the video.
    }
  },
})

// Create the root query, starter point to GraphQL for give shape to the data. Minute 20:48 of the video.
const Query = new graphql.GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => {
    return {
      people: {
        type: new graphql.GraphQLList(Person),
        args: {
          id: {
            type: graphql.GraphQLInt,
          },
          email: {
            type: graphql.GraphQLString,
          },
        },
        // You should define what args you expected to prevent security issues
        resolve(root, args) {
          return blogDatabase.models.person.findAll({where: args})
        }
      },
      posts: {
        type: new graphql.GraphQLList(Post),
        resolve(root, args) {
          return blogDatabase.models.post.findAll({where: args})
        }
      }
    }
  }
})

// Introduction to Mutation concept in GraphQL. Minute 37:00 of the video.
const Mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  description: "function to create stuff",
  fields() {
    return {
      addPerson: {
        type: Person,
        args: {
          firstName: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString),
          },
          lastName: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString),
          },
          email: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString),
          },
        },
        resolve(_, args) {
          return blogDatabase.models.person.create({
            firstName: args.firstName,
            lastName: args.lastName,
            email: args.email.toLowerCase(),
          })
        }
      }
    }
  }
})

// Create the Schema. Minute 25:36 of the video. Use the GraphQLList
const Schema = new graphql.GraphQLSchema({
  query: Query,
  mutation: Mutation
})

module.exports = Schema