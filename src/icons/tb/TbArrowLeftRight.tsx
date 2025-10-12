

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowLeftRight = (props: IconProps) => {

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
          <Path  d="M17 13l4 -4l-4 -4" />
          <Path  d="M7 13l-4 -4l4 -4" />
          <Path  d="M12 14a5 5 0 0 1 5 -5h4" />
          <Path  d="M12 19v-5a5 5 0 0 0 -5 -5h-4" />
        </G>
      </Svg>
    );
  }

