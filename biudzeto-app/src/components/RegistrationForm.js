import FormValidator from "./FormValidator";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.validator = new FormValidator([
      {
        field: "user_name",
        method: "isEmpty",
        validWhen: false,
        message: "Vartotojo vardas",
      },
      {
        field: "email",
        method: "isEmpty",
        validWhen: false,
        message: "El. paštas",
      },
      {
        field: "email",
        method: "isEmail",
        validWhen: true,
        message: "Įveskite galiojantį el. pašto adresą",
      },
      {
        field: "password",
        method: "isEmpty",
        validWhen: false,
        message: "Slaptažodis",
      },
    ]);
    this.state = {
      user_name: "",
      email: "",
      password: "",
      validation: this.validator.valid(),
    };
    this.submitted = false;
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const validation = this.validator.validate(this.state);
    this.setState({
      validation,
    });
    this.submitted = true;
    if (validation.isValid) {
      //reaches here if form validates successfully...
    }
  };
  render() {
    let validation = this.submitted
      ? this.validator.validate(this.state)
      : this.state.validation;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form className="registrationForm">
              <fieldset className="formBorder">
                <legend>Registruotis</legend>
                <div className={validation.email.isInvalid && "has-error"}>
                  <input
                    type="string"
                    className="form-control"
                    name="user_name"
                    placeholder="Vartotojo vardas"
                    onChange={this.handleInputChange}
                  />{" "}
                  <span className="help-block">
                    {validation.user_name.message}
                  </span>{" "}
                </div>
                <div className={validation.email.isInvalid && "has-error"}>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="El. paštas"
                    onChange={this.handleInputChange}
                  />{" "}
                  <span className="help-block">{validation.email.message}</span>{" "}
                </div>
                <div className={validation.password.isInvalid && "has-error"}>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Slaptažodis"
                    name="password"
                    onChange={this.handleInputChange}
                  />{" "}
                  <span className="help-block">
                    {validation.password.message}
                  </span>{" "}
                </div>
              </fieldset>
              <button
                onClick={this.handleFormSubmit}
                className="btn1 btn-primary"
              >
                {" "}
                Registruotis{" "}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default RegistrationForm;
