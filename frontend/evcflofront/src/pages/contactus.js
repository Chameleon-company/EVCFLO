import Map from "../components/Map";
import InfoMaps from "../components/InformationMaps";
import About from "../components/About";
import Hero from "../components/Hero";
import AImodelTable from "../components/AImodelTable";
import Title from "../components/Title";
const ContactUs = () => {
	return (
		<div className="faq">
			<Title title="Contact Us" />
			<div id="contact" class="contact-area section-padding">
				<div class="centered">
					<div class="row">
						<div class="col-lg-5">
							<div class="single_address">
								<i class="fa fa-phone"></i>
								<h4>Call us on</h4>
								<p>+123-6789-100</p>
							</div>
							<div class="single_address">
								<i class="fa fa-envelope"></i>
								<h4>Send your message</h4>
								<p>irifcham@chameleonint.org</p>
							</div>
							<div class="single_address">
								<i class="fa fa-map-marker"></i>
								<h4>Our Address</h4>
								<p>
									Building no : 15 , Street : 206 ,Block : 3 ,
									second Floor
								</p>
								<p>Office No. : 6 , PO box: 1138 </p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;

// const ContactUs = () => {
// 	return (
// 		<>
// 			<div>dfdfdf</div>
// 		</>
// 	);
// };

// export default ContactUs;
