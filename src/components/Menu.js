import React from 'react';

const MenuItem = (props) => {
  return <div className="col-xs-3 col-md-2 col-lg-1 btn btn-default" onClick={props.action?()=>props.click(props.action):null}>
    <span className={"fa " + props.icon} style={{
      fontSize: "x-large"
    }}></span>
    <p style={{
      fontSize: "small"
    }}>
      {props.text}
    </p>
  </div>
}




const Menu=function(props){
return <div>

        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active">
            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">مدیریت VMS</a>
          </li>
          <li role="presentation">
            <a href="#imageEdit" aria-controls="imageEdit" role="tab" data-toggle="tab">ویرایش عکس</a>
          </li>
          <li role="presentation">
            <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">مدیریت اطلاعات پایه</a>
          </li>

        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active row" id="home">
            <MenuItem text="refresh" icon="fa-refresh"/>
            
            <MenuItem text="refresh" action="refresh" icon="fa-refresh"/>
            <MenuItem text="check" icon="fa-plug"/>
            <MenuItem text="Import" icon="fa-cloud-download"/>
            <MenuItem text="Add" icon="fa-image"/>
            <MenuItem text="Delete" icon=" fa-trash"/>
            <MenuItem text="Move Left" icon=" fa-mail-reply"/>
            <MenuItem text="Move Right" icon="fa-mail-forward"/>
            <MenuItem text="Send Picture" icon="fa-send"/>
          </div>
          <div role="tabpanel" className="tab-pane row" id="profile">
            <MenuItem text="PlayList" icon="fa-book"/>
            <MenuItem text="Devices" icon="fa-book"/>
            <MenuItem text="Rules" icon="fa-book"/>
          </div>
          <div role="tabpanel" className="tab-pane row" id="imageEdit">

            <div className=" col-xs-2 col-md-2 col-lg-1">
              <div className="input-group">
                <span className="input-group-addon fa fa-paint-brush"></span>
                <input type="color" className="form-control"/>
              </div>
              <div className="input-group">
                <span className="input-group-addon fa  fa-adn"></span>
                <input type="color" className="form-control" defaultValue="#ffffff"/>
              </div>
            </div>
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-default fa fa-text-width" onClick={()=>props.onItemClick("AddText")}></button>
              <button type="button" className="btn btn-default fa fa-circle-o"></button>
              <button type="button" className="btn btn-default fa fa-square-o"></button>
              <button type="button" className="btn btn-default fa fa-pencil"></button>
              <button type="button" className="btn btn-default fa fa-mail-forward"></button>
              <button type="button" className="btn btn-default fa fa-pencil"></button>

              <div className="btn-group" role="group">
                <button
                  type="button"
                  className="btn btn-default dropdown-toggle fa fa-image"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  &nbsp; عکس
                </button>
                <div className="dropdown-menu">
                  <div>
                    <input type="text" placeholder="جست و جو"/>
                  </div>
                  <ul >
                    <li>
                      <a href="#">Dropdown link</a>
                    </li>
                    <li>
                      <a href="#">Dropdown link</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>

    </div>;

}

export default Menu;