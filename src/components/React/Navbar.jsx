import "./Navbar.css"

function Navbar () {
    return (
      <div  className="navbar">
				<div className="navbar__logo">
					<img src="https://iimgvjzkjpogzlreaoya.supabase.co/storage/v1/object/sign/justmkt/logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJqdXN0bWt0L2xvZ28ucG5nIiwiaWF0IjoxNjk5OTMzNDczLCJleHAiOjIwMTUyOTM0NzN9.qpMLowDeTQGQyV7oKvkMXRY231qiua2TwnoERiDxU5w" alt="logo Medicos Sin Fronteras"/>
				</div>
				<div className="navbar__menu">
					{/* Main Menu*/}
					<a href="https://www.msf.mx/" target="_blank">SITIO WEB PRINCIPAL</a>
					<a href="#register">
					<button className="button__primary" >¡REGISTRARME AHORA!</button>
					</a>
				</div>
			</div>
    )
}

export default Navbar;