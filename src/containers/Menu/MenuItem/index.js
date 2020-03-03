import React from 'react';

function MenuItem({icon, route}) {
  return (
    <p>{icon} {route}</p>
  );
}

export default MenuItem