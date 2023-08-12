import Title from './Title';
const ContactUs = () => {
  return (
    <div>
      <Title title="Contact" subTitle="Us" />
      <div id="contact" class="contact-area section-padding">
        <div class="centered">
          <div class="row">
            <div class="col-lg-5">
              <div class="single_address">
                <i class="fa fa-phone"></i>
                <h4>Call us on</h4>
                <p>61 0437 283 954</p>
              </div>
              <div class="single_address">
                <i class="fa fa-envelope"></i>
                <h4>Send your message</h4>
                <p>support@chameleon.org</p>
              </div>
              <div class="single_address">
                <i class="fa fa-map-marker"></i>
                <h4>Our Address</h4>
                <p>Building no : 15 , Street : 206 ,Block : 3 , second Floor</p>
                <p>Office No. : 6 , PO box: 1138 </p>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
