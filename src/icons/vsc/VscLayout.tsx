

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscLayout = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 16 16"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8, 8)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M3 2L2 3V13L3 14H7L8 13V3L7 2H3ZM3 13V3H7V13H3Z" />
          <Path  d="M10 3L11 2H14L15 3V6L14 7H11L10 6V3ZM11 3V6H14V3H11Z" />
          <Path  d="M10 10L11 9H14L15 10V13L14 14H11L10 13V10ZM11 10V13H14V10H11Z" />
        </G>
      </Svg>
    );
  }

