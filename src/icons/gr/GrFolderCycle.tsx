

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrFolderCycle = (props: IconProps) => {

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
          <Path  fill="none" d="M7.0001,18 C7.0001,15.239 9.2391,13 12.0001,13 C13.9851,13 15.6991,14.156 16.5,16 M17.0001,18 C17.0001,20.761 14.7611,23 12.0001,23 C10.0151,23 8.3011,21.844 7.5,20 M13.0001,16 L17.0001,16 L17.0001,12 M11.0001,20 L7.0001,20 L7.0001,24 M4.0001,23 L1.0001,23 L1.0001,5 L1.0001,1 L9.0001,1 L12.0001,5 L23.0001,5 L23.0001,23 L19.0001,23 M1.0001,9 L23.0001,9 M4,23 L1,23 L1,1 L9,1 L12,5 L23,5 L23,23 L19,23 M1,9 L23,9" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

