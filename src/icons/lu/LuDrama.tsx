

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuDrama = (props: IconProps) => {

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
          <Path  d="M10 11h.01" />
          <Path  d="M14 6h.01" />
          <Path  d="M18 6h.01" />
          <Path  d="M6.5 13.1h.01" />
          <Path  d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" />
          <Path  d="M17.4 9.9c-.8.8-2 .8-2.8 0" />
          <Path  d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" />
          <Path  d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" />
        </G>
      </Svg>
    );
  }

