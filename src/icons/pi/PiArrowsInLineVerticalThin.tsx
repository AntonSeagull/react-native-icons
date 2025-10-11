

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowsInLineVerticalThin = (props: IconProps) => {

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
          <Path  d="M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM125.17,98.83a4,4,0,0,0,5.66,0l32-32a4,4,0,1,0-5.66-5.66L132,86.34V16a4,4,0,0,0-8,0V86.34L98.83,61.17a4,4,0,0,0-5.66,5.66Zm5.66,58.34a4,4,0,0,0-5.66,0l-32,32a4,4,0,0,0,5.66,5.66L124,169.66V240a4,4,0,0,0,8,0V169.66l25.17,25.17a4,4,0,0,0,5.66-5.66Z" />
        </G>
      </Svg>
    );
  }

