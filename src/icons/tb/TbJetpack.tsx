

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbJetpack = (props: IconProps) => {

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
          <Path  d="M10 6a3 3 0 1 0 -6 0v7h6v-7z" />
          <Path  d="M14 13h6v-7a3 3 0 0 0 -6 0v7z" />
          <Path  d="M5 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
          <Path  d="M15 16c0 2.333 .667 4 2 5c1.333 -1 2 -2.667 2 -5" />
          <Path  d="M10 8h4" />
          <Path  d="M10 11h4" />
        </G>
      </Svg>
    );
  }

