

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiReplitLogoThin = (props: IconProps) => {

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
          <Path  d="M216,92H148V40a12,12,0,0,0-12-12H72A12,12,0,0,0,60,40V88a12,12,0,0,0,12,12h68v56H72a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h68a12,12,0,0,0,12-12V104A12,12,0,0,0,216,92ZM140,216a4,4,0,0,1-4,4H72a4,4,0,0,1-4-4V168a4,4,0,0,1,4-4h68Zm0-124H72a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,4,4Zm80,60a4,4,0,0,1-4,4H148V100h68a4,4,0,0,1,4,4Z" />
        </G>
      </Svg>
    );
  }

