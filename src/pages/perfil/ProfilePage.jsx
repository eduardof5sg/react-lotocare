import "./ProfilePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useState } from "react";

// const ProfilePage = () => {
//     return (
//         <div className="container light-style flex-grow-1 container-p-y">
//         <h4 className="font-weight-bold py-3 mb-4">
//           Account settings
//         </h4>
//         <div className="card overflow-hidden">
//           <div className="row no-gutters row-bordered row-border-light">
//             <div className="col-md-3 pt-0">
//               <div className="list-group list-group-flush account-settings-links">
//                 <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">General</a>
//                 <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Change password</a>
//                 <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-info">Info</a>
//                 <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-social-links">Social links</a>
//                 <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-connections">Connections</a>
//                 <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-notifications">Notifications</a>
//               </div>
//             </div>
//             <div className="col-md-9">
//               <div className="tab-content">
//                 <div className="tab-pane fade active show" id="account-general">
//                   {/* Contenido del panel "General" */}
//                   <div className="card-body media align-items-center">
//                     <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt className="d-block ui-w-80" />
//                     {/* Resto del contenido del panel "General" */}
//                   </div>
//                   <hr className="border-light m-0" />
//                   <div className="card-body">
//                     <div className="form-group">
//                       <label className="form-label">Username</label>
//                       <input type="text" className="form-control mb-1" value="nmaxwell" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">Name</label>
//                       <input type="text" className="form-control" value="Nelle Maxwell" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">E-mail</label>
//                       <input type="text" className="form-control mb-1" value="nmaxwell@mail.com" />
//                       <div className="alert alert-warning mt-3">
//                         Your email is not confirmed. Please check your inbox.
//                         <br />
//                         <a href="javascript:void(0)">Resend confirmation</a>
//                       </div>
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">Company</label>
//                       <input type="text" className="form-control" value="Company Ltd." />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="tab-pane fade" id="account-change-password">
//                   {/* Contenido del panel "Change Password" */}
//                   <div className="card-body pb-2">
//                     <div className="form-group">
//                       <label className="form-label">Current password</label>
//                       <input type="password" className="form-control" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">New password</label>
//                       <input type="password" className="form-control" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">Repeat new password</label>
//                       <input type="password" className="form-control" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="tab-pane fade" id="account-info">
//                   {/* Contenido del panel "Info" */}
//                   <div className="card-body pb-2">
//                     <div className="form-group">
//                       <label className="form-label">Bio</label>
//                       <textarea className="form-control" rows="5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium, turpis dolor molestie diam, ut lacinia diam risus eleifend sapien. Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus non, pulvinar risus.</textarea>
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">Birthday</label>
//                       <input type="text" className="form-control" value="May 3, 1995" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">Country</label>
//                       <select className="custom-select">
//                         <option>USA</option>
//                         <option selected>Canada</option>
//                         <option>UK</option>
//                         <option>Germany</option>
//                         <option>France</option>
//                       </select>
//                     </div>
//                   </div>
//                   <hr className="border-light m-0" />
//                   <div className="card-body pb-2">
//                     <h6 className="mb-4">Contacts</h6>
//                     <div className="form-group">
//                       <label className="form-label">Phone</label>
//                       <input type="text" className="form-control" value="+0 (123) 456 7891" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">Website</label>
//                       <input type="text" className="form-control" value="" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="tab-pane fade" id="account-social-links">
//                   {/* Contenido del panel "Social Links" */}
//                   <div className="card-body pb-2">
//                     <div className="form-group">
//                       <label className="form-label">Twitter</label>
//                       <input type="text" className="form-control" value="https://twitter.com/user" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">Facebook</label>
//                       <input type="text" className="form-control" value="https://www.facebook.com/user" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">Google+</label>
//                       <input type="text" className="form-control" value="" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">LinkedIn</label>
//                       <input type="text" className="form-control" value="" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">Instagram</label>
//                       <input type="text" className="form-control" value="https://www.instagram.com/user" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="tab-pane fade" id="account-connections">
//                   {/* Contenido del panel "Connections" */}
//                   <div className="card-body">
//                     <button type="button" className="btn btn-twitter">Connect to <strong>Twitter</strong></button>
//                   </div>
//                   <hr className="border-light m-0" />
//                   <div className="card-body">
//                     <h5 className="mb-2">
//                       <a href="javascript:void(0)" className="float-right text-muted"><i className="ion ion-md-close"></i> Remove</a>
//                       <i className="ion ion-logo-google text-google"></i>
//                       You are connected to Google:
//                     </h5>
//                     <a href="mailto:[email protected]" className="__cf_email__">[email protected]</a>
//                   </div>
//                   <hr className="border-light m-0" />
//                   <div className="card-body">
//                     <button type="button" className="btn btn-facebook">Connect to <strong>Facebook</strong></button>
//                   </div>
//                   <hr className="border-light m-0" />
//                   <div className="card-body">
//                     <button type="button" className="btn btn-instagram">Connect to <strong>Instagram</strong></button>
//                   </div>
//                 </div>
//                 <div className="tab-pane fade" id="account-notifications">
//                   {/* Contenido del panel "Notifications" */}
//                   <div className="card-body pb-2">
//                     <h6 className="mb-4">Activity</h6>
//                     <div className="form-group">
//                       <label className="switcher">
//                         <input type="checkbox" className="switcher-input" checked />
//                         <span className="switcher-indicator">
//                           <span className="switcher-yes"></span>
//                           <span className="switcher-no"></span>
//                         </span>
//                         <span className="switcher-label">Email me when someone comments on my article</span>
//                       </label>
//                     </div>
//                     <div className="form-group">
//                       <label className="switcher">
//                         <input type="checkbox" className="switcher-input" checked />
//                         <span className="switcher-indicator">
//                           <span className="switcher-yes"></span>
//                           <span className="switcher-no"></span>
//                         </span>
//                         <span className="switcher-label">Email me when someone answers on my forum thread</span>
//                       </label>
//                     </div>
//                     <div className="form-group">
//                       <label className="switcher">
//                         <input type="checkbox" className="switcher-input" />
//                         <span className="switcher-indicator">
//                           <span className="switcher-yes"></span>
//                           <span className="switcher-no"></span>
//                         </span>
//                         <span className="switcher-label">Email me when someone follows me</span>
//                       </label>
//                     </div>
//                   </div>
//                   <hr className="border-light m-0" />
//                   <div className="card-body pb-2">
//                     <h6 className="mb-4">Application</h6>
//                     <div className="form-group">
//                       <label className="switcher">
//                         <input type="checkbox" className="switcher-input" checked />
//                         <span className="switcher-indicator">
//                           <span className="switcher-yes"></span>
//                           <span className="switcher-no"></span>
//                         </span>
//                         <span className="switcher-label">News and announcements</span>
//                       </label>
//                     </div>
//                     <div className="form-group">
//                       <label className="switcher">
//                         <input type="checkbox" className="switcher-input" />
//                         <span className="switcher-indicator">
//                           <span className="switcher-yes"></span>
//                           <span className="switcher-no"></span>
//                         </span>
//                         <span className="switcher-label">Weekly product updates</span>
//                       </label>
//                     </div>
//                     <div className="form-group">
//                       <label className="switcher">
//                         <input type="checkbox" className="switcher-input" checked />
//                         <span className="switcher-indicator">
//                           <span className="switcher-yes"></span>
//                           <span className="switcher-no"></span>
//                         </span>
//                         <span className="switcher-label">Weekly blog digest</span>
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-right mt-3">
//           <button type="button" className="btn btn-primary">Save changes</button>&nbsp;
//           <button type="button" className="btn btn-default">Cancel</button>
//         </div>
//       </div>
//     );
//   };

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("account-general");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container light-style flex-grow-1 container-p-y">
      <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
      <div className="card overflow-hidden">
        <div className="row no-gutters row-bordered row-border-light">
          <div className="col-md-3 pt-0">
            <div className="list-group list-group-flush account-settings-links">
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "account-general" ? "active" : ""
                }`}
                onClick={() => handleTabChange("account-general")}
              >
                General
              </a>
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "account-change-password" ? "active" : ""
                }`}
                onClick={() => handleTabChange("account-change-password")}
              >
                Change password
              </a>
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "account-info" ? "active" : ""
                }`}
                onClick={() => handleTabChange("account-info")}
              >
                Info
              </a>
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "account-social-links" ? "active" : ""
                }`}
                onClick={() => handleTabChange("account-social-links")}
              >
                Social links
              </a>
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "account-connections" ? "active" : ""
                }`}
                onClick={() => handleTabChange("account-connections")}
              >
                Connections
              </a>
              <a
                className={`list-group-item list-group-item-action ${
                  activeTab === "account-notifications" ? "active" : ""
                }`}
                onClick={() => handleTabChange("account-notifications")}
              >
                Notifications
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content">
              <div
                className={`tab-pane fade ${
                  activeTab === "account-general" ? "active show" : ""
                }`}
                id="account-general"
              >
                {/* Contenido del panel "General" */}
                <div className="card-body media align-items-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt
                    className="d-block ui-w-80"
                  />
                  {/* Resto del contenido del panel "General" */}
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <div className="form-group">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      value="nmaxwell"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Nelle Maxwell"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input
                      type="text"
                      className="form-control mb-1"
                      value="nmaxwell@mail.com"
                    />
                    <div className="alert alert-warning mt-3">
                      Your email is not confirmed. Please check your inbox.
                      <br />
                      <a href="javascript:void(0)">Resend confirmation</a>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input
                      type="text"
                      className="form-control"
                      value="Company Ltd."
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-change-password"></div>
              <div
                className={`tab-pane fade ${
                  activeTab === "account-change-password" ? "active show" : ""
                }`}
                id="account-change-password"
              >
                {/* Contenido del panel "Change Password" */}
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Current password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">New password</label>
                    <input type="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Repeat new password</label>
                    <input type="password" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-info"></div>
              <div
                className={`tab-pane fade ${
                  activeTab === "account-info" ? "active show" : ""
                }`}
                id="account-info"
              >
                {/* Contenido del panel "Info" */}
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Bio</label>
                    <textarea className="form-control" rows="5">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris nunc arcu, dignissim sit amet sollicitudin iaculis,
                      vehicula id urna. Sed luctus urna nunc. Donec fermentum,
                      magna sit amet rutrum pretium, turpis dolor molestie diam,
                      ut lacinia diam risus eleifend sapien. Curabitur ac nibh
                      nulla. Maecenas nec augue placerat, viverra tellus non,
                      pulvinar risus.
                    </textarea>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Birthday</label>
                    <input
                      type="text"
                      className="form-control"
                      value="May 3, 1995"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Country</label>
                    <select className="custom-select">
                      <option>USA</option>
                      <option selected>Canada</option>
                      <option>UK</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body pb-2">
                  <h6 className="mb-4">Contacts</h6>
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      value="+0 (123) 456 7891"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Website</label>
                    <input type="text" className="form-control" value="" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-social-links"></div>
              <div
                className={`tab-pane fade ${
                  activeTab === "account-social-links" ? "active show" : ""
                }`}
                id="account-social-links"
              >
                {/* Contenido del panel "Social Links" */}
                <div className="card-body pb-2">
                  <div className="form-group">
                    <label className="form-label">Twitter</label>
                    <input
                      type="text"
                      className="form-control"
                      value="https://twitter.com/user"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Facebook</label>
                    <input
                      type="text"
                      className="form-control"
                      value="https://www.facebook.com/user"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Google+</label>
                    <input type="text" className="form-control" value="" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">LinkedIn</label>
                    <input type="text" className="form-control" value="" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Instagram</label>
                    <input
                      type="text"
                      className="form-control"
                      value="https://www.instagram.com/user"
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="account-connections"></div>
              <div
                className={`tab-pane fade ${
                  activeTab === "account-connections" ? "active show" : ""
                }`}
                id="account-connections"
              >
                {/* Contenido del panel "Connections" */}
                <div className="card-body">
                  <button type="button" className="btn btn-twitter">
                    Connect to <strong>Twitter</strong>
                  </button>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <h5 className="mb-2">
                    <a
                      href="javascript:void(0)"
                      className="float-right text-muted"
                    >
                      <i className="ion ion-md-close"></i> Remove
                    </a>
                    <i className="ion ion-logo-google text-google"></i>
                    You are connected to Google:
                  </h5>
                  <a href="mailto:[email protected]" className="__cf_email__">
                    [email protected]
                  </a>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <button type="button" className="btn btn-facebook">
                    Connect to <strong>Facebook</strong>
                  </button>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body">
                  <button type="button" className="btn btn-instagram">
                    Connect to <strong>Instagram</strong>
                  </button>
                </div>
              </div>
              <div className="tab-pane fade" id="account-notifications"></div>
              <div
                className={`tab-pane fade ${
                  activeTab === "account-notifications" ? "active show" : ""
                }`}
                id="account-notifications"
              >
                {/* Contenido del panel "Notifications" */}
                <div className="card-body pb-2">
                  <h6 className="mb-4">Activity</h6>
                  <div className="form-group">
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher-input"
                        checked
                      />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        Email me when someone comments on my article
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher-input"
                        checked
                      />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        Email me when someone answers on my forum thread
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input type="checkbox" className="switcher-input" />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        Email me when someone follows me
                      </span>
                    </label>
                  </div>
                </div>
                <hr className="border-light m-0" />
                <div className="card-body pb-2">
                  <h6 className="mb-4">Application</h6>
                  <div className="form-group">
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher-input"
                        checked
                      />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        News and announcements
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input type="checkbox" className="switcher-input" />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">
                        Weekly product updates
                      </span>
                    </label>
                  </div>
                  <div className="form-group">
                    <label className="switcher">
                      <input
                        type="checkbox"
                        className="switcher-input"
                        checked
                      />
                      <span className="switcher-indicator">
                        <span className="switcher-yes"></span>
                        <span className="switcher-no"></span>
                      </span>
                      <span className="switcher-label">Weekly blog digest</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-right mt-3">
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
        &nbsp;
        <button type="button" className="btn btn-default">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;