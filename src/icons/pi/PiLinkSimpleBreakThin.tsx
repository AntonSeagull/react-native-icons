

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiLinkSimpleBreakThin = (props: IconProps) => {

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
          <Path  d="M212.79,116.77l-30.07,30.06a4,4,0,1,1-5.66-5.66l30.07-30.06a44,44,0,0,0-62.24-62.24L114.82,78.93a4,4,0,0,1-5.65-5.66l30.06-30.06a52,52,0,0,1,73.56,73.56Zm-71.62,60.29-30.06,30.07a44,44,0,0,1-62.24-62.24l30.06-30.06a4,4,0,0,0-5.66-5.66L43.21,139.23a52,52,0,0,0,73.56,73.56l30.06-30.07a4,4,0,1,0-5.66-5.66Z" />
        </G>
      </Svg>
    );
  }

