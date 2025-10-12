

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrWindows = (props: IconProps) => {

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
          <Path  fill="#001589" d="M23.923,0 L10.959,1.893 L10.959,11.481 L23.923,11.379 L23.923,0 Z M0,3.398 L0.009,11.553 L9.782,11.498 L9.778,2.066 L0,3.398 Z M0.008,20.681 L9.781,22.025 L9.773,12.585 L0.007,12.522 L0.008,20.681 Z M10.959,22.171 L23.923,24 L23.927,12.674 L10.941,12.652 L10.959,22.171 Z" fillRule="evenodd" />
        </G>
      </Svg>
    );
  }

