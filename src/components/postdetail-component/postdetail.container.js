import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { PostDetailGetAction } from "../../actions/index";
import PostDetailComponent from "./postdetail.component";

const mapStateToProps = state => ({
  loading: state.postDetail.loading,
  postDetail: state.postDetail.post instanceof Error ? 'error' : state.postDetail.post
});

const mapDispatchToProps = dispatch => ({
  postDetailGetAction: bindActionCreators(PostDetailGetAction, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(PostDetailComponent);
