

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgAlignBottom = (props: IconProps) => {

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
          <Path  d="M13 10H17V16H13V10Z" fill="currentColor" fillOpacity="0.5" />
          <Path  d="M11 4H7V16H11V4Z" fill="currentColor" />
          <Path  d="M18 18H6V20H18V18Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

