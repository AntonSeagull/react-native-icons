

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuGoal = (props: IconProps) => {

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
          <Path  d="M12 13V2l8 4-8 4" />
          <Path  d="M20.561 10.222a9 9 0 1 1-12.55-5.29" />
          <Path  d="M8.002 9.997a5 5 0 1 0 8.9 2.02" />
        </G>
      </Svg>
    );
  }

