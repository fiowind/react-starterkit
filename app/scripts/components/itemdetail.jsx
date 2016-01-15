import React from 'react';

class Itemdetail extends React.Component{

  constructor(props, context) {
   super(props);
  }
  closemodel(){
    $('#animatedModal').attr("class","animated animatedModal-off bounceOut");
    setTimeout(function() {
        // $('.thumb').removeClass('ac');
        $('#animatedModal').css("display","none");
        console.log('a');
    }, 1000);
  }

  render() {
    return (
      <div id="animatedModal">
              <div id="closebt-container" className="close-animatedModal" onClick={this.closemodel.bind(this)} >
                  <img className="closebt" src="images/closebt.svg" />
              </div>


              <div id="modal-container" className="col-sm-8 col-md-8 col-lg-8 col-lg-offset-2">
                  <div className="post-header">
                    <div className="post-header-two">
                        <div className="posttitle">
                            <h1>app的名字</h1>
                            <h2>关于这个app的介绍，简单说几句，切中要害就好</h2>
                        </div>
                        <div className="post-update-get">
                            <section><a href="">
                                <span></span>
                                <span></span></a>
                            </section>
                            <section>
                                <span>去看看</span>
                            </section>
                        </div>
                        <div className="post-button-row">
                            <div className="left">
                                <a href="">dsf</a>
                                <a href="">++</a>
                            </div>
                            <div className="right">
                                <span>android</span><span>WEB</span>
                            </div>
                        </div>
                    </div>
                  </div>
                  <main>
                      <div className="post-main-left">
                        <div className="post-media">
                          <div className="post-media-title">
                          <h3>缩略图</h3>
                              <span>+</span><span>-</span>
                          </div>
                          <div className="post-media-imgs">
                              <img src="https://ph-files.imgix.net/9f79001b-eabd-4826-9d60-c0a96cadc0d3?auto=format&w=214&h=420" alt="" />
                              <img src="https://ph-files.imgix.net/9f79001b-eabd-4826-9d60-c0a96cadc0d3?auto=format&w=214&h=420" alt="" />
                              <img src="https://ph-files.imgix.net/4d64a276-1d9b-4826-927a-db086e0db35c?auto=format&w=362&h=204" alt="" />
                          </div>
                        </div>
                        <div id="post-discus">
                          <div className="post-discus-title">
                              <h3>七嘴八舌</h3>
                              <div className="post-discus-upvote">最多投票</div>
                          </div>
                          <div className="post-discus-main">
                              <ul>
                                  <li>
                                      <div className="post-discus-avator">
                                        <img src="http://61.174.13.156:1188/static/upload/1.png" />
                                      </div>
                                      <div className="comment-heading">
                                          <span className="nc">fio</span>
                                          <span className="qm">我是好人，哈！</span>
                                          <span className="sj">3分钟之前</span>
                                      </div>
                                      <div className="comment-body">很喜欢！一直在评论中！</div>
                                      <div className="comment-action">
                                      </div>
                                  </li>
                              </ul>
                          </div>
                        </div>
                      </div>
                      <aside>
                          <div className="post-share">
                              <div className="post-share-title">分享</div>
                              <div className="post-share-toaim">
                                  <span>微博</span>
                                  <span>微信</span>
                                  <span>qq</span>
                                  <span></span>
                              </div>
                          </div>
                          <div className="post-voter">
                              <div className="title">票数</div>
                              <div className="post-voter-avator">
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </div>
                          </div>
                      </aside>
                  </main>


              </div>


          </div>
    );
  }

}


export default Itemdetail;