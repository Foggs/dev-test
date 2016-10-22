import React, { Component } from 'react';
import './styles.css';

class Column1 extends Component {
  render() {
    return (
      <div id="col-1" className="col-sm-3 col-md-3">
        <h4>Column 1</h4>
        <ol>
          <li>
            Lorem ipsum dolor sit amet
          </li>
          <li>
            Consectetur adipiscing elit
          </li>
          <li>
            Integer molestie at massa
          </li>
          <li>
            Facilisis in nisl aliquet
          </li>
          <li>
            Nulla volutpat velit
          </li>
          <li>
            Faucibus porta lacus vel
          </li>
          <li>
            Aenean sit amet erat nunc
          </li>
          <li>
            Eget porttitor lorem
          </li>
          <li>
            Eget porttitor lorem
          </li>
          <li>
            Eget porttitor lorem
          </li>
        </ol>
        {/*<ol>
          {this.props.results.map((result) => (
            <li key={result.id}>{result.text}</li>
          ))}
        </ol>*/}
      </div>
    )
  }
}

export default Column1;
