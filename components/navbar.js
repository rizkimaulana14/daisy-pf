export default function navbar() {
	return (
		<div data-theme="night">
			<div className="navbar bg-base-100 fixed z-[9999]">
			  <div className="navbar-start">
			    <div className="dropdown">
			      <label tabindex="0" className="btn btn-ghost btn-circle">
			        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			        	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
			        </svg>
			      </label>
			      <ul tabindex="" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
			        <li><a>Home</a></li>
			        <li><a>About</a></li>
			        <li><a>Portfolio</a></li>
			      </ul>
			    </div>
			  </div>
			  <div className="navbar-center">
			    <a className="btn btn-ghost normal-case text-xl">RZKMLNA</a>
			  </div>
			  <div className="navbar-end">
			    <label for="search" className="btn btn-ghost btn-circle modal-button">
			      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
			      	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			      </svg>
			    </label>
			  </div>
			</div>
			<div>
		  	<input type="checkbox" id="search" className="modal-toggle" />
			<label for="search" className="modal cursor-pointer">
			  <label className="modal-box relative" for="">
			    <h3 className="text-lg font-bold text-center">Search Here</h3>
			    <form className="mt-4">
				    <div className="form-control">
					  <div className="input-group">
					    <input type="text" placeholder="Type anything…" className="input input-bordered w-full" />
					    <button className="btn btn-square">
					      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					      	<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					      </svg>
					    </button>
					  </div>
					</div>
			    </form>
			  </label>
			</label>
		  </div>
		</div>
	)
}