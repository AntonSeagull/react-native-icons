

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretDoubleRightThin = (props: IconProps) => {

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
          <Path  d="M138.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L130.34,128,53.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,138.83,130.83Zm80-5.66-80-80a4,4,0,0,0-5.66,5.66L210.34,128l-77.17,77.17a4,4,0,0,0,5.66,5.66l80-80A4,4,0,0,0,218.83,125.17Z" />
        </G>
      </Svg>
    );
  }

