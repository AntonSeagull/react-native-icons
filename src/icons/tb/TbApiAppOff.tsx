

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbApiAppOff = (props: IconProps) => {

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
          <Path  d="M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5" />
          <Path  d="M15 15v3.5a2.5 2.5 0 1 1 -5 0v-.5" />
          <Path  d="M13 9h5.5a2.5 2.5 0 1 1 0 5h-.5" />
          <Path  d="M9 12v-3m.042 -3.957a2.5 2.5 0 0 1 4.958 .457v.5" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

