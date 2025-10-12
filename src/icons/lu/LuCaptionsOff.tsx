

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCaptionsOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M10.5 5H19a2 2 0 0 1 2 2v8.5" />
          <Path  d="M17 11h-.5" />
          <Path  d="M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
          <Path  d="m2 2 20 20" />
          <Path  d="M7 11h4" />
          <Path  d="M7 15h2.5" />
        </G>
      </Svg>
    );
  }

