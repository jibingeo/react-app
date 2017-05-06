import React from 'react';

export default ({ html }) => (
  <html>
    <head />
    <body>
      <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
      <script src="http://localhost:8080/app.js" />
    </body>
  </html>
);
