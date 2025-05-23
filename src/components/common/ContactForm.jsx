import { useState } from 'react';
import emailjs from 'emailjs-com';
import { countries } from 'countries-list';


const ContactForm = () => {
  const [status, setStatus] = useState('');
  const countryList = Object.values(countries).map((country) => country.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const serviceId = 'service_ueb68jr'; // Replace with your EmailJS Service ID
    const templateId = 'template_zyfav7k'; // Replace with your EmailJS Template ID
    const publicKey = 'SFWOC94wR8HnPmGyz'; // Replace with your Public Key

    emailjs
      .sendForm(serviceId, templateId, e.target, publicKey)
      .then(() => {
        setStatus('Message sent successfully!');
        e.target.reset(); // Reset the form fields
      })
      .catch(() => {
        setStatus('Failed to send the message. Please try again.');
      });
  };

  return (
    <form className="contact-form needs-validation" onSubmit={handleSubmit}>
      <div className="messages">
        {status && (
          <p className={`alert ${status.includes('success') ? 'alert-success' : 'alert-danger'}`}>
            {status}
          </p>
        )}
      </div>
      <div className="row gx-4">
        {/* Full Name Field */}
        <div className="col-md-12">
          <div className="form-floating mb-4 position-relative">
            <input
              required
              type="text"
              name="name"
              id="form_name"
              placeholder="Jane Doe"
              className="form-control"
            />
            <label htmlFor="form_name">
              <i className="uil uil-user" style={{ marginRight: '10px' }}></i> Full Name *
            </label>
          </div>
        </div>

        {/* Email Field */}
        <div className="col-md-12">
          <div className="form-floating mb-4 position-relative">
            <input
              required
              type="email"
              name="email"
              id="form_email"
              className="form-control"
              placeholder="jane.doe@example.com"
            />
            <label htmlFor="form_email">
              <i className="uil uil-envelope" style={{ marginRight: '10px' }}></i> Email *
            </label>
          </div>
        </div>

        {/* Phone Number Field */}
        <div className="col-md-12">
          <div className="form-floating mb-4 position-relative">
            <input
              required
              type="tel"
              name="phone"
              id="form_phone"
              className="form-control"
              placeholder="123-456-7890"
            />
            <label htmlFor="form_phone">
              <i className="uil uil-phone" style={{ marginRight: '10px' }}></i> Phone Number *
            </label>
          </div>
        </div>

        {/* Company Name Field */}
        <div className="col-md-12">
          <div className="form-floating mb-4 position-relative">
            <input
              required
              type="text"
              name="company"
              id="form_company"
              className="form-control"
              placeholder="Your Company Name"
            />
            <label htmlFor="form_company">
              <i className="uil uil-building" style={{ marginRight: '10px' }}></i> Company Name *
            </label>
          </div>
        </div>

        {/* Country Field */}
        <div className="col-md-12">
          <div className="form-floating mb-4 position-relative">
            <select
              required
              className="form-select"
              id="form_country"
              name="country"
              defaultValue=""
            >
              <option disabled value="">
                Select your country
              </option>
              {countryList.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <label htmlFor="form_country">
              <i className="uil uil-globe" style={{ marginRight: '10px' }}></i> Country *
            </label>
          </div>
        </div>

        {/* Enquiry Field */}
        <div className="col-12">
          <div className="form-floating mb-4">
            <textarea
              required
              name="message"
              id="form_message"
              className="form-control"
              placeholder="Your enquiry"
              style={{ height: 150 }}
            />
            <label htmlFor="form_message">Enquiry *</label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-12 text-center">
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary rounded-pill btn-send mb-3"
          />
          <p className="text-muted">
            <strong>*</strong> These fields are required.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
