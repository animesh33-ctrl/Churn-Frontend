import { useContext, useState } from "react";
import { ResultContext } from "../store/Result"; // ✅ Correct import

const FormOp = () => {
  const { handleSubmit, result } = useContext(ResultContext); // ✅ Correct usage

  const [formData, setFormData] = useState({
    creditScore: "",
    geography: "",
    gender: "",
    age: "",
    tenure: "",
    balance: "",
    numOfProducts: "",
    hasCrCard: "",
    isActiveMember: "",
    estimatedSalary: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      className="row g-3"
      onSubmit={(event) => handleSubmit(event, formData)}
    >
      <div className="col-md-6">
        <label className="form-label">Credit Score</label>
        <input
          type="number"
          className="form-control"
          name="creditScore"
          value={formData.creditScore}
          onChange={onChange}
          placeholder="Enter Credit Score"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Geography</label>
        <input
          type="text"
          className="form-control"
          name="geography"
          value={formData.geography}
          onChange={onChange}
          placeholder="Enter Geography"
        />
      </div>

      <div className="col-12">
        <label className="form-label">Gender</label>
        <select
          className="form-select"
          name="gender"
          value={formData.gender}
          onChange={onChange}
        >
          <option value="">Choose...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div className="col-12">
        <label className="form-label">Age</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={formData.age}
          onChange={onChange}
          placeholder="Enter Age"
        />
      </div>
      <div className="col-12">
        <label className="form-label">Tenure</label>
        <input
          type="number"
          className="form-control"
          name="tenure"
          value={formData.tenure}
          onChange={onChange}
          placeholder="Enter Tenure"
        />
      </div>

      <div className="col-md-6">
        <label className="form-label">Balance</label>
        <input
          type="number"
          className="form-control"
          name="balance"
          value={formData.balance}
          onChange={onChange}
          placeholder="Enter Balance"
        />
      </div>

      <div className="col-md-4">
        <label className="form-label">NumOfProducts</label>
        <input
          type="number"
          className="form-control"
          name="numOfProducts"
          value={formData.numOfProducts}
          onChange={onChange}
          placeholder="Enter number of Products"
        />
      </div>

      <div className="col-md-2">
        <label className="form-label">HasCrCard</label>
        <input
          type="number"
          className="form-control"
          name="hasCrCard"
          min="0"
          max="1"
          step="1"
          value={formData.hasCrCard}
          onChange={onChange}
          placeholder="Enter b/w 0 or 1"
        />
      </div>

      <div className="col-md-2">
        <label className="form-label">IsActiveMember</label>
        <input
          type="number"
          className="form-control"
          name="isActiveMember"
          min="0"
          max="1"
          step="1"
          value={formData.isActiveMember}
          onChange={onChange}
          placeholder="Enter b/w 0 or 1"
        />
      </div>

      <div className="col-md-2">
        <label className="form-label">EstimatedSalary</label>
        <input
          type="number"
          className="form-control"
          name="estimatedSalary"
          value={formData.estimatedSalary}
          onChange={onChange}
          placeholder="Enter your salary"
        />
      </div>

      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Calculate
        </button>
      </div>

      {/* ✅ Show result if present */}
      {result !== null && (
        <div className="col-12">
          <label className="form-label">Result</label>

          <h1>{`Result is ${result === 1 ? "Exited" : "Not Exited"}`}</h1>
        </div>
      )}
    </form>
  );
};

export default FormOp;
