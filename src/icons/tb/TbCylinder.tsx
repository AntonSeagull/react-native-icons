

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCylinder = (props: IconProps) => {

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
          <Path  d="M12 6m-7 0a7 3 0 1 0 14 0a7 3 0 1 0 -14 0" />
          <Path  d="M5 6v12c0 1.657 3.134 3 7 3s7 -1.343 7 -3v-12" />
        </G>
      </Svg>
    );
  }

