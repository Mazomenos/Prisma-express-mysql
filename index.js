import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/feed', async (req, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
  })

app.get('/julian', async (req, res) => {
    const neo_user = await prisma.user.create(
        {data: {
            name: "Julian"
        }}
    )
    res.json(neo_user)
  })

app.get('/del', async (req, res) => {
    await prisma.user.deleteMany()
    res.send("Deleted")
  })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})