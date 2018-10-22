import React, { PureComponent } from 'react';
import { Stage } from "react-konva";
import { connect } from 'react-redux';
import { makeStageLayoutSelector } from '../../selectors/layout';
import AnimatedDancerDotsLayer from './AnimatedDancerDotsLayer';
import DancerDotsLayer from './DancerDotsLayer';
import GridLayer from './GridLayer';
import StageLayer from './StageLayer';

class StageCanvas extends PureComponent {
  render() {
    const { danceId, formationId, width, height, editable, stageLayout, withGrid, animated, demo } = this.props;
    // Canvas dimensions
    // console.log("Stage: ", width, height);
    return (
      <Stage preventDefault={true} width={width} height={height}>
        {withGrid ? <GridLayer grid={stageLayout.grid} /> : null}
        <StageLayer layout={stageLayout.stageRect} />
        {
          animated
            ? <AnimatedDancerDotsLayer danceId={danceId} formationId={formationId}
                                       width={width} height={height} stageRect={stageLayout.stageRect} />
            : <DancerDotsLayer danceId={danceId} formationId={formationId}
                               width={width} height={height} stageRect={stageLayout.stageRect}
                               editable={editable} demo={demo} />
        }
      </Stage>
    );
  }
}

// If the mapStateToProps argument supplied to connect returns a function instead of an object, it will be used
// to create an individual mapStateToProps function for each instance of the container.
// https://github.com/reduxjs/reselect#sharing-selectors-with-props-across-multiple-component-instances

const makeMapStateToProps = () => {
  const getStageLayout = makeStageLayoutSelector();
  return (state, props) => {
    return {
      stageLayout: getStageLayout(state, props),
      animated: state.UI.animated
    }
  }
};

export default connect(makeMapStateToProps)(StageCanvas);