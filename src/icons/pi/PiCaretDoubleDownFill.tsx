

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretDoubleDownFill = (props: IconProps) => {

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
          <Path  d="M215.39,132.94a8,8,0,0,1-1.73,8.72l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,128h60.69L42.34,61.66A8,8,0,0,1,48,48H208a8,8,0,0,1,5.66,13.66L147.31,128H208A8,8,0,0,1,215.39,132.94Z" />
        </G>
      </Svg>
    );
  }

