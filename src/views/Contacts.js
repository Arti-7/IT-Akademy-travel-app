import React from "react";

class Contacts extends React.Component {
  state = {
    submit: false,
  };

  handleSubmit = () => {
    this.state.submit
      ? this.setState({ submit: false })
      : this.setState({ submit: true });
  };

  render() {
    return (
      <div className="form-group loginForm mx-auto">
        <h1 className="text-center">Contact Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="form-group col">
              <label className="ml-1">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col">
              <label className="ml-1">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col">
              <label className="ml-1">Message</label>
              <textarea
                type="text"
                name="message"
                className="form-control"
                rows="3"
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <input
              type="button"
              value="Send Message"
              className="btn btn-info mt-3 vw-100 py-2"
              onClick={this.handleSubmit}
            />
          </div>
          {this.state.submit && (
            <div
              class="alert alert-success alert-dismissible"
              role="alert"
              id="alert"
            >
              Thank you for your message
              <button
                type="submit"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Contacts;
