import React from "react";
import $ from "jquery";
import { permissions } from "../api/Base";

export const MenuItem = props => {
  if (permissions(props.ID))
    return (
      <div
        data-shortkey={props.shortKey || ""}
        title={props.title || ""}
        id={props.ID}
        className={
          "btn btn-default " + (props.className || "col-xs-2 col-md-2 col-lg-2")
        }
        onClick={props.Click}
        style={{
          whiteSpace: "nowrap"
        }}
      >
        <span
          title={props.text}
          className={"fa " + props.icon}
          style={{
            padding: "0px 5px",
            fontSize: "x-large"
          }}
        />
        <span
          style={{
            fontSize: "small"
          }}
        >
          {props.text}
        </span>
      </div>
    );
  else return "";
};

export const showDialog = (window.showDialog = (url, title, params) => {
  $("#modalLoading").show();
  $("#modalDialog").hide();
  let src =
    window.baseURL +
    url +
    "?vms=" +
    (window.store.getState().VMSGroups.ActiveVMS || "0");
  for (let p in params) {
    src = src + "&" + p + "=" + params[p];
  }
  // src="http://localhost:3000/";
  $("#testModal")
    .modal()
    .find("iframe")
    .attr("src", src);
});
const changeZoom = e => {
  window.zoom = e.target.value * 1;
  Array.prototype.forEach.call(document.querySelectorAll("canvas[id]"), p => {
    let f = p.fabric;
    let val = e.target.value * (1 / f.getZoom());
    f.setWidth(f.getWidth() * val);
    f.setHeight(f.getHeight() * val);
    f.setZoom(f.getZoom() * val);
  });
};
const fontNames =
  "BBadr,BBaran,BBardiya,BCompset,BDavat,BElham,BEsfehanBold,BFantezy,BFarnaz,BFerd" +
  "osi,BHamid,BHelal,BHoma,BJadidBold,BJalal,BKoodakBold,BKourosh,BLotus,BMahsa,BMe" +
  "hrBold,BMitra,BMorvarid,BNarm,BNasimBold,BNazanin,BRoya,BSetarehBold,BShiraz,BSi" +
  "naBold,BTabassom,BTehran,BTitrBold,BTitrTGEBold,BTraffic,BVahidBold,BYagut,BYas," +
  "BYekan,BZar,BZiba";
class Menu extends React.Component {
  state = {
    urgent: true,
    sendDate: '',
    sendTime: '',
    sendType: 1
  }
  componentDidMount() {
    this.props.refresh();
  }

  showSendPlayListModal(sendType, title) {
    this.setState({
      urgent: true,
      sendDate: ''
    })
    $("#sendPlayListModal .modal-title").text(title)
    $("#sendPlayListModal").modal({
      backdrop: false
    })
  }

  render() {
    const props = this.props;
    return (
      <div className="AppMenu" >
        {fontNames.split(",").map(x => (
          <span key={x} style={{ fontFamily: x }}>
            {" "}
          </span>
        ))}
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active">
            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
              مدیریت VMS
            </a>
          </li>
          {permissions("MNU_TAB_IMAGE_EDIT") && (
            <li role="presentation">
              <a
                href="#MNU_TAB_IMAGE_EDIT"
                aria-controls="MNU_TAB_IMAGE_EDIT"
                role="tab"
                data-toggle="tab"
              >
                ویرایش عکس
              </a>
            </li>
          )}
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active row" id="home">
            {/* <MenuItem
              ID="MNU_VMS_MANAGEMENT"
              text="ویراشVMS"
              icon="fa-desktop"
              Click={() => showDialog("VMSs", "مدیریت تابلوها")}/>
            <MenuItem
              ID="MNU_GROUP_MANAGEMENT"
              text="ویراش گروه ها"
              icon="fa-tags"
              Click={() => showDialog("VMSGroups", "مدیریت تابلوها")}/> */}
            <MenuItem
              ID="MNU_PLAYLIST_MANAGEMENT"
              text="مدیریت لیست نمایش"
              icon="fa-tags"
              shortKey="i"
              title="Alt+I"
              Click={() =>
                showDialog("PlayListTemplates/Index", "مدیریت لیست نمایش")
              }
            />

            <MenuItem
              ID="MNU_UPDATE_VMS_LIST"
              text="به روز رسانی مجدد"
              icon="fa-refresh"
              shortKey="r"
              title="Alt+R"
              Click={() => props.refresh()}
            />
            <MenuItem
              ID="MNU_IMPORT_IMAGES"
              text="انتخاب تصویر از سرور"
              icon="fa-cloud-download"
              shortKey="p"
              title="Alt+P"
              Click={() => {
                props.changeActivePlayListItem(-1);
                window.showDialog("Images/Index", "انتخاب تصویر از‌ آلبوم");
              }}
            />
            {/*<MenuItem text="check" icon="fa-plug"/>
            <MenuItem text="Import" icon="fa-cloud-download"/>
            <MenuItem text="Add" icon="fa-image"/>
            <MenuItem text="Delete" icon=" fa-trash"/>
            <MenuItem text="Move Left" icon=" fa-mail-reply"/>
            <MenuItem text="Move Right" icon="fa-mail-forward"/>*/}
            <MenuItem
              ID="MNU_SAVE_PLAYLIST_AS"
              text="ذخیره مجدد لیست نمایش"
              icon="fa-copy"
              shortKey="x"
              title="Alt+X"
              Click={() => {
                let name = window.prompt(
                  "لیست جاری با چه نامی ذخیره مجدد گردد؟",
                  "lstNew" + Math.floor(Math.random() * 1000)
                );
                if (name) props.SavePlayList(name);
              }}
            />
            <MenuItem
              ID="MNU_SAVE_PLAYLIST"
              text="ذخیره لیست نمایش"
              icon="fa-save"
              shortKey="s"
              title="Alt+S"
              Click={() => {
                if (
                  window.confirm(
                    "آیا مایل به ذخیره تغییرات در لیست جاری هستید؟"
                  )
                )
                  props.SavePlayList();
              }}
            />
            <MenuItem
              ID="MNU_SEND_PLAYLIST"
              text="ارسال لیست نمایش "
              icon="fa-send"
              shortKey="z"
              title="Alt+Z"
              Click={() => {
                this.showSendPlayListModal(1, "آیا مایل به ارسال لیست جاری هستید؟")
              }}
            />
            <MenuItem
              ID="MNU_SEND_PLAYLIST_SENARIO"
              text="ارسال لیست نمایش با سناریو"
              icon="fa-random"
              shortKey="e"
              title="Alt+E"
              Click={() => {
                this.showSendPlayListModal(2, "لیست نمایش جاری با سناریوی مشخص شده ارسال گردد؟")
              }}
            />
            <MenuItem
              ID="MNU_SEND_PLAYLIST_GROUP"
              text="ارسال لیست نمایش گروهی"
              icon="fa-upload"
              shortKey="g"
              title="Alt+G"
              Click={() => {
                this.showSendPlayListModal(3, "لیست نمایش جاری برای گروه دستگاه ها ارسال گردد؟")
              }}
            />

            <MenuItem
              ID="MNU_RESET_VMS"
              text="ریست دستگاه"
              icon="fa-flash"
              shortKey="f"
              title="Alt+F"
              Click={() => props.ResetDevice()}
            />
            <MenuItem
              ID="MNU_LAST_MESSAGE"
              text="آخرین پیام ارسال  شده"
              icon="fa-themeisle"
              shortKey="l"
              title="Alt+L"
              Click={() => props.GetLastSentPlayList()}
            />
            <MenuItem
              ID="MNU_PREVIEW_FILE"
              text="آخرین وضعیت دستگاه"
              icon="fa-cloud-download" //shortKey="p" title="Alt+P"
              shortKey="v"
              title="Alt+V"
              Click={() => {
                window.showDialog("VMSs/PreviewFile", "آخرین وضعیت دستگاه");
              }}
            />
            <MenuItem
              ID="MNU_GPRS_SETTING"
              text="سایر تنظیمات"
              icon="fa-cloud-download" //shortKey="p" title="Alt+P"
              shortKey="q"
              title="Alt+Q"
              Click={() => {
                window.showDialog("VMSs/GPRSSetting", "سایر تنظیمات");
              }}
            />
            {/* <MenuItem
              ID="MNU_TEST_DEVICE"
              text="تست دستگاه"
              icon="fa-cloud-download" //shortKey="p" title="Alt+P"
              Click={() => { window.showDialog("VMSs/DeviceTest", "آخرین وضعیت دستگاه")
            }}/> */}
          </div>
          {permissions("MNU_TAB_IMAGE_EDIT") ? (
            <div
              role="tabpanel"
              className="tab-pane row"
              id="MNU_TAB_IMAGE_EDIT"
            >
              <div className=" col-xs-2 col-md-2 col-lg-1">
                <div className="input-group">
                  <span className="input-group-addon fa  fa-paint-brush" />
                  <input
                    title="انتخاب رنگ"
                    type="color"
                    className="form-control"
                    defaultValue="#ffffff"
                    onChange={e =>
                      props.onItemClick("backColor", {
                        type: "setting",
                        color: e.target.value
                      })
                    }
                  />
                </div>
              </div>
              <div className="btn-group" role="group" aria-label="...">
                <select
                  title="فونت"
                  className="fontChanger btn btn-default"
                  onChange={e =>
                    props.onItemClick("font", {
                      type: "setting",
                      font: e.target.value
                    })
                  }
                >
                  {fontNames.split(",").map(x => (
                    <option
                      key={x}
                      style={{
                        fontFamily: x
                      }}
                      value={x}
                    >
                      فونت {x}
                    </option>
                  ))}
                </select>

                <select
                  title="ضخامت فونت"
                  className="fontWeight btn btn-default"
                  onChange={e =>
                    props.onItemClick("fontWeight", {
                      type: "setting",
                      fontWeight: e.target.value
                    })
                  }
                >
                  <option value="normal">Normal</option>
                  <option value="bold">Bold</option>
                </select>

                <button
                  type="button"
                  title="درج نوشته"
                  className="btn btn-default fa fa-text-width"
                  onClick={() => props.onItemClick("text", { type: "insert" })}
                />

                <button
                  type="button"
                  title="وسط چین"
                  className="btn btn-default fa fa-align-center"
                  onClick={() =>
                    props.onItemClick("align", {
                      type: "setting",
                      mode: "center"
                    })
                  }
                />

                <button
                  type="button"
                  title="چپ چین"
                  className="btn btn-default fa fa-align-left"
                  onClick={() =>
                    props.onItemClick("align", {
                      type: "setting",
                      mode: "left"
                    })
                  }
                />
                <button
                  type="button"
                  title="راست چین"
                  className="btn btn-default fa fa-align-right"
                  onClick={() =>
                    props.onItemClick("align", {
                      type: "setting",
                      mode: "right"
                    })
                  }
                />

                <button
                  type="button"
                  title="پاک کردن محتوای فریم ALT+C"
                  data-shortkey="c"
                  className="btn btn-default fa fa-eraser"
                  onClick={() =>
                    props.onItemClick("clear", { type: "setting" })
                  }
                />

                <button
                  type="button"
                  title="درج دایره"
                  className="btn btn-default fa fa-circle-o"
                  onClick={() =>
                    props.onItemClick("circle", { type: "insert" })
                  }
                />
                <button
                  type="button"
                  title="درج مستطیل"
                  className="btn btn-default fa fa-square-o"
                  onClick={() => props.onItemClick("rect", { type: "insert" })}
                />
                <button
                  type="button"
                  title="درج مثلت"
                  className="btn btn-default fa  fa-caret-up"
                  onClick={() =>
                    props.onItemClick("triangle", { type: "insert" })
                  }
                />
                <button
                  type="button"
                  title="تغییر نشانگر به حالت قلم"
                  className="btn btn-default fa fa-pencil"
                  onClick={() => props.onItemClick("draw", { type: "mode" })}
                />
                <button
                  type="button"
                  title="تغییر نشانگر به حالت انتخاب"
                  className="btn btn-default fa fa-hand-paper-o"
                  onClick={() => props.onItemClick("select", { type: "mode" })}
                />
                <button
                  type="button"
                  title="حذف آیتم انتخاب شده در نقاشی Alt+D"
                  data-shortkey="d"
                  className="btn btn-default fa fa-trash"
                  onClick={() =>
                    props.onItemClick("delete", { type: "delete" })
                  }
                />
                <button
                  type="button"
                  title="انتقال به عقب"
                  className="btn btn-default fa fa-level-down"
                  onClick={() =>
                    props.onItemClick("moveBack", { type: "update" })
                  }
                />

                <button
                  type="button"
                  title="بزرگ کردن تا پوشش کل عکس"
                  className="btn btn-default fa fa-arrows-alt"
                  onClick={() => props.onItemClick("dock", { type: "update" })}
                />
                <button
                  type="button"
                  title=" نمایش/حذف خط کش"
                  className="btn btn-default fa  fa-table"
                  onClick={() => props.ToggleRuler()}
                />

                <div
                  title="انتخاب تصویر از کلاینت"
                  className="ImageLoad"
                  style={{
                    display: "inline"
                  }}
                >
                  <input
                    type="file"
                    id="imageImportFileUpload"
                    onChange={e => {
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
                    }}
                  />

                  <button
                    type="button"
                    className="btn btn-default fa fa-image"
                    onClick={() => $("#imageImportFileUpload").click()}
                  />
                </div>
              </div>
              <select
                className="btn btn-default"
                onChange={changeZoom}
                title="بزرگنمایی"
              >
                <option value="1">1x</option>
                <option value="2">2x</option>
                <option value="3">3x</option>
                <option value="0.5">0.5X</option>
              </select>
              <div
                id="MaskSymbols"
                style={{
                  width: "100%"
                }}
              />
            </div>
          ) : (
              ""
            )}
        </div>

        <div className="modal fade" id="sendPlayListModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel"></h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <table>
                  <tr>
                    <td>
                      ارسال با زمانبندی
                    </td>
                    <td>
                      <input type="text" id='txtSendingDate'
                        placeholder= "تاریخ"
                        defaultValue={(new Date()).toLocaleDateString('fa-IR')}
                        disabled={this.state.urgent}
                        onChange={(e) => this.setState({ sendDate: e.target.value })}
                      ></input>
                      <input type="time" id='txtSendingTime'
                        placeholder="زمان"
                        defaultValue="00:00"
                        disabled={this.state.urgent}
                        onChange={(e) => this.setState({ sendTime: e.target.value })}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" >
                      <input type="checkbox" checked={this.state.urgent} onClick={() => this.setState({ urgent: !this.state.urgent })}></input> ارسال فوری
                    </td>
                  </tr>
                </table>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">انصراف</button>
                <button type="button" className="saveChange btn btn-primary"
                  data-dismiss="modal" onClick={() => {
                    props.SendPlaylistToServer(this.state.sendType, this.state.urgent ? '' : `${this.state.sendDate} ${this.state.sendTime}` )
                  }}>ارسال</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}
export default Menu;
