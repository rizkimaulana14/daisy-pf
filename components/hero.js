import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"

export default function hero() {
	return (
		<div className="hero min-h-screen" data-theme="dark">
		  <div className="hero-content text-center">
		    <div className="max-w-md">
			    <div className="avatar mb-4">
					  <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
					    <img src="https://placeimg.com/192/192/people" />
					  </div>
					</div>
		      <h3 className="text-3xl font-bold">Rizki Maulana</h3>
		      <p className="py-2">
		      	Hi everyone, my name is Rizki Maulana. <br /> 
		      	I'm a Fullstack Web Developer.
		      </p>
		      <div className="flex flex-column gap-2 justify-center items-center mb-5">
		      	<a className="btn btn-sm btn-secondary">
		      		<AiFillGithub className="text-xl"></AiFillGithub>
		      	</a>
		      	<a className="btn btn-sm btn-secondary">
		      		<AiFillLinkedin className="text-xl"></AiFillLinkedin>
		      	</a>
		      	<a className="btn btn-sm btn-secondary">
		      		<AiFillInstagram className="text-xl"></AiFillInstagram>
		      	</a>O
		      </div>
		      <button className="btn btn-primary">Download CV</button>
		    </div>
		  </div>
		</div>
	)
}