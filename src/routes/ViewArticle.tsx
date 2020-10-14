import { RootState } from 'MyTypes';
import React from 'react';
import { connect } from 'react-redux';
import { match } from 'react-router';

import ArticleView from '../features/articles/components/ArticleView';
import Main from '../layouts/Main';
import BackLink from '../components/BackLink';

type OwnProps = {
  match: match<{ articleId: string }>;
};

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  article: state.articles.articles.find(
    i => i.id === ownProps.match.params.articleId
  ),
  previous: state.previous
});

type Props = ReturnType<typeof mapStateToProps>;

const ViewArticle = ({ article, previous }: Props) => {
  if (!article) {
    return <div>'Article doesn\'t exist'</div>;
  }

  return (
    <Main renderActionsMenu={() => <BackLink previous={previous}/>}>
      <ArticleView article={article} />
    </Main>
  );
};

export default connect(mapStateToProps)(ViewArticle);
