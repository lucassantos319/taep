import React from 'react';
import { ReactFormGenerator, ElementStore } from 'react-form-builder2';

export default class FormShower extends React.Component {
  
  constructor(props) {
    super(props);

    if ( props.messageData.length > 0  ){
      
      this.state = {
        data: props.messageData,
      };
    }
    
    ElementStore.subscribe(state => update(state.data));
  }
   
 
  render() {
    return (
      <div className="clearfix" style={{ margin: '10px',marginBottom:"20px", width: '70%' }}>
        <ReactFormGenerator
          download_path=""
          answer_data={{}}
          action_name="Save"
          form_method="POST"
          variables={this.props.variables}
          data={this.state.data} />
      </div>
      
    );
  }
}
