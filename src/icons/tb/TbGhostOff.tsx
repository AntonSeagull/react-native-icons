

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGhostOff = (props: IconProps) => {

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
          <Path  d="M8.794 4.776a7 7 0 0 1 10.206 6.224v4m-.12 3.898a1.779 1.779 0 0 1 -2.98 .502a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7c0 -1.683 .594 -3.227 1.583 -4.434" />
          <Path  d="M14 10h.01" />
          <Path  d="M10 14a3.5 3.5 0 0 0 4 0" />
          <Path  d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

