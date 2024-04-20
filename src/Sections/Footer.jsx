
const Footer = () => {
    return (
        <footer className="footer p-10 text-base-content min-h-96 text-3xl " data-theme="dracula">
  <nav>
    <h6 className="footer-title text text-7xl text-thin mb-8 ">Services</h6> 
    <a className="link link-hover mb-5">Branding</a>
    <a className="link link-hover mb-5">Design</a>
    <a className="link link-hover mb-5">Marketing</a>
    <a className="link link-hover mb-5">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title text text-7xl text-thin mb-8 ">Company</h6> 
    <a className="link link-hover mb-5">About us</a>
    <a className="link link-hover mb-5">Contact</a>
    <a className="link link-hover mb-5">Jobs</a>
    <a className="link link-hover mb-5">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title text text-7xl text-thin mb-8 ">Legal</h6> 
    <a className="link link-hover mb-5">Terms of use</a>
    <a className="link link-hover mb-5">Privacy policy</a>
    <a className="link link-hover mb-5">Cookie policy</a>
  </nav> 
  <form>
    <h6 className="footer-title text text-7xl text-thin mb-8 ">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>

    );
}

export default Footer;
