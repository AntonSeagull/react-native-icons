

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcManager = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#FFB74D" d="M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z" />
          <Path  fill="#FF5722" d="M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2 H24z" />
          <Path  fill="#CFD8DC" d="M29,31L29,31l-5,1l-5-1c0,0-11,2-11,13h32C40,33,29,31,29,31z" />
          <Circle  cx="33" cy="19" r="2" />
          <Circle  cx="15" cy="19" r="2" />
          <Circle  cx="28" cy="19" r="1" />
          <Circle  cx="20" cy="19" r="1" />
        </G>
      </Svg>
    );
  }

