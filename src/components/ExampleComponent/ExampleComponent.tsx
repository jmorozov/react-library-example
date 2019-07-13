/**
 * @class ExampleComponent
 */

import * as React from 'react';

import './ExampleComponent.css';

export interface Props {
   /**
    * Simple text prop
    **/
   text: string;
}

/** My First component */
export class ExampleComponent extends React.Component<Props> {
   render() {
      const { text } = this.props;

      return (
         <div className="test">
            Example Component: {text}
            <p>Coool!</p>
         </div>
      );
   }
}

export default ExampleComponent;
