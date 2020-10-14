import React from 'react';

import ArticleForm from '../features/articles/components/ArticleForm';
import Main from '../layouts/Main';
import BackLink from '../components/BackLink';
import { RootState } from 'MyTypes';
import {connect} from 'react-redux';

const mapStateToProps = (state: RootState) => ({
  previous: state.previous
});
type Props = ReturnType<typeof mapStateToProps>;
const AddArticle = ({previous}: Props) => (
  <Main renderActionsMenu={() => <BackLink previous={previous}/>}>
    <ArticleForm />
  </Main>
);

export default connect(mapStateToProps)(AddArticle);