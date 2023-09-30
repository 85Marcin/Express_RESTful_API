const express = require("express")

const createRouter = (data) => {
  const router = express.Router()

  router.get("/", (req, res) => {
    res.json(data)
  })

  router.get("/:id", (req, res) => {
    //id is the index , there is no database
    res.json(data[req.params.id])
  })

  router.post("/", (req, res) => {
    teas.push(req.body)
    res.json(data)
  })

  router.delete("/:id", (req, res) => {
    teas.splice(req.params.id, 1)
    res.json(data)
  })

  router.put("/:id", (req, res) => {
    teas[req.params.id] = req.body
    res.json(data)
  })
  return router
}

module.exports = createRouter
