

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuShuffle = (props: IconProps) => {

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
          <Path  d="m18 14 4 4-4 4" />
          <Path  d="m18 2 4 4-4 4" />
          <Path  d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22" />
          <Path  d="M2 6h1.972a4 4 0 0 1 3.6 2.2" />
          <Path  d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45" />
        </G>
      </Svg>
    );
  }

