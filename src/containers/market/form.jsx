import React from 'react';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { createMarket } from 'ducks/markets';

class NewMarketForm extends React.Component {
  handleSubmit = () => {

  }
  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        render={({ handleSubmit, submitting, pristine, invalid }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
              {({input, meta}) => (
                <div>
                  <label htmlFor="name">name: </label>
                  <input {...input} type="text" placeholder=""/>
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field name="description">
              {({input, meta}) => (
                <div>
                  <label htmlFor="description">description: </label>
                  <textarea {...input} placeholder=""/>
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <button
              disabled={submitting || pristine}
              type="submit"
              >
              add new market
            </button>
          </form>
        )}
      />
    )
  }
}

const mapDispatchToProps = {
  createMarket,
};

export default connect(null, mapDispatchToProps)(NewMarketForm);
