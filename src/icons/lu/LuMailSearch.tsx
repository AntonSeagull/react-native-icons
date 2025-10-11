

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuMailSearch = (props: IconProps) => {

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
          <Path  d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" />
          <Path  d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          <Path  d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <Path  d="m22 22-1.5-1.5" />
        </G>
      </Svg>
    );
  }

