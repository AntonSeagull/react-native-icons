

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTornado = (props: IconProps) => {

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
          <Path  d="M21 4H3" />
          <Path  d="M18 8H6" />
          <Path  d="M19 12H9" />
          <Path  d="M16 16h-6" />
          <Path  d="M11 20H9" />
        </G>
      </Svg>
    );
  }

