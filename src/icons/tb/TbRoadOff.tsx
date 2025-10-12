

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRoadOff = (props: IconProps) => {

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
          <Path  d="M4 19l3.332 -11.661" />
          <Path  d="M16 5l2.806 9.823" />
          <Path  d="M12 8v-2" />
          <Path  d="M12 13v-1" />
          <Path  d="M12 18v-2" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

