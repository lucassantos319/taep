import React from 'react';
import Cookies from 'js-cookie';
import { ReactFormGenerator, ElementStore } from 'react-form-builder2';
import { get,post } from './request';

export default class  Demobar extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      previewVisible: false,
      atividade: Cookies.get('atividade'),
      user:Cookies.get('user')
    };
    
    this.submit = this.onSubmit.bind(this);
    const update = this.onChange.bind(this);
    ElementStore.subscribe(state => update(state.data));
  }
  
  showPreview() {
    this.setState({
      previewVisible: true,
    });
  }
    
  closePreview() {
    this.setState({
      previewVisible: false,
    });
  }
  
  onChange(data) {
    this.setState({
      data,
    });
  }
  
  

  onSubmit() {
    
    const { postUrl } = this.props;
    
    console.log(JSON.parse(this.state.atividade))
    console.log(this.state);
    const atividade = JSON.parse(this.state.atividade)
  
    console.log(atividade.titulo)
    const data ={
      title:atividade.titulo,
      description:atividade.description,
      userIdCreator:this.props.userIdCreator,
      dataForm:this.state.data
    }
    console.log("data: ",data)
    post(postUrl,data).then();

    return false;
    
  }
  
  render() {
    let modalClass = 'modal';
    if (this.state.previewVisible) {
      modalClass += ' show d-block';
    }
    
    return (
      <div className="clearfix" style={{ margin: '10px',marginBottom:"20px", width: '70%' }}>
        <h4 className="float-left">Criar Atividade</h4>

        <button className="btn btn-primary float-right" onClick={this.showPreview.bind(this)}>
          <span style={{fontWeight:"bold"}}> Preview do formulario</span>
        </button>
       
        { this.state.previewVisible &&
          <div className={modalClass}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">               
                <div className="modal-body">
                  <ReactFormGenerator
                    download_path=""
                    back_action="/"
                    back_name="Back"
                    answer_data={{}}
                    action_name="Save"
                    form_action="/"
                    form_method="POST"
                    onSubmit={this.submit()}
                    variables={this.props.variables}
                    data={this.state.data} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closePreview.bind(this)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        }

        
      </div>
    );
  }
}
