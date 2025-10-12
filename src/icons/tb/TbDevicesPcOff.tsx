

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbDevicesPcOff = (props: IconProps) => {

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
          <Path  d="M9 9v10h-6v-14h2" />
          <Path  d="M13 9h9v7h-2m-4 0h-4v-4" />
          <Path  d="M14 19h5" />
          <Path  d="M17 17v2" />
          <Path  d="M6 13v.01" />
          <Path  d="M6 16v.01" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

