

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTrendingUpDown = (props: IconProps) => {

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
          <Path  d="M14.828 14.828 21 21" />
          <Path  d="M21 16v5h-5" />
          <Path  d="m21 3-9 9-4-4-6 6" />
          <Path  d="M21 8V3h-5" />
        </G>
      </Svg>
    );
  }

