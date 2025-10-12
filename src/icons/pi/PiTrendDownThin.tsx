

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTrendDownThin = (props: IconProps) => {

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
          <Path  d="M236,128v64a4,4,0,0,1-4,4H168a4,4,0,0,1,0-8h54.34L136,101.66,98.83,138.83a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L96,130.34l37.17-37.17a4,4,0,0,1,5.66,0L228,182.34V128a4,4,0,0,1,8,0Z" />
        </G>
      </Svg>
    );
  }

