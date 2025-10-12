

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignBottomThin = (props: IconProps) => {

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
          <Path  d="M220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216Zm-80-40V80a12,12,0,0,1,12-12h40a12,12,0,0,1,12,12v96a12,12,0,0,1-12,12H152A12,12,0,0,1,140,176Zm8,0a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4V80a4,4,0,0,0-4-4H152a4,4,0,0,0-4,4Zm-96,0V40A12,12,0,0,1,64,28h40a12,12,0,0,1,12,12V176a12,12,0,0,1-12,12H64A12,12,0,0,1,52,176Zm8,0a4,4,0,0,0,4,4h40a4,4,0,0,0,4-4V40a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4Z" />
        </G>
      </Svg>
    );
  }

