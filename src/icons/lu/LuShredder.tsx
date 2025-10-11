

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuShredder = (props: IconProps) => {

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
          <Path  d="M10 22v-5" />
          <Path  d="M14 19v-2" />
          <Path  d="M14 2v4a2 2 0 0 0 2 2h4" />
          <Path  d="M18 20v-3" />
          <Path  d="M2 13h20" />
          <Path  d="M20 13V7l-5-5H6a2 2 0 0 0-2 2v9" />
          <Path  d="M6 20v-3" />
        </G>
      </Svg>
    );
  }

