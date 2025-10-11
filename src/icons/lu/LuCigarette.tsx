

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCigarette = (props: IconProps) => {

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
          <Path  d="M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14" />
          <Path  d="M18 8c0-2.5-2-2.5-2-5" />
          <Path  d="M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
          <Path  d="M22 8c0-2.5-2-2.5-2-5" />
          <Path  d="M7 12v4" />
        </G>
      </Svg>
    );
  }

