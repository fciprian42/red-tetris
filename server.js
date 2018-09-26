import express from 'express'
import expressGraphql from 'express-graphql'
import graphqlSchema from './graphql/schema'

const app = express()

app.use('/graphql', expressGraphql({
  schema: graphqlSchema,
  graphiql: true
}))

app.listen(4000)
