

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMonitorOff = (props: IconProps) => {

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
          <Path  d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" />
          <Path  d="M22 15V5a2 2 0 0 0-2-2H9" />
          <Path  d="M8 21h8" />
          <Path  d="M12 17v4" />
          <Path  d="m2 2 20 20" />
        </G>
      </Svg>
    );
  }

