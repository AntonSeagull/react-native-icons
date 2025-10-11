

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCaretCircleDoubleRightLight = (props: IconProps) => {

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
          <Path  d="M200.12,55.87A102,102,0,0,0,55.87,200.12,102,102,0,1,0,200.12,55.87Zm-8.48,135.77a90,90,0,1,1,0-127.28A90.1,90.1,0,0,1,191.64,191.64Zm-67.4-67.88a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48L111.51,128,83.76,100.24a6,6,0,0,1,8.48-8.48Zm56,0a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48L167.51,128l-27.75-27.76a6,6,0,0,1,8.48-8.48Z" />
        </G>
      </Svg>
    );
  }

