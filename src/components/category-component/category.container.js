import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CategoriesGetAction, PostGetAction, SetCategoriesColorAction, SetSelectedCategoryAction, SetPaginationConfigAction } from "../../actions";
import CategoryComponent from "./category.component";

const mapStateToProps = state => ({
  categoriesList: state.categoriesList.categories,
  selectedCategory: state.selectedCategory.selectedCategory
});

const mapDispatchToProps = dispatch => ({
  categoriesGetAction: bindActionCreators(CategoriesGetAction, dispatch),
  postsGetAction: bindActionCreators(PostGetAction, dispatch),
  setCategoriesColorAction: bindActionCreators(SetCategoriesColorAction, dispatch),
  setSelectedCategoryAction: bindActionCreators(SetSelectedCategoryAction, dispatch),
  setPaginationConfigAction: bindActionCreators(SetPaginationConfigAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);
