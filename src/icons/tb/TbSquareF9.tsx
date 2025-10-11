

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbSquareF9 = (props: IconProps) => {

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
          <Path  d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
          <Path  d="M13 14.25c0 .414 .336 .75 .75 .75h1.5a.75 .75 0 0 0 .75 -.75v-4.5a.75 .75 0 0 0 -.75 -.75h-1.5a.75 .75 0 0 0 -.75 .75v1.5c0 .414 .336 .75 .75 .75h2.25" />
          <Path  d="M8 12h2" />
          <Path  d="M10 9h-2v6" />
        </G>
      </Svg>
    );
  }

