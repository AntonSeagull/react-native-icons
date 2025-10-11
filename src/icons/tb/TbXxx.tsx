

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbXxx = (props: IconProps) => {

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
          <Path  d="M10 8l4 8" />
          <Path  d="M10 16l4 -8" />
          <Path  d="M17 8l4 8" />
          <Path  d="M17 16l4 -8" />
          <Path  d="M3 8l4 8" />
          <Path  d="M3 16l4 -8" />
        </G>
      </Svg>
    );
  }

