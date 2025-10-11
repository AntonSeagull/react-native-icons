

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignCenterVerticalSimpleBold = (props: IconProps) => {

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
          <Path  d="M208,116H180V48a20,20,0,0,0-20-20H96A20,20,0,0,0,76,48v68H48a12,12,0,0,0,0,24H76v68a20,20,0,0,0,20,20h64a20,20,0,0,0,20-20V140h28a12,12,0,0,0,0-24Zm-52,88H100V52h56Z" />
        </G>
      </Svg>
    );
  }

