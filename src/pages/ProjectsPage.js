import { Link, useNavigate } from 'react-router-dom'

const ProjectsPage = () => {
  let navigate = useNavigate()
  return (
    <div>
      <h1>Portfolio Projects</h1>
      <div className="stock-img">
        <img
          style={{
            width: '500px',
            height: '400px',
            margin: '60px',
            border: '10px pink solid',
            borderRadius: '10px'
          }}
          src="https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg"
        />
        <img
          style={{
            width: '500px',
            height: '400px',
            margin: '60px',
            border: '10px pink solid',
            borderRadius: '10px'
          }}
          src="https://www.zamperla.com/wp-content/uploads/2014/09/Fimg-Giant_discovery_31024-x-768.jpg"
        />
        <img
          style={{
            width: '500px',
            height: '400px',
            margin: '60px',
            border: '10px pink solid',
            borderRadius: '10px'
          }}
          src="https://sm.mashable.com/t/mashable_sea/photo/default/lofi-anime-girl-hip-hop-chilled-cow_4m7v.1200.jpg"
        />
      </div>
    </div>
  )
}

export default ProjectsPage
