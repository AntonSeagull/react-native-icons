

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgMaximize = (props: IconProps) => {

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
          <Path  d="M3 3H9V5H5V9H3V3Z" fill="currentColor" />
          <Path  d="M3 21H9V19H5V15H3V21Z" fill="currentColor" />
          <Path  d="M15 21H21V15H19V19H15V21Z" fill="currentColor" />
          <Path  d="M21 3H15V5H19V9H21V3Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

