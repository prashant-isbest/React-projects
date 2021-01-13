import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
  //   console.log(props);
  if (!props.currentSong) {
    return <div>Select a song</div>;
  }

  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {props.currentSong.title}
        <br />
        Duration: {props.currentSong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log('mapStateToProps in SongDetails' , state)
  return { currentSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetails);
