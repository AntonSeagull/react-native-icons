

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBusOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M400,112H112A32.09,32.09,0,0,1,80,80h0a32.09,32.09,0,0,1,32-32H400a32.09,32.09,0,0,1,32,32h0A32.09,32.09,0,0,1,400,112Z" />
          <Path d="M144,432v22a10,10,0,0,1-10,10H106a10,10,0,0,1-10-10V432Z" />
          <Path d="M416,432v22a10,10,0,0,1-10,10H378a10,10,0,0,1-10-10V432Z" />
        </G>
      </Svg>
    );
  }

