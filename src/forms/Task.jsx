function CreateTask() {
    const handleSubmit = (event) => {
      event.preventDefault();
      // reset the form
      event.target.reset();
    };
    return (
<div class="modal-overlay">
  <div class="modal-content">
    <div class="modal-header">
      <h2>Create Project</h2>
      <button class="close-btn">&times;</button>
    </div>
    
    <div class="modal-body">
      <form id="project-form">
        <div class="form-section">
          <h3>Project Details</h3>
          
          <div class="form-group">
            <label for="project-name">Project Name</label>
            <input 
              type="text" 
              id="project-name" 
              name="projectName" 
              placeholder="Enter project name" 
              required
            />
          </div>
          
          <div class="form-group">
            <label for="project-manager">Project Manager</label>
            <select id="project-manager" name="projectManager" required>
              <option value="">Select Project Manager</option>
              <option value="Om prakash sao">Om prakash sao</option>
              <option value="Neilsan mando">Neilsan mando</option>
              <option value="Tiruvelly priya">Tiruvelly priya</option>
              <option value="Matte hannery">Matte hannery</option>
              <option value="Sukumar rao">Sukumar rao</option>
            </select>
          </div>
          
          <div class="form-group">
            <label for="project-due-date">Due Date</label>
            <input 
              type="date" 
              id="project-due-date" 
              name="projectDueDate" 
              required
            />
          </div>
        </div>
        
        <div class="form-section">
          <h3>Tasks</h3>
          
          <div class="task-form">
            <div class="form-group">
              <label for="task-name">Task Name</label>
              <input 
                type="text" 
                id="task-name" 
                name="taskName" 
                placeholder="Enter task name"
              />
            </div>
            
            <div class="form-group">
              <label for="task-priority">Priority</label>
              <select id="task-priority" name="taskPriority">
                <option value="Low">Low</option>
                <option value="Medium" selected>Medium</option>
                <option value="High">High</option>
                <option value="Critical">Critical</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="task-due-date">Due Date</label>
              <input 
                type="date" 
                id="task-due-date" 
                name="taskDueDate"
              />
            </div>
            
            <div class="form-group">
              <label for="task-assigned">Assigned To</label>
              <select id="task-assigned" name="taskAssigned">
                <option value="">Select Team Member</option>
                <option value="Om prakash sao">Om prakash sao</option>
                <option value="Neilsan mando">Neilsan mando</option>
                <option value="Tiruvelly priya">Tiruvelly priya</option>
                <option value="Matte hannery">Matte hannery</option>
                <option value="Sukumar rao">Sukumar rao</option>
              </select>
            </div>
            
            <button type="button" class="add-task-btn" id="add-task-btn">
              Add Task
            </button>
          </div>
          
          <div class="tasks-list">
            <h4>Added Tasks</h4>
            <div id="tasks-container">

              <p class="no-tasks">No tasks added yet</p>
              
              <div class="task-item">
                <div class="task-info">
                  <strong>Task Name Example</strong>
                  <div class="task-details">
                    <span class="priority priority-medium">Medium</span>
                    <span>Due: 2023-12-31</span>
                    <span>Assigned: Om prakash sao</span>
                  </div>
                </div>
                <button type="button" class="remove-task-btn" data-task-id="1">&times;</button>
              </div>
            </div>
          </div>
        </div>
        <div class="form-actions">
          <button type="button" class="cancel-btn" id="cancel-btn">
            Cancel
          </button>
          <button type="submit" class="save-btn" id="save-btn">
            Save Project
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    );
  }
  export default CreateTask