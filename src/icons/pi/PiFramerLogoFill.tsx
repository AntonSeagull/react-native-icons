

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFramerLogoFill = (props: IconProps) => {

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
          <Path d="M200,112H149l56.27,50A8,8,0,0,1,200,176H136v64a8,8,0,0,1-13.66,5.66l-72-72A8,8,0,0,1,48,168V104a8,8,0,0,1,8-8h51L50.69,46A8,8,0,0,1,56,32H200a8,8,0,0,1,8,8v64A8,8,0,0,1,200,112Z" />
        </G>
      </Svg>
    );
  }

