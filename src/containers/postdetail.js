import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PostDetailGetAction } from "../actions";
import PostDetailComponent from "../components/postdetail-component/postdetail.component";

const mapStateToProps = state => ({
  postDetail: state.postDetail.post
});

const mapDispatchToProps = dispatch => ({
  postDetailGetAction: bindActionCreators(PostDetailGetAction, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(PostDetailComponent);
