import React, { PropTypes } from 'react';
// import styles from './styles';

function FiltersCollection({ filters }) {
  return (
    <div>
      Here goes filters
    </div>
  );
}

FiltersCollection.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
  })),
};

FiltersCollection.defaultProps = {
  filters: [],
};

export default FiltersCollection;
