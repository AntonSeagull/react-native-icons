

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMathXDivideY2 = (props: IconProps) => {

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
          <Path  d="M3 21l18 -18" />
          <Path  d="M15 14l3 4.5" />
          <Path  d="M21 14l-4.5 7" />
          <Path  d="M3 4l6 6" />
          <Path  d="M3 10l6 -6" />
        </G>
      </Svg>
    );
  }

