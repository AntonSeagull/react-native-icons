

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignLeftThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M44,40V216a4,4,0,0,1-8,0V40a4,4,0,0,1,8,0Zm24,64V64A12,12,0,0,1,80,52h96a12,12,0,0,1,12,12v40a12,12,0,0,1-12,12H80A12,12,0,0,1,68,104Zm8,0a4,4,0,0,0,4,4h96a4,4,0,0,0,4-4V64a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4Zm152,48v40a12,12,0,0,1-12,12H80a12,12,0,0,1-12-12V152a12,12,0,0,1,12-12H216A12,12,0,0,1,228,152Zm-8,0a4,4,0,0,0-4-4H80a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4Z" />
        </G>
      </Svg>
    );
  }

