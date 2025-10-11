

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiDotsThreeOutlineVerticalDuotone = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128ZM128,72a24,24,0,1,0-24-24A24,24,0,0,0,128,72Zm0,112a24,24,0,1,0,24,24A24,24,0,0,0,128,184Z" />
          <Path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Zm0-64A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-48a16,16,0,1,1-16,16A16,16,0,0,1,128,32Zm0,144a32,32,0,1,0,32,32A32,32,0,0,0,128,176Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,224Z" />
        </G>
      </Svg>
    );
  }

