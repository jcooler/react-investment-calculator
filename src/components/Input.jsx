export default function Input({onChange, input}) {


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(event) => onChange('initialInvestment', event.target.value)}
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={(event) => onChange('annualInvestment', event.target.value)}
          ></input>
        </p>
        </div>
        <div className="input-group">
        <p>
          <label>expected Return</label>
          <input
            type="number"
            required
            value={input.expectedReturn}
            onChange={(event) => onChange('expectedReturn', event.target.value)}
          ></input>
        </p>
        <p>
          <label>Duration (Years)</label>
          <input
            type="number"
            required
            value={input.duration}
            onChange={(event) => onChange('duration', event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
