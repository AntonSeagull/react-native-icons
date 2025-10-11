

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscArrowSmallUp = (props: IconProps) => {

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
          <Path  d="M5 6.5L7.5 4h.7l2.5 2.5-.7.71-1.65-1.64v5.57h-1V5.57L5.7 7.22 5 6.5z" />
        </G>
      </Svg>
    );
  }

