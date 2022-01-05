 const  AddTask = (date, task, addTask, addDate, addTaskText) => (
    <>
    <input type="text" value={task} onChange={addTaskText}  />
    <input type="text" value={date} onChange={addDate}  />
    <input type="submit" name="Submit" onClick={addTask} />
    </>
    
)


export default AddTask