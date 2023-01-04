import { Link, useNavigate } from 'react-router-dom'

const ProjectsPage = () => {
  let navigate = useNavigate()
  return (
    <div>
      <h1 className="home">Portfolio Projects</h1>
      <div className="stock-img">
        <a target="blank" href="https://anime-revival-frontend.herokuapp.com/">
          <img
            style={{
              width: '500px',
              height: '400px',
              margin: '40px',
              border: '10px hotpink solid',
              borderRadius: '10px',
              boxShadow: 'black 1px 1px 9px 6px'
            }}
            src="https://sm.mashable.com/t/mashable_sea/photo/default/lofi-anime-girl-hip-hop-chilled-cow_4m7v.1200.jpg"
          />{' '}
          <h2>Anime Revival Blog</h2>
          <h4>
            Created using React, Sequelize, Postgres, Express, PSQL, AuthO
          </h4>
        </a>
        <a target="blank" href="https://you-buyapp.herokuapp.com/">
          {' '}
          <img
            style={{
              width: '500px',
              height: '400px',
              margin: '40px',
              border: '10px hotpink solid',
              borderRadius: '10px',
              boxShadow: 'black 1px 1px 9px 6px'
            }}
            src="https://t3.ftcdn.net/jpg/03/20/68/66/360_F_320686681_Ur6vdYQgDC9WiijiVfxlRyQffxOgfeFz.jpg"
          />
          <h2>You-Buy</h2>
          <h4>Created using React, Sequelize, Postgres, Express</h4>
        </a>

        <a target="blank" href="https://thrill-rides.herokuapp.com/">
          <img
            style={{
              width: '500px',
              height: '400px',
              margin: '40px',
              border: '10px hotpink solid',
              borderRadius: '10px',
              boxShadow: 'black 1px 1px 9px 6px'
            }}
            src="https://www.zamperla.com/wp-content/uploads/2014/09/Fimg-Giant_discovery_31024-x-768.jpg"
          />
          <h2>Thrill Rides</h2>
          <h4>Created using React, MongoDB, Express, Mongoose</h4>
        </a>
      </div>
    </div>
  )
}

export default ProjectsPage
