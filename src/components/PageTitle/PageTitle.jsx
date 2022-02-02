import React from 'react';

import './pagetitle.css';

export default function PageTitle({text}) {
  return (
    <div>
      <h1 className="page-title">
      {text}
      </h1>
    </div>
  );
}


