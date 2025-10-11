

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineRightThin = (props: IconProps) => {

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
          <Path  d="M186.83,125.17a4,4,0,0,1,0,5.66l-72,72a4,4,0,0,1-5.66-5.66L174.34,132H32a4,4,0,0,1,0-8H174.34L109.17,58.83a4,4,0,0,1,5.66-5.66ZM216,36a4,4,0,0,0-4,4V216a4,4,0,0,0,8,0V40A4,4,0,0,0,216,36Z" />
        </G>
      </Svg>
    );
  }

