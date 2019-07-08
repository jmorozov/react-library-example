/**
 * @class ExampleComponent
 */

import * as React from 'react';

import './styles.css';

export type Props = { text: string };

export class ExampleComponent extends React.Component<Props> {
  render() {
    const {
      text
    } = this.props;

    return (
      <div className="test">
        Example Component: {text}
      </div>
    );
  }
}
