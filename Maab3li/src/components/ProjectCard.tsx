import '../ProjectsSlider.css'

export const ProjectCard = (src:string) => {
  return (
    <div className="w-20 h-20 rounded">
        <img src={src} alt="project image" />
    </div>
  )
}
