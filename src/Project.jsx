import Nav from "./components/Nav"
import '../src/css/Projects.css'
const Projects = () => {
    return(
        <>
            <div className="project-container">
                <div className="addTask">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21Z" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 12H15" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 9V15" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="taskText">
                    <h6>Add Task</h6>
                    <p>Create a task</p>
                </div>
                </div>
                <div className="removeTask">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M12.3335 21C13.5154 21 14.6857 20.7672 15.7776 20.3149C16.8696 19.8626 17.8617 19.1997 18.6975 18.364C19.5332 17.5282 20.1961 16.5361 20.6484 15.4442C21.1007 14.3522 21.3335 13.1819 21.3335 12C21.3335 10.8181 21.1007 9.64778 20.6484 8.55585C20.1961 7.46392 19.5332 6.47177 18.6975 5.63604C17.8617 4.80031 16.8696 4.13738 15.7776 3.68508C14.6857 3.23279 13.5154 3 12.3335 3C9.94655 3 7.65736 3.94821 5.96954 5.63604C4.28171 7.32387 3.3335 9.61305 3.3335 12C3.3335 14.3869 4.28171 16.6761 5.96954 18.364C7.65736 20.0518 9.94655 21 12.3335 21Z" stroke="#EE1C25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.3335 12H15.3335" stroke="#EE1C25" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="removeTask">
                    <h6>Remove Task</h6>
                    <p>remove a task </p>
                </div>
                </div>
            </div>
        </>
    )
}

export default Projects