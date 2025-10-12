

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBoxAlignRight = (props: IconProps) => {

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
          <Path  d="M13.998 20.003v-16h5a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-5z" />
          <Path  d="M8.998 20.003h.01" />
          <Path  d="M3.997 20.003h.011" />
          <Path  d="M3.997 15.002h.011" />
          <Path  d="M3.997 9.002h.011" />
          <Path  d="M3.997 4.002h.011" />
          <Path  d="M8.998 4.002h.01" />
        </G>
      </Svg>
    );
  }

