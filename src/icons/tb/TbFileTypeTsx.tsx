

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFileTypeTsx = (props: IconProps) => {

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
          <Path  d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
          <Path  d="M14 3v4a1 1 0 0 0 1 1h4" />
          <Path  d="M16 15l4 6" />
          <Path  d="M16 21l4 -6" />
          <Path  d="M10 20.25c0 .414 .336 .75 .75 .75h1.25a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-1a1 1 0 0 1 -1 -1v-1a1 1 0 0 1 1 -1h1.25a.75 .75 0 0 1 .75 .75" />
          <Path  d="M4.5 15h3" />
          <Path  d="M6 15v6" />
        </G>
      </Svg>
    );
  }

