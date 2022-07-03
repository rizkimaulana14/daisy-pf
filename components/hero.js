import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"

export default function hero() {
	return (
		<div class="hero min-h-screen" data-theme="dark">
		  <div class="hero-content text-center">
		    <div class="max-w-md">
			    <div class="avatar mb-4">
					  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
					    <img src="https://placeimg.com/192/192/people" />
					  </div>
					</div>
		      <h3 class="text-3xl font-bold">Rizki Maulana</h3>
		      <p class="py-2">
		      	Hi everyone, my name is Rizki Maulana. <br /> 
		      	I'm a Fullstack Web Developer.
		      </p>
		      <div class="flex flex-column gap-2 justify-center items-center mb-5">
		      	<a class="btn btn-sm btn-secondary">
		      		<AiFillGithub class="text-xl"></AiFillGithub>
		      	</a>
		      	<a class="btn btn-sm btn-secondary">
		      		<AiFillLinkedin class="text-xl"></AiFillLinkedin>
		      	</a>
		      	<a class="btn btn-sm btn-secondary">
		      		<AiFillInstagram class="text-xl"></AiFillInstagram>
		      	</a>
		      </div>
		      <button class="btn btn-primary">Download CV</button>
		    </div>
		  </div>
		</div>
	)
}