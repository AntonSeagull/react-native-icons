

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuShowerHead = (props: IconProps) => {

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
          <Path  d="m4 4 2.5 2.5" />
          <Path  d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
          <Path  d="M15 5 5 15" />
          <Path  d="M14 17v.01" />
          <Path  d="M10 16v.01" />
          <Path  d="M13 13v.01" />
          <Path  d="M16 10v.01" />
          <Path  d="M11 20v.01" />
          <Path  d="M17 14v.01" />
          <Path  d="M20 11v.01" />
        </G>
      </Svg>
    );
  }

