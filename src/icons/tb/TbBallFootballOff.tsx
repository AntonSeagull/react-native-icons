

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBallFootballOff = (props: IconProps) => {

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
          <Path  d="M20.041 16.046a9 9 0 0 0 -12.084 -12.09m-2.323 1.683a9 9 0 0 0 12.726 12.73" />
          <Path  d="M12 7l4.755 3.455l-.566 1.743l-.98 3.014l-.209 .788h-6l-1.755 -5.545l1.86 -1.351l2.313 -1.681z" />
          <Path  d="M12 7v-4" />
          <Path  d="M15 16l2.5 3" />
          <Path  d="M16.755 10.455l3.745 -1.455" />
          <Path  d="M9.061 16.045l-2.561 2.955" />
          <Path  d="M7.245 10.455l-3.745 -1.455" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

