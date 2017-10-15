import React from 'react';
import $ from 'jquery';

const MenuItem = (props) => {
  return <div
    className="col-xs-3 col-md-2 col-lg-1 btn btn-default"
    onClick={props.Click}
    style={{
    whiteSpace: "nowrap"
  }}>
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

const Dialog = (props) => {
  return <div
    className="modal fade"
    id="testModal"
    role="dialog"
    aria-labelledby="myModalLabel">
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">مدیریت
          </h4>
        </div>
        <div className="modal-body" style={{
          padding: 0
        }}>
          <img id="modalLoading" alt="loading" src="/loading.gif"/>
          <iframe title="modal dialog"
            name="modalDialog"
            id="modalDialog"
            width="700px"
            height="700px"
            className="modal-lg"
            onLoad={() => {
            $("#modalLoading").hide();
            $("#modalDialog").show();
          }}></iframe>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">بازگشت</button>
          {(props.save)
            ? <button type="button" className="btn btn-primary">Save changes</button>
            : ""}
        </div>
      </div>
    </div>
  </div>

}
const showDialog = window.showDialog = (url, title, params) => {
  $("#modalLoading").show();
  $("#modalDialog").hide();

  $("#testModal")
    .modal()
    .find("iframe")
    .attr("src", window.baseURL + url)
}

const fontNames='BBadr,BBaran,BBardiya,BCompset,BDavat,BElham,BEsfehanBold,BFantezy,BFarnaz,BFerdosi,BHamid,BHelal,BHoma,BJadidBold,BJalal,BKoodakBold,BKourosh,BLotus,BMahsa,BMehrBold,BMitra,BMorvarid,BNarm,BNasimBold,BNazanin,BRoya,BSetarehBold,BShiraz,BSinaBold,BTabassom,BTehran,BTitrBold,BTitrTGEBold,BTraffic,BVahidBold,BYagut,BYas,BYekan,BZar,BZiba';
const Menu = function (props) {
  return <div >
    {fontNames.split(',').map(x=><span key={x} style={{fontFamily:x}}></span>)}
    <Dialog/>
    <ul className="nav nav-tabs" role="tablist">
      <li role="presentation" className="active">
        <a href="#home" aria-controls="home" role="tab" data-toggle="tab">مدیریت VMS</a>
      </li>
      <li role="presentation">
        <a href="#imageEdit" aria-controls="imageEdit" role="tab" data-toggle="tab">ویرایش عکس</a>
      </li>

    </ul>
    <div className="tab-content">
      <div role="tabpanel" className="tab-pane active row" id="home">
        <MenuItem
          text="ویراشVMS"
          icon="fa-desktop"
          Click={() => showDialog("VMSs", "مدیریت تابلوها")}/>
        <MenuItem
          text="ویراش گروه ها"
          icon="fa-tags"
          Click={() => showDialog("VMSGroups", "مدیریت تابلوها")}/>
        <MenuItem
          text="مدیریت لیست نمایش"
          icon="fa-tags"
          Click={() => showDialog("PlayListTemplates/Index?vms=" + (window.store.getState().VMSGroups.ActiveVMS||'0'), "مدیریت لیست نمایش")}/>

        <MenuItem
          text="به روز رسانی مجدد"
          icon="fa-refresh"
          Click={() => props.refresh()}/> {/*<MenuItem text="check" icon="fa-plug"/>
        <MenuItem text="Import" icon="fa-cloud-download"/>
        <MenuItem text="Add" icon="fa-image"/>
        <MenuItem text="Delete" icon=" fa-trash"/>
        <MenuItem text="Move Left" icon=" fa-mail-reply"/>
        <MenuItem text="Move Right" icon="fa-mail-forward"/>*/}

        <MenuItem
          text="ذخیره لیست نمایش"
          icon="fa-save"
          Click={() => props.SavePlayList()}/>
        <MenuItem
          text="ارسال لیست نمایش "
          icon="fa-send"
          Click={() => {
          props.SendPlaylistToServer()
        }}/>
        <MenuItem
          text="ارسال تنظیمات"
          icon="fa-rocket"
          Click={() => props.SaveProperties()}/>

          <MenuItem
          text="ریست دستگاه"
          icon="fa-rocket"
          Click={() => props.ResetDevice()}/>
      </div>

      <div role="tabpanel" className="tab-pane row" id="imageEdit">

        <div className=" col-xs-2 col-md-2 col-lg-1">
          <div className="input-group">
            <span className="input-group-addon fa  fa-paint-brush"></span>
            <input
              type="color"
              className="form-control"
              defaultValue="#ffffff"
              onChange={(e) => props.onItemClick("backColor", {
              type: "setting",
              color: e.target.value
            })}/>
          </div>
        </div>
        <div className="btn-group" role="group" aria-label="...">
          <select 
            className="fontChanger btn btn-default"
            onChange={(e) => props.onItemClick("font", {
            type: "setting",
            font: e.target.value
          })}>
          
          {
            fontNames
            .split(',')
            .map(x=><option key={x} style={{ fontFamily: x}} value={x}> فونت{x} </option>)
          }
          </select>

          <select className="fontWeight btn btn-default" onChange={(e) => props.onItemClick("fontWeight", {
            type: "setting",
            fontWeight: e.target.value
          })}> 
              <option value="normal">Normal </option>
              <option value="bold">Bold </option>
          </select>

          <button
          type="button"
          className="btn btn-default fa fa-text-width"
          onClick={() => props.onItemClick("text", {type: "insert"})}></button>


            <button
            type="button"
            className="btn btn-default fa fa-align-center"
            onClick={() => props.onItemClick("align", { type: "setting", mode: "center"})}></button>
        
            <button
            type="button"
            className="btn btn-default fa fa-align-left"
            onClick={() => props.onItemClick("align", { type: "setting", mode: "left"})}></button>
           <button
            type="button"
            className="btn btn-default fa fa-align-right"
            onClick={() => props.onItemClick("align", { type: "setting", mode: "right"})}></button>

            <button
            type="button"
            className="btn btn-default fa fa-eraser"
            onClick={() => props.onItemClick("clear", { type: "setting"})}></button>
            

          <button
            type="button"
            className="btn btn-default fa fa-circle-o"
            onClick={() => props.onItemClick("circle", {type: "insert"})}></button>
          <button
            type="button"
            className="btn btn-default fa fa-square-o"
            onClick={() => props.onItemClick("rect", {type: "insert"})}></button>
          <button
            type="button"
            className="btn btn-default fa  fa-caret-up"
            onClick={() => props.onItemClick("triangle", {type: "insert"})}></button>
          <button
            type="button"
            className="btn btn-default fa fa-pencil"
            onClick={() => props.onItemClick("draw", {type: "mode"})}></button>
          <button
            type="button"
            className="btn btn-default fa fa-hand-paper-o"
            onClick={() => props.onItemClick("select", {type: "mode"})}></button>
          <button
            type="button"
            className="btn btn-default fa fa-trash"
            onClick={() => props.onItemClick("delete", {type: "delete"})}></button>
          <button
            type="button"
            className="btn btn-default fa fa-level-down"
            onClick={() => props.onItemClick("moveBack", {type: "update"})}></button>

          <button
            type="button"
            className="btn btn-default fa fa-arrows-alt"
            onClick={() => props.onItemClick("dock", {type: "update"})}></button>

          <div className="ImageLoad" style={{
            display: "inline"
          }}>
            <input
              type="file"
              id="imageImportFileUpload"
              onChange={(e) => {
              var file = e.target.files[0];
              var reader = new FileReader();
              reader.onload = function (f) {
                var data = f.target.result;
                props.onItemClick("image", {
                  data: data,
                  type: "insert"
                });
              };
              reader.readAsDataURL(file);
            }}
              style={{
              display: "none"
            }}/>

            <button
              type="button"
              className="btn btn-default fa fa-image"
              onClick={() => $("#imageImportFileUpload").click()}></button>
          </div>

        </div>
        <div
          id="MaskSymbols"
          style={{
          width: "98%",
          overflowX: "auto",
          whiteSpace: "nowrap",
          padding: "5px"
        }}></div>

      </div>
    </div>
  </div>;

}

export default Menu;
