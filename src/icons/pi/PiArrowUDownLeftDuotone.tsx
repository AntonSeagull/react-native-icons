

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowUDownLeftDuotone = (props: IconProps) => {

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
          <Path  d="M80,120v96L32,168Z" opacity="0.2" />
          <Path  d="M168,48H80a8,8,0,0,0,0,16h88a48,48,0,0,1,0,96H88V120a8,8,0,0,0-13.66-5.66l-48,48a8,8,0,0,0,0,11.32l48,48A8,8,0,0,0,88,216V176h80a64,64,0,0,0,0-128ZM72,196.69,43.31,168,72,139.31Z" />
        </G>
      </Svg>
    );
  }

