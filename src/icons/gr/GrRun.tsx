

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrRun = (props: IconProps) => {

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
          <Path  fill="none" d="M15,11 L18,13 M18,5 C18.5522847,5 19,4.55228475 19,4 C19,3.44771525 18.5522847,3 18,3 C17.4477153,3 17,3.44771525 17,4 C17,4.55228475 17.4477153,5 18,5 Z M9.5,9.5 L9.52493781,6 L14.0249378,6 L15,6 L8,17 L4,17 M15,8 L12,13 L12.5,14 L17,7.5 L15,6 M11,13 L16,16.5 L16,21.5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

