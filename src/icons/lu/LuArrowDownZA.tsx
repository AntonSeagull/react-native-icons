

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuArrowDownZA = (props: IconProps) => {

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
          <Path  d="m3 16 4 4 4-4" />
          <Path  d="M7 4v16" />
          <Path  d="M15 4h5l-5 6h5" />
          <Path  d="M15 20v-3.5a2.5 2.5 0 0 1 5 0V20" />
          <Path  d="M20 18h-5" />
        </G>
      </Svg>
    );
  }

