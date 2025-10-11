

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrRotateLeft = (props: IconProps) => {

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
          <Path  d="M11.52,3.43A9.09,9.09,0,0,0,5.7,5.55V2.35H4.07v6.5h6.5V7.21H6.3a7.46,7.46,0,1,1-1.47,8.65l-1.46.73A9.11,9.11,0,1,0,11.52,3.43Z" />
        </G>
      </Svg>
    );
  }

