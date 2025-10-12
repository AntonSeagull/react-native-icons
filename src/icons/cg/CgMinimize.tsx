

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CgMinimize = (props: IconProps) => {

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
          <Path  d="M9 9H3V7H7V3H9V9Z" fill="currentColor" />
          <Path  d="M9 15H3V17H7V21H9V15Z" fill="currentColor" />
          <Path  d="M21 15H15V21H17V17H21V15Z" fill="currentColor" />
          <Path  d="M15 9.00012H21V7.00012H17V3.00012H15V9.00012Z" fill="currentColor" />
        </G>
      </Svg>
    );
  }

