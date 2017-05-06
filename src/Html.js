import React from 'react';

export default ({ html, css }) => (
  <html>
    <head>
      {css.map(([id, css]) => <style key={id} id={id}>{css}</style>)}
    </head>
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
      <script src="http://localhost:8080/app.js" />
    </body>
  </html>
);
