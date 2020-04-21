import React from 'react'

class MessageInboxSection2 extends React.Component{
    render(){
        return(
        <div>
            
 <section class="content inbox mt-5">
  <div class="container">
      <div class="row clearfix">
          <div class="col-lg-12">
              <div class="card action_bar">
                  <div class="body">
                      <div class="row clearfix">
                          <div class="col-lg-1 col-md-2 col-3">
                              <div class="checkbox inlineblock delete_all">
                                  <input id="deleteall" type="checkbox" />
                                  <label for="deleteall">
                                      All
                                  </label>
                              </div>                                
                          </div>
                          <div class="col-lg-5 col-md-4 col-6">
                              <div class="input-group search">
                                  <input type="text" class="form-control" placeholder="Search... " />
                                  <span class="input-group-addon">
                                      <i class="zmdi zmdi-search"></i>
                                  </span>
                              </div>
                          </div>                                                     
                      </div>
                  </div>
              </div>
          </div>           
      </div>        
      <div class="row clearfix">
          <div class="col-md-12 col-lg-12 col-xl-12">
              <ul class="mail_list list-group list-unstyled">
                  <li class="list-group-item" data-toggle="modal" data-target="#myModal">
                      <div class="media">
                          <div class="pull-left">                                
                              <div class="controls">
                                  <div class="checkbox">
                                    <i class="fa fa-user fa-2x" style={{color: "#3395d2"}}></i>
                                      {/* <!-- <input type="checkbox" id="basic_checkbox_1"> --> */}
                                      <label for="basic_checkbox_1"></label>
                                  </div>
                                  <a href="javascript:void(0);" class="favourite text-muted hidden-sm-down" data-toggle="active">
                                      <i class="zmdi zmdi-star-outline"></i></a>
                              </div>
                              <div class="thumb hidden-sm-down m-r-20"> 
                              <img src="assets/images/xs/avatar1.jpg" class="rounded-circle" alt="" /> </div>
                          </div>
                          <div class="media-body">
                              <div class="media-heading">
                                  <a href="#" class="m-r-10">Jhon Deo</a>
                                  {/* <!-- <span class="badge bg-blue">Family</span> --> */}
                                  <small class="float-right text-muted"><time class="hidden-sm-down" datetime="2017">12:35 AM</time><i class="zmdi zmdi-attachment-alt"></i> <button class="btn btn-danger">Delete</button></small>
                                  
                              </div>
                              <p class="msg">Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry. </p>
                          </div>
                      </div>
                  </li>
                  <li class="list-group-item unread" data-toggle="modal" data-target="#myModal">
                      <div class="media">
                          <div class="pull-left">
                              <div class="controls">
                                  <div class="checkbox">
                                    <i class="fa fa-user fa-2x" style={{color: "#3395d2"}}></i>
                                      {/* <!-- <input type="checkbox" id="basic_checkbox_2"> --> */}
                                      <label for="basic_checkbox_2"></label>
                                  </div>
                                  <a href="javascript:void(0);" class="favourite col-amber hidden-sm-down" data-toggle="active"><i class="zmdi zmdi-star"></i></a>
                              </div>
                              <div class="thumb hidden-sm-down m-r-20"> <img src="assets/images/xs/avatar2.jpg" class="rounded-circle" alt="" /> </div>
                          </div>
                          <div class="media-body">
                              <div class="media-heading">
                                  <a href="mail-single.html" class="m-r-10">Mohammad Affan</a>
                                  {/* <!-- <span class="badge bg-amber">Shop</span> --> */}
                                  <small class="float-right text-muted"><time class="hidden-sm-down" datetime="2017">12:35 AM</time>
                                  <i class="zmdi zmdi-attachment-alt"></i><button class="btn btn-danger">Delete</button> </small>
                              </div>
                              <p class="msg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>                                
                          </div>
                      </div>
                  </li>
                  <li class="list-group-item" data-toggle="modal" data-target="#myModal">
                      <div class="media">
                          <div class="pull-left">
                              <div class="controls">
                                  <div class="checkbox">
                                    <i class="fa fa-user fa-2x" style={{color: "#3395d2"}}></i>
                                      <label for="basic_checkbox_3"></label>
                                  </div>
                                  <a href="javascript:void(0);" class="favourite text-muted hidden-sm-down" data-toggle="active"><i class="zmdi zmdi-star-outline"></i></a>
                              </div>
                              <div class="thumb hidden-sm-down m-r-20"> <img src="assets/images/xs/avatar3.jpg" class="rounded-circle" alt="" /> </div>
                          </div>
                          <div class="media-body">
                              <div class="media-heading">
                                  <a href="mail-single.html" class="m-r-10">Ali Raza Lilani</a>
                                  {/* <!-- <span class="badge bg-red">Google</span> --> */}
                                  <small class="float-right text-muted"><time class="hidden-sm-down" datetime="2017">12:35 AM</time><i class="zmdi zmdi-attachment-alt"></i> <button class="btn btn-danger">Delete</button></small>
                              </div>
                              <p class="msg"> If you are going to use a passage of Lorem Ipsum, you need to be sure</p>                                
                          </div>
                      </div>
                  </li>
                  <li class="list-group-item unread" data-toggle="modal" data-target="#myModal">
                      <div class="media">
                          <div class="pull-left">
                              <div class="controls">
                                  <div class="checkbox">
                                    <i class="fa fa-user fa-2x" style={{color: "#3395d2"}}></i>
                                      {/* <!-- <input type="checkbox" id="basic_checkbox_4"> --> */}
                                      <label for="basic_checkbox_4"></label>
                                  </div>
                                  <a href="javascript:void(0);" class="favourite text-muted hidden-sm-down" data-toggle="active"><i class="zmdi zmdi-star-outline"></i></a>
                              </div>
                              <div class="thumb hidden-sm-down m-r-20">
                                   <img src="assets/images/xs/avatar4.jpg" class="rounded-circle" alt="" /> </div>
                          </div>
                          <div class="media-body">
                              <div class="media-heading">
                                  <a href="mail-single.html" class="m-r-10">Tooba Anwar</a>
                                  {/* <!-- <span class="badge bg-blush">Themeforest</span> --> */}
                                  <small class="float-right text-muted"><time class="hidden-sm-down" datetime="2017">12:35 AM</time><i class="zmdi zmdi-attachment-alt"></i><button class="btn btn-danger">Delete</button> </small>
                              </div>
                              <p class="msg">There are many variations of passages of Lorem Ipsum available, but the majority </p>                                
                          </div>
                      </div>
                  </li>
                  <li class="list-group-item" data-toggle="modal" data-target="#myModal">
                      <div class="media">
                          <div class="pull-left">
                              <div class="controls">
                                  <div class="checkbox">
                                    <i class="fa fa-user fa-2x" style={{color: "#3395d2"}}></i>
                                      {/* <!-- <input type="checkbox" id="basic_checkbox_5"> --> */}
                                      <label for="basic_checkbox_5"></label>
                                  </div>
                                  <a href="javascript:void(0);" class="favourite text-muted hidden-sm-down" data-toggle="active"><i class="zmdi zmdi-star-outline"></i></a>
                              </div>
                              <div class="thumb hidden-sm-down m-r-20"> 
                              <img src="assets/images/xs/avatar5.jpg" class="rounded-circle" alt="" /> </div>
                          </div>
                          <div class="media-body">
                              <div class="media-heading">
                                  <a href="mail-single.html" class="m-r-10">Gulraiz</a>
                                  {/* <!-- <span class="badge bg-green">Work</span> --> */}
                                  <small class="float-right text-muted"><time class="hidden-sm-down" datetime="2017">12:35 AM</time><i class="zmdi zmdi-attachment-alt"></i><button class="btn btn-danger">Delete</button> </small>
                              </div>
                              <p class="msg">LAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>                                
                          </div>
                      </div>
                  </li>
                  <li class="list-group-item" data-toggle="modal" data-target="#myModal">
                      <div class="media">
                          <div class="pull-left">
                              <div class="controls">
                                  <div class="checkbox">
                                    <i class="fa fa-user fa-2x" style={{color: "#3395d2"}}></i>
                                      {/* <!-- <input type="checkbox" id="basic_checkbox_6"> --> */}
                                      <label for="basic_checkbox_6"></label>
                                  </div>
                                  <a href="javascript:void(0);" class="favourite col-amber hidden-sm-down" data-toggle="active"><i class="zmdi zmdi-star"></i></a>
                              </div>
                              <div class="thumb hidden-sm-down m-r-20"> <img src="assets/images/xs/avatar6.jpg" class="rounded-circle" alt="" /> </div>
                          </div>
                          <div class="media-body">
                              <div class="media-heading">
                                  <a href="mail-single.html" class="m-r-10">Contrary to popular</a>
                                  {/* <!-- <span class="badge bg-blush">Themeforest</span> --> */}
                                  <small class="float-right text-muted"><time class="hidden-sm-down" datetime="2017">12:35 AM</time><i class="zmdi zmdi-attachment-alt"></i><button class="btn btn-danger">Delete</button> </small>
                              </div>
                              <p class="msg">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical</p>
                          </div>
                      </div>
                  </li>
                  <li class="list-group-item" data-toggle="modal" data-target="#myModal">
                      <div class="media">
                          <div class="pull-left">
                              <div class="controls">
                                  <div class="checkbox">
                                    <i class="fa fa-user fa-2x" style={{color: "#3395d2"}}></i>
                                      {/* <!-- <input type="checkbox" id="basic_checkbox_7"> --> */}
                                      <label for="basic_checkbox_7"></label>
                                  </div>
                                  <a href="javascript:void(0);" class="favourite col-amber hidden-sm-down" data-toggle="active"><i class="zmdi zmdi-star"></i></a>
                              </div>
                              <div class="thumb hidden-sm-down m-r-20"> <img src="assets/images/xs/avatar7.jpg" class="rounded-circle" alt="" /> </div>
                          </div>
                          <div class="media-body">
                              <div class="media-heading">
                                  <a href="mail-single.html" class="m-r-10">Velit a labore</a>
                                  {/* <!-- <span class="badge bg-green">Work</span> --> */}
                                  <small class="float-right text-muted"><time class="hidden-sm-down" datetime="2017">12:35 AM</time><i class="zmdi zmdi-attachment-alt"></i><button class="btn btn-danger">Delete</button> </small>
                              </div>
                              <p class="msg">Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry. </p>                                
                          </div>
                      </div>
                  </li>
                  <li class="list-group-item" data-toggle="modal" data-target="#myModal">
                      <div class="media">
                          <div class="pull-left">
                              <div class="controls">
                                  <div class="checkbox">
                                    <i class="fa fa-user fa-2x" style={{color: "#3395d2"}}></i>
                                      {/* <!-- <input type="checkbox" id="basic_checkbox_8" checked=""> --> */}
                                      <label for="basic_checkbox_8"></label>
                                  </div>
                                  <a href="javascript:void(0);" class="favourite col-amber hidden-sm-down" data-toggle="active"><i class="zmdi zmdi-star"></i></a>
                              </div>
                              <div class="thumb hidden-sm-down m-r-20"> <img src="assets/images/xs/avatar8.jpg" class="rounded-circle" alt="" /> </div>
                          </div>
                          <div class="media-body">
                              <div class="media-heading">
                                  <a href="mail-single.html" class="m-r-10">Variations of passages</a>
                                  {/* <!-- <span class="badge bg-blush">Themeforest</span> --> */}
                                  <small class="float-right text-muted"><time class="hidden-sm-down" datetime="2017">12:35 AM</time><i class="zmdi zmdi-attachment-alt"></i><button class="btn btn-danger">Delete</button> </small>
                              </div>
                              <p class="msg">There are many variations of passages of Lorem Ipsum available, but the majority </p>                                
                          </div>
                      </div>
                  </li>
                  <li class="list-group-item" data-toggle="modal" data-target="#myModal">
                      <div class="media">
                          <div class="pull-left">
                              <div class="controls">
                                  <div class="checkbox">
                                    <i class="fa fa-user fa-2x" style={{color: "#3395d2"}}></i>
                                      {/* <!-- <input type="checkbox" id="basic_checkbox_9"> --> */}
                                      <label for="basic_checkbox_9"></label>
                                  </div>
                                  <a href="javascript:void(0);" class="favourite text-muted hidden-sm-down" data-toggle="active"><i class="zmdi zmdi-star-outline"></i></a>
                              </div>
                              <div class="thumb hidden-sm-down m-r-20"> <img src="assets/images/xs/avatar9.jpg" class="rounded-circle" alt="" /> </div>
                          </div>
                          <div class="media-body">
                              <div class="media-heading">
                                  <a href="mail-single.html" class="m-r-10">Generators on the Internet</a>
                                  {/* <!-- <span class="badge bg-green">Work</span> --> */}
                                  <small class="float-right text-muted"><time class="hidden-sm-down" datetime="2017">12:35 AM</time><i class="zmdi zmdi-attachment-alt"></i> <button class="btn btn-danger">Delete</button></small>
                              </div>
                              <p class="msg">LAll the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>                                
                          </div>
                      </div>
                  </li>
                  <li class="list-group-item" data-toggle="modal" data-target="#myModal">
                      <div class="media">
                          <div class="pull-left">
                              <div class="controls">
                                  <div class="checkbox">
                                    <i class="fa fa-user fa-2x" style={{color: "#3395d2"}}></i>
                                      {/* <!-- <input type="checkbox" id="basic_checkbox_10"> --> */}
                                      <label for="basic_checkbox_10"></label>
                                  </div>
                                  <a href="javascript:void(0);" class="favourite text-muted hidden-sm-down" data-toggle="active"><i class="zmdi zmdi-star-outline"></i></a>
                              </div>
                              <div class="thumb hidden-sm-down m-r-20"> <img src="assets/images/xs/avatar10.jpg" class="rounded-circle" alt="" /> </div>
                          </div>
                          <div class="media-body">
                              <div class="media-heading">
                                  <a href="mail-single.html" class="m-r-10">Velit a labore</a>
                                  {/* <!-- <span class="badge bg-blue">Family</span> --> */}
                                  <small class="float-right text-muted"><time class="hidden-sm-down" datetime="2017">12:35 AM</time><i class="zmdi zmdi-attachment-alt"></i> <button class="btn btn-danger">Delete</button></small>
                              </div>
                              <p class="msg">Lorem Ipsum is simply dumm dummy text of the printing and typesetting industry. </p>
                          </div>
                      </div>
                  </li>
              </ul>
              <div class="card m-t-5 mt-5">
                  <div class="body">
                      <ul class="pagination pagination-primary m-b-0">
                          <li class="page-item"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                          <li class="page-item active"><a class="page-link" href="javascript:void(0);">2</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                          <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>
<div class="container">
 

  {/* <!-- The Modal --> */}
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div class="modal-header">
          <h4 class="modal-title">Mohammad Affan</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div class="modal-body">
          <div class="messaging">
            <div class="inbox_msg">
              <div class="mesgs">
                <div class="msg_history">
                  <div class="incoming_msg">
                    <div class="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" width="100%" alt="sunil" /> </div>
                    <div class="received_msg">
                      <div class="received_withd_msg">
                        <p>Test which is a new approach to have all
                          solutions Test which is a new approach to have all
                          solutions</p>
                        <span class="time_date"> 11:01 AM    |    June 9</span></div>
                    </div>
                  </div>
                </div>
                <div class="type_msg">
                  <div class="input_msg_write">
                    <input type="text" class="write_msg" placeholder="Type a message" />
                    <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                  </div>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
        {/* <!-- Modal footer --> */}
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Reply</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Delete Message</button>
        </div>
     
        </div>
        </div>
        </div>
        </div>
 

        </div>
        )
    }
}

export default MessageInboxSection2;