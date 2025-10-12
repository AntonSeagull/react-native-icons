

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandSublimeText = (props: IconProps) => {

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
          <Path  d="M19 8l-14 4.5v-5.5l14 -4.5z" />
          <Path  d="M19 17l-14 4.5v-5.5l14 -4.5z" />
          <Path  d="M19 11.5l-14 -4.5" />
          <Path  d="M5 12.5l14 4.5" />
        </G>
      </Svg>
    );
  }

