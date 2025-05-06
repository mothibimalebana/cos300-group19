import Nav from "./components/Nav"
import '../src/css/Projects.css'
import { useState } from "react"


const Projects = () => {

    const projectManagers = [
        "Tebello Moloto",
        "Tebogo Mashita",
      ];
  // State for storing all projects
  const [projects, setProjects] = useState([]);
  
  // State for controlling modal visibility
  const [showModal, setShowModal] = useState(false);
  
  // State for project form data
  const [projectForm, setProjectForm] = useState({
    name: '',
    manager: '',
    dueDate: '',
    status: 'Not started',
    progress: 0
  });
  
  // State for current task being created
  const [currentTask, setCurrentTask] = useState({
    name: '',
    priority: 'Medium',
    dueDate: '',
    assignedTo: ''
  });
  
  // State for tasks in current project
  const [tasks, setTasks] = useState([]);
  
  // Rest of your component...


  // Handle project form input changes
const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProjectForm({
      ...projectForm,
      [name]: value
    });
  };
  
  // Handle task form input changes
  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setCurrentTask({
      ...currentTask,
      [name]: value
    });
  };
  

// Add a task to the current project
const addTask = (e) => {
    e.preventDefault();
    
    if (!currentTask.name.trim()) {
      alert('Task name is required');
      return;
    }
    
    // Create new task with unique ID
    const newTask = {
      ...currentTask,
      id: Date.now()
    };
    
    // Add to tasks array
    setTasks([...tasks, newTask]);
    
    // Reset task form
    setCurrentTask({
      name: '',
      priority: 'Medium',
      dueDate: '',
      assignedTo: ''
    });
  };
  
  // Remove a task
  const removeTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };


  // Save the project
const saveProject = (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!projectForm.name.trim() || !projectForm.manager || !projectForm.dueDate) {
      alert('Please fill in all required project fields');
      return;
    }
    
    if (tasks.length === 0) {
      alert('Please add at least one task');
      return;
    }
    
    // Create new project object
    const newProject = {
      ...projectForm,
      id: Date.now(),
      tasks: [...tasks],
      createdAt: new Date().toISOString()
    };
    
    // Add to projects array
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    
    // Save to localStorage (optional)
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
    
    // Close modal and reset form
    closeModal();
  };
  
  // Close modal and reset form
  const closeModal = () => {
    setShowModal(false);
    setProjectForm({
      name: '',
      manager: '',
      dueDate: '',
      status: 'Not started',
      progress: 0
    });
    setTasks([]);
  };
    return(
        <>
            <div className="project-container">
                {/*Form */}

        {showModal && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-header">
                <h2>Create Project</h2>
                <button className="close-btn" onClick={closeModal}>&times;</button>
              </div>
              
              <div className="modal-body">
                <form onSubmit={saveProject}>
                  {/* Project Details Section */}
                  <div className="form-section">
                    <h3>Project Details</h3>
                    
                    <div className="form-group">
                      <label htmlFor="name">Project Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter project name"
                        value={projectForm.name}
                        onChange={handleProjectChange}
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="manager">Project Manager</label>
                      <select 
                        id="manager" 
                        name="manager" 
                        value={projectForm.manager}
                        onChange={handleProjectChange}
                        required
                      >
                        <option value="">Select Project Manager</option>
                        {projectManagers.map((manager, index) => (
                          <option key={index} value={manager}>{manager}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="dueDate">Due Date</label>
                      <input 
                        type="date" 
                        id="dueDate" 
                        name="dueDate" 
                        value={projectForm.dueDate}
                        onChange={handleProjectChange}
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Tasks Section */}
                  <div className="form-section">
                    <h3>Tasks</h3>
                    
                    <div className="task-form">
                      <div className="form-group">
                        <label htmlFor="taskName">Task Name</label>
                        <input 
                          type="text" 
                          id="taskName" 
                          name="name" 
                          placeholder="Enter task name"
                          value={currentTask.name}
                          onChange={handleTaskChange}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="priority">Priority</label>
                        <select 
                          id="priority" 
                          name="priority"
                          value={currentTask.priority}
                          onChange={handleTaskChange}
                        >
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                          <option value="Critical">Critical</option>
                        </select>
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="taskDueDate">Due Date</label>
                        <input 
                          type="date" 
                          id="taskDueDate" 
                          name="dueDate"
                          value={currentTask.dueDate}
                          onChange={handleTaskChange}
                        />
                      </div>
                      
                      <div className="form-group">
                        <label htmlFor="assignedTo">Assigned To</label>
                        <select 
                          id="assignedTo" 
                          name="assignedTo"
                          value={currentTask.assignedTo}
                          onChange={handleTaskChange}
                        >
                          <option value="">Select Team Member</option>
                          {projectManagers.map((manager, index) => (
                            <option key={index} value={manager}>{manager}</option>
                          ))}
                        </select>
                      </div>
                      
                      <button type="button" className="add-task-btn" onClick={addTask}>
                        Add Task
                      </button>
                    </div>
                    
                    {/* Tasks List */}
                    <div className="tasks-list">
                      <h4>Added Tasks</h4>
                      {tasks.length === 0 ? (
                        <p className="no-tasks">No tasks added yet</p>
                      ) : (
                        <div id="tasks-container">
                          {tasks.map(task => (
                            <div key={task.id} className="task-item">
                              <div className="task-info">
                                <strong>{task.name}</strong>
                                <div className="task-details">
                                  <span className={`priority priority-${task.priority.toLowerCase()}`}>
                                    {task.priority}
                                  </span>
                                  <span>Due: {task.dueDate || 'Not set'}</span>
                                  <span>Assigned: {task.assignedTo || 'Unassigned'}</span>
                                </div>
                              </div>
                              <button 
                                type="button" 
                                className="remove-task-btn" 
                                onClick={() => removeTask(task.id)}
                              >
                                &times;
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Form Actions */}
                  <div className="form-actions">
                    <button type="button" className="cancel-btn" onClick={closeModal}>
                      Cancel
                    </button>
                    <button type="submit" className="save-btn">
                      Save Project
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
                <div onClick={() => setShowModal(true)} className="addTask flex gap-2">
                <div className="svg-add">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21Z" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 12H15" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 9V15" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="taskText">
                    <h6>Add Task</h6>
                    <p className="subText">Create a task</p>
                </div>
                </div>
                <div className="removeTask flex gap-2">
                <div className="svg-remove">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M12.3335 21C13.5154 21 14.6857 20.7672 15.7776 20.3149C16.8696 19.8626 17.8617 19.1997 18.6975 18.364C19.5332 17.5282 20.1961 16.5361 20.6484 15.4442C21.1007 14.3522 21.3335 13.1819 21.3335 12C21.3335 10.8181 21.1007 9.64778 20.6484 8.55585C20.1961 7.46392 19.5332 6.47177 18.6975 5.63604C17.8617 4.80031 16.8696 4.13738 15.7776 3.68508C14.6857 3.23279 13.5154 3 12.3335 3C9.94655 3 7.65736 3.94821 5.96954 5.63604C4.28171 7.32387 3.3335 9.61305 3.3335 12C3.3335 14.3869 4.28171 16.6761 5.96954 18.364C7.65736 20.0518 9.94655 21 12.3335 21Z" stroke="#EE1C25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.3335 12H15.3335" stroke="#EE1C25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="taskText">
                    <h6>Remove Task</h6>
                    <p className="subText">remove a task </p>
                </div>
                </div>

                <div className="trackProjects row-start-2">
                    <p>track projects</p>
                </div>

                <div className="projects grid col-start-2 col-end-4">
                    <div className="heading col-start-1 col-end-6">
                        <h3 className="projects-heading">Projects</h3>
                        <p>Check your latest projects</p>
                    </div>
                    <div className="options row-start-2"></div>
                    <div className="task row-start-3 col-start-1 col-end-6">
                    <table className="projects-table">
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Project manager</th>
                        <th>Due date</th>
                        <th>Status</th>
                        <th>Progress</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map(project => (
                        <tr key={project.id}>
                            <td>{project.name}</td>
                            <td>{project.manager}</td>
                            <td>{project.dueDate}</td>
                            <td>
                            <span className={`status status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                                {project.status}
                            </span>
                            </td>
                            <td>
                            <div className="progress-circle">
                                <span>{project.progress}%</span>
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects