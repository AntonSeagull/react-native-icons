

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTablets = (props: IconProps) => {

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
          <Circle  cx="7" cy="7" r="5" />
          <Circle  cx="17" cy="17" r="5" />
          <Path  d="M12 17h10" />
          <Path  d="m3.46 10.54 7.08-7.08" />
        </G>
      </Svg>
    );
  }

