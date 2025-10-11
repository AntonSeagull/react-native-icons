

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgMenuOreos = (props: IconProps) => {

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
          <Path  d="M7 3C5.34315 3 4 4.34315 4 6H20C20 4.34315 18.6569 3 17 3H7Z" fill="currentColor" />
          <Path  d="M7 11C5.34315 11 4 9.65685 4 8H20C20 9.65685 18.6569 11 17 11H7Z" fill="currentColor" />
          <Path  d="M7 13C5.34315 13 4 14.3431 4 16H20C20 14.3431 18.6569 13 17 13H7Z" fill="currentColor" />
          <Path  d="M7 21C5.34315 21 4 19.6569 4 18H20C20 19.6569 18.6569 21 17 21H7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

