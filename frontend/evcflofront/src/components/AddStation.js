import { useForm } from "react-hook-form";

const SuggestedStation = () => {
  const {
    register,
    handleSubmit,
    submissionId,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      longitude: "",
      latitude: "",
      total_plugs: "",
      suitability_score: "",
    },
  });
  const onSubmit = (data) => {
    alert("Suggested Charging station passed to server");
    fetch("https://server-e657pcuziq-ts.a.run.app/api/add_suggested", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  };

  if (submissionId) {
    return <p>Thank you! Submission Id: {submissionId}</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Suggest a Station</h2>

      <div>
        <label>
          <span>Longitude: </span>
          <input
            {...register("longitude", {
              required: "Please fill in this field.",
            })}
            aria-invalid={errors["longitude"] ? "true" : "false"}
            type="number"
            id="longitude"
            name="longitude"
          />
        </label>
        {errors["longitude"] && (
          <p role="alert">{errors["longitude"]?.message}</p>
        )}
      </div>

      <div>
        <label>
          <span>Latitude: </span>
          <input
            {...register("latitude", {
              required: "Please fill in this field.",
            })}
            aria-invalid={errors["latitude"] ? "true" : "false"}
            type="number"
            id="latitude"
            name="latitude"
          />
        </label>
        {errors["latitude"] && (
          <p role="alert">{errors["latitude"]?.message}</p>
        )}
      </div>

      <div>
        <label>
          <span>Total Plugs: </span>
          <input
            {...register("total_plugs", {
              required: "Please fill in this field.",
            })}
            aria-invalid={errors["total_plugs"] ? "true" : "false"}
            type="number"
            id="total_plugs"
            name="total_plugs"
          />
        </label>
        {errors["total_plugs"] && (
          <p role="alert">{errors["total_plugs"]?.message}</p>
        )}
      </div>

      <div>
        <label>
          <span>Suitability Score: </span>
          <input
            {...register("suitability_score", {
              required: "Please fill in this field.",
              min: {
                value: 0.0,
                message: "Value must be greater.",
              },
              max: {
                value: 1.0,
                message: "Value must be smaller.",
              },
            })}
            aria-invalid={errors["suitability_score"] ? "true" : "false"}
            step="0.1"
            type="number"
            placeholder="Between 0.1 and 1.0"
            id="suitability_score"
            name="suitability_score"
          />
        </label>
        {errors["suitability_score"] && (
          <p role="alert">{errors["suitability_score"]?.message}</p>
        )}
      </div>

      <button disabled={isSubmitting}>Submit</button>
    </form>
  );
};

export default SuggestedStation;
