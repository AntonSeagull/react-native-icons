

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRampLeft2 = (props: IconProps) => {

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
          <Path  d="M18 3v8.707" />
          <Path  d="M8 14l-4 -4l4 -4" />
          <Path  d="M18 21c0 -6.075 -4.925 -11 -11 -11h-3" />
        </G>
      </Svg>
    );
  }

