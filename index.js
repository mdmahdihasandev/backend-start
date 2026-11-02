let express = require('express')
let app = express()
const mongoose = require('mongoose');
let Task = require('./model/todoModel')

app.use(express.json())


mongoose.connect('mongodb+srv://mehedihasan:2aK6wB0LRf3Q415l@cluster0.2f7fiyr.mongodb.net/todo')
  .then(() => console.log('Connected!rrrr'));

  app.post('/todo', (req,res)=> {

    let {task, priority} = req.body

    console.log(task, priority);

    let todo = new Task({
      task: task,
      priority : priority,
    })

    todo.save()

    res.send(todo)


  })

  function securyte(req,res,next){

    if(req.Headhers.authorization = sdfkjgasegf){
      next()
    }else{
      res.send('okk')
      
      
    }
    

  }


  app.get('/todolist',securyte, async (req, res)=> {

    let data = await Task.find({})
    res.send(data)

  })


  app.delete('/delete/:id', async (req , res)=> {

    let {id} = req.params

     await Task.findOneAndDelete(id)

     res.send('delete')

  })

  app.post('/update/:id', async (req,res)=> {

    let {id} = req.params

    let update = await Task.findOneAndUpdate({_id: id},req.body, {new : true} )
    res.send(update)

  })



app.listen(5000, ()=> {
    console.log('hello developer');
    
})