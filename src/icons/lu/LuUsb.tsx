

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuUsb = (props: IconProps) => {

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
          <Path  d="M4.7 19.3 19 5" />
          <Path  d="m21 3-3 1 2 2Z" />
          <Path  d="M9.26 7.68 5 12l2 5" />
          <Path  d="m10 14 5 2 3.5-3.5" />
          <Path  d="m18 12 1-1 1 1-1 1Z" />
        </G>
      </Svg>
    );
  }

