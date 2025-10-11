

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDotsThreeVerticalThin = (props: IconProps) => {

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
          <Path  d="M120,60a8,8,0,1,1,8,8A8,8,0,0,1,120,60Zm8,60a8,8,0,1,0,8,8A8,8,0,0,0,128,120Zm0,68a8,8,0,1,0,8,8A8,8,0,0,0,128,188Z" />
        </G>
      </Svg>
    );
  }

