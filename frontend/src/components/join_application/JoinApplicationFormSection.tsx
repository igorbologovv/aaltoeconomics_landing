import { useMemo, useState } from "react";
import type {
  MembershipApplicationPayload,
  School,
} from "../../types/membership";

const API_URL = import.meta.env.VITE_API_URL;

const schoolOptions: School[] = ["BIZ", "CHEM", "ELEC", "ENG", "SCI", "ARTS"];

const majorOptions = [
  "Economics",
  "Management",
  "Accounting",
  "Marketing",
  "Finance",
  "Information and Service Management",
  "Business Law",
  "Other",
] as const;

const initialFormData: MembershipApplicationPayload = {
  email: "",
  firstName: "",
  lastName: "",
  city: "",
  kyMembership: null,
  ayyMembership: null,
  school: "",
  major: "",
  consentAccepted: false,
};

function JoinApplicationFormSection() {
  const [formData, setFormData] =
    useState<MembershipApplicationPayload>(initialFormData);
  const [majorOther, setMajorOther] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const finalMajor = useMemo(() => {
    return formData.major === "Other" ? majorOther.trim() : formData.major.trim();
  }, [formData.major, majorOther]);

  const updateField = <K extends keyof MembershipApplicationPayload>(
    key: K,
    value: MembershipApplicationPayload[K]
  ) => {
    setFormData((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const validateForm = () => {
    if (!formData.email.trim()) return "Email address is required.";
    if (!formData.firstName.trim()) return "First name is required.";
    if (!formData.lastName.trim()) return "Last name is required.";
    if (!formData.city.trim()) return "Municipality of residence is required.";
    if (formData.kyMembership === null) {
      return "Please select your KY membership status.";
    }
    if (formData.ayyMembership === null) {
      return "Please select your AYY membership status.";
    }
    if (!formData.school) return "Please select your school.";
    if (!formData.major) return "Please select your major.";
    if (!finalMajor) return "Please specify your major.";
    if (!formData.consentAccepted) {
      return "You must accept the membership conditions.";
    }
    return "";
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Move membership requests into a shared frontend API module
      // when admin membership pages / status updates are added.
      const response = await fetch(`${API_URL}/api/membership-applications`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email.trim(),
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          city: formData.city.trim(),
          kyMembership: formData.kyMembership,
          ayyMembership: formData.ayyMembership,
          school: formData.school,
          major: finalMajor,
          consentAccepted: formData.consentAccepted,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || "Failed to submit membership application."
        );
      }

      setIsSubmitted(true);
      setFormData(initialFormData);
      setMajorOther("");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Failed to submit membership application."
      );
    } finally {
      setIsSubmitting(false);
    }
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
                  Please fill in all required details to apply for membership in
                  Aalto Economics.
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
                  <span>Municipality of residence</span>
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
                    <span>KY member?</span>
                    <select
                      value={
                        formData.kyMembership === null
                          ? ""
                          : formData.kyMembership
                          ? "yes"
                          : "no"
                      }
                      onChange={(event) =>
                        updateField(
                          "kyMembership",
                          event.target.value === ""
                            ? null
                            : event.target.value === "yes"
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
                    <span>AYY member?</span>
                    <select
                      value={
                        formData.ayyMembership === null
                          ? ""
                          : formData.ayyMembership
                          ? "yes"
                          : "no"
                      }
                      onChange={(event) =>
                        updateField(
                          "ayyMembership",
                          event.target.value === ""
                            ? null
                            : event.target.value === "yes"
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
                  <span>School</span>
                  <select
                    value={formData.school}
                    onChange={(event) =>
                      updateField("school", event.target.value as School | "")
                    }
                    required
                  >
                    <option value="">Select school</option>
                    {schoolOptions.map((school) => (
                      <option key={school} value={school}>
                        {school}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="join-application-form__field">
                  <span>Major</span>
                  <select
                    value={formData.major}
                    onChange={(event) =>
                      updateField("major", event.target.value)
                    }
                    required
                  >
                    <option value="">Select major</option>
                    {majorOptions.map((major) => (
                      <option key={major} value={major}>
                        {major}
                      </option>
                    ))}
                  </select>
                </label>

                {formData.major === "Other" && (
                  <label className="join-application-form__field">
                    <span>Please specify your major</span>
                    <input
                      type="text"
                      value={majorOther}
                      onChange={(event) => setMajorOther(event.target.value)}
                      required
                    />
                  </label>
                )}

                <label className="join-application-form__checkbox">
                  <input
                    type="checkbox"
                    checked={formData.consentAccepted}
                    onChange={(event) =>
                      updateField("consentAccepted", event.target.checked)
                    }
                    required
                  />
                  <span>
                    I consent to Aalto Economics collecting and processing my
                    personal data for membership administration and communication
                    related to the organization. I also consent to receiving
                    email communications from Aalto Economics regarding events
                    and updates.
                  </span>
                </label>

                {errorMessage && (
                  <p className="join-application-form__error">{errorMessage}</p>
                )}

                <button
                  type="submit"
                  className="join-application-form__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
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