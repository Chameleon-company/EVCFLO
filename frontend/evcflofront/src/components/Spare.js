import React from 'react';
import SubTitle from './SubTitle';

const SpareParts = () => {
  return (
    <>
      <section className="section" id="Spare">

        <SubTitle title="Spare" subTitle="parts" />
        <form action="" method="POST">
          <label htmlFor="company" className="form-label">
            Company name:
          </label>
          <input
            type="text"
            step="0.0001"
            id="company"
            name="company"
            className="form-input"
          />
          <br />
          <label htmlFor="Address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            step="0.0001"
            id="Address"
            name="Address"
            className="form-input"
          />
          <br />
          <label htmlFor="city" className="form-label">
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            className="form-input"
          />
          <br />
          <label htmlFor="phone" className="form-label">
            Phone:
          </label>

          <input
            type="number"
            step="0.001"
            id="phone"
            name="phone"
            className="form-input"
          />
          <br />
          <label htmlFor="email" className="form-label">
            Email:
          </label>

          <input
            type="text"
            step="0.001"
            id="email"
            name="email"
            className="form-input"
          />
          <br />
          <label htmlFor="Purchase" className="form-label">
            Purchase Order:
          </label>

          <input
            type="number"
            step="0.001"
            id="Purchase"
            name="Purchase"
            className="form-input"
          />

          <br />
          <label htmlFor="Spare" className="form-label">
            Spare part 1 :
          </label>

          <input
            type="number"
            step="0.001"
            id="Spare0"
            name="Spare0"
            className="form-input-0"
          />

          <label htmlFor="Qty" className="form-label">
            Qty :
          </label>

          <input
            type="number"
            step="0.001"
            id="Spare0"
            name="Spare0"
            className="form-input-1"
          />

          <br />
          <label htmlFor="Spare1" className="form-label">
            Spare part 2 :
          </label>

          <input
            type="number"
            step="0.001"
            id="Spare1"
            name="Spare1"
            className="form-input-0"
          />

          <label htmlFor="Qty" className="form-label">
            Qty :
          </label>

          <input
            type="number"
            step="0.001"
            id="Spare0"
            name="Spare0"
            className="form-input-1"
          />

          <br />
          <label htmlFor="Total" className="form-label">
            Total amount:
          </label>

          <input
            type="number"
            step="0.001"
            id="Total"
            name="Total"
            className="form-input"
          />

          <br /><br />
          <br />
          <center>
            <input type="submit" value="Submit" className="form-submit" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="submit" value="Home" className="form-submit" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="submit" value="View" className="form-submit" />
          </center>
          <br />
        </form>

      </section>
      <div id='sp'></div>
    </>
  );
};

export default SpareParts;
