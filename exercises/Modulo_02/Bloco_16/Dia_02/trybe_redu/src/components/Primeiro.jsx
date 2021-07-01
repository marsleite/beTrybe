import { connect } from 'react-redux';

export function Primeiro() {
  return (
    <div>
      <div>
        { props.myFirstState.maps((element, index) => (
          <p key={index}>{ element }</p>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  myFirstState: state.firstReducer.state
});

export default connect(mapStateToProps, null)(Primeiro);