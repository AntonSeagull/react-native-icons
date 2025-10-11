

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowsVerticalThin = (props: IconProps) => {

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
          <Path d="M162.83,197.17a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66,0l-32-32a4,4,0,0,1,5.66-5.66L124,222.34V33.66L98.83,58.83a4,4,0,0,1-5.66-5.66l32-32a4,4,0,0,1,5.66,0l32,32a4,4,0,0,1-5.66,5.66L132,33.66V222.34l25.17-25.17A4,4,0,0,1,162.83,197.17Z" />
        </G>
      </Svg>
    );
  }

