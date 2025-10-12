

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgMenuGridR = (props: IconProps) => {

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
          <Path  d="M4 4H8V8H4V4Z" fill="currentColor" />
          <Path  d="M4 10H8V14H4V10Z" fill="currentColor" />
          <Path  d="M8 16H4V20H8V16Z" fill="currentColor" />
          <Path  d="M10 4H14V8H10V4Z" fill="currentColor" />
          <Path  d="M14 10H10V14H14V10Z" fill="currentColor" />
          <Path  d="M10 16H14V20H10V16Z" fill="currentColor" />
          <Path  d="M20 4H16V8H20V4Z" fill="currentColor" />
          <Path  d="M16 10H20V14H16V10Z" fill="currentColor" />
          <Path  d="M20 16H16V20H20V16Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

