import { useState } from "react";

type MembershipFormData = {
  email: string;
  firstName: string;
  lastName: string;
  city: string;
  kyMembership: "yes" | "no" | "";
  ayyMembership: "yes" | "no" | "";
  major: string;
};

const initialFormData: MembershipFormData = {
  email: "",
  firstName: "",
  lastName: "",
  city: "",
  kyMembership: "",
  ayyMembership: "",
  major: "",
};

function JoinApplicationFormSection() {
  const [formData, setFormData] = useState<MembershipFormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = <K extends keyof MembershipFormData>(
    key: K,
    value: MembershipFormData[K]
  ) => {
    setFormData((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Membership application payload:", formData);

    setIsSubmitted(true);
  };

  return (
    <section className="join-application-form-section">
      <div className="container">
        <div className="join-application-form-section__card">
          {!isSubmitted ? (
            <>
              <div className="join-application-form-section__intro">
                <h2>Application Form</h2>
                <p>
                  Please fill in all required details. This form will later be
                  connected to the backend and database.
                </p>
              </div>

              <form
                className="join-application-form"
                onSubmit={handleSubmit}
              >
                <label className="join-application-form__field">
                  <span>Email address</span>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    required
                  />
                </label>

                <div className="join-application-form__grid">
                  <label className="join-application-form__field">
                    <span>First name</span>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(event) =>
                        updateField("firstName", event.target.value)
                      }
                      required
                    />
                  </label>

                  <label className="join-application-form__field">
                    <span>Last name</span>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(event) =>
                        updateField("lastName", event.target.value)
                      }
                      required
                    />
                  </label>
                </div>

                <label className="join-application-form__field">
                  <span>City</span>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(event) =>
                      updateField("city", event.target.value)
                    }
                    required
                  />
                </label>

                <div className="join-application-form__grid">
                  <label className="join-application-form__field">
                    <span>KY membership</span>
                    <select
                      value={formData.kyMembership}
                      onChange={(event) =>
                        updateField(
                          "kyMembership",
                          event.target.value as MembershipFormData["kyMembership"]
                        )
                      }
                      required
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </label>

                  <label className="join-application-form__field">
                    <span>AYY membership</span>
                    <select
                      value={formData.ayyMembership}
                      onChange={(event) =>
                        updateField(
                          "ayyMembership",
                          event.target.value as MembershipFormData["ayyMembership"]
                        )
                      }
                      required
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </label>
                </div>

                <label className="join-application-form__field">
                  <span>Major</span>
                  <input
                    type="text"
                    value={formData.major}
                    onChange={(event) =>
                      updateField("major", event.target.value)
                    }
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="join-application-form__submit"
                >
                  Submit Application
                </button>
              </form>
            </>
          ) : (
            <div className="join-application-form-section__success">
              <h2>Application received</h2>
              <p>
                Thank you. Your membership application has been submitted.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default JoinApplicationFormSection;