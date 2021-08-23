import React from 'react'
import Search from './Search'
import Sort from './Sort'

// eslint-disable-next-line
class Control extends React.Component {
   render() {
      return (
         // eslint-disable-next-line
         <>
            <Search/>
            <Sort />
         </>
      );
   }

}

export default Control;
