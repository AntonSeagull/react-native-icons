

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrScan = (props: IconProps) => {

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
          <Path  fill="none" d="M20,14 L20,21 L4,21 L4,14 L4,14 M1,12 L23,12 L1,12 Z M4,11 L4,8 L4,11 Z M20,8 L20,11 L20,8 Z M7,3 L4,3 L4,6 M20,6 L20,3 L17,3 M9,3 L15,3 L9,3 Z" transform="matrix(1 0 0 -1 0 24)" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

