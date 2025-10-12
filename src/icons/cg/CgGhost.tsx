

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgGhost = (props: IconProps) => {

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
          <Path  d="M3 4H15V8H3V4Z" fill="currentColor" />
          <Path  d="M21 8H17V4H21V8Z" fill="currentColor" />
          <Path  d="M3 10H21V14H3V10Z" fill="currentColor" />
          <Path  d="M11 16H3V20H11V16Z" fill="currentColor" />
          <Path  d="M13 16V20H21V16H13Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

