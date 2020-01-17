import React, {Fragment} from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC<{}> = () => {
  const history = useHistory();

  return (
    <Fragment>
      <h1>Страница информации</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur blanditiis culpa debitis doloremque dolorum, eum, fugit ipsa ipsum magnam maxime nihil perferendis perspiciatis qui quibusdam quod sapiente tempora voluptates.</p>
      <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
    </Fragment>
  );
};
