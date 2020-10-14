import React from 'react';

import { Article } from 'MyModels';

import { getPath } from '../../../router-paths';
import {Link} from 'react-router-dom'

type Props = {
  article: Article;
};

const ArticleView: React.FC<Props> = ({ article }) => {
  return (
    <div>
      <h3>{article.title}</h3>

      <p>{article.content}</p>
    
      <p><Link to={getPath('editArticle', article.id)}>Edit</Link></p>
    </div>
  );
};

export default ArticleView;
