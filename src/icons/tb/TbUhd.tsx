

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUhd = (props: IconProps) => {

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
          <Path  d="M10 16v-8" />
          <Path  d="M10 12h4" />
          <Path  d="M14 8v8" />
          <Path  d="M17 8v8h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2z" />
          <Path  d="M3 8v6a2 2 0 1 0 4 0v-6" />
        </G>
      </Svg>
    );
  }

