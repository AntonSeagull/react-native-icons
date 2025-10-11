

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAugmentedReality2 = (props: IconProps) => {

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
          <Path  d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5" />
          <Path  d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z" />
          <Path  d="M13 14.5v4.5l4 2.5" />
          <Path  d="M17 17l4 -2.5" />
          <Path  d="M11 4h2" />
        </G>
      </Svg>
    );
  }

