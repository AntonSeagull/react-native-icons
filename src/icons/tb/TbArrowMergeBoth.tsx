

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowMergeBoth = (props: IconProps) => {

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
          <Path  d="M16 8l-4 -4l-4 4" />
          <Path  d="M12 20v-16" />
          <Path  d="M18 18c-4 -1.333 -6 -4.667 -6 -10" />
          <Path  d="M6 18c4 -1.333 6 -4.667 6 -10" />
        </G>
      </Svg>
    );
  }

