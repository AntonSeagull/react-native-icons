

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowFatLinesUpThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M226.83,117.17l-96-96a4,4,0,0,0-5.66,0l-96,96A4,4,0,0,0,32,124H76v28a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4V124h44a4,4,0,0,0,2.83-6.83ZM176,116a4,4,0,0,0-4,4v28H84V120a4,4,0,0,0-4-4H41.66L128,29.66,214.34,116Zm4,100a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,216Zm0-32a4,4,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4,4,0,0,1,180,184Z" />
        </G>
      </Svg>
    );
  }

