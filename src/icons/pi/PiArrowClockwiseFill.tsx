

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowClockwiseFill = (props: IconProps) => {

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
          <Path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1-5.66-13.66l17-17-10.55-9.65-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,1,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60l10.93,10L226.34,50.3A8,8,0,0,1,240,56Z" />
        </G>
      </Svg>
    );
  }

