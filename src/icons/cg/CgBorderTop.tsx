

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgBorderTop = (props: IconProps) => {

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
          <Path  d="M8 16H16V9L19 9L19 19L5 19L5 9L8 9V16Z" fill="currentColor" fillOpacity="0.3" />
          <Path  d="M5 7L19 7V4L5 4L5 7Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

