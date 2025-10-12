

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdFace6 = (props: IconProps) => {

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
          <Circle  cx="9" cy="13" r="1.25" />
          <Circle  cx="15" cy="13" r="1.25" />
          <Path  d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-0.01,0-0.02,0-0.03 c2.31-0.22,3.43-1.59,4.34-3.41C8.51,8.21,8.85,8,9.24,8h5.53c0.38,0,0.72,0.21,0.89,0.55c0.9,1.8,1.99,3.19,4.34,3.41 c0,0.01,0,0.02,0,0.03C20,16.41,16.41,20,12,20z" />
        </G>
      </Svg>
    );
  }

