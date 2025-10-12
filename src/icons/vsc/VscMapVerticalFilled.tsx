

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const VscMapVerticalFilled = (props: IconProps) => {

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
          <Path  d="M5.5 2L13 2L10.8125 5.5L3.3125 5.5L5.5 2Z" />
          <Path  d="M12.6875 9.5L5.1875 9.5L3.3125 6.5L10.8125 6.5L12.6875 9.5Z" />
          <Path  d="M12.6875 10.5L5.1875 10.5L3 14L10.5 14L12.6875 10.5Z" />
        </G>
      </Svg>
    );
  }

