

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBankThin = (props: IconProps) => {

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
          <Path d="M24,100H52v72H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8H204V100h28a4,4,0,0,0,2.1-7.41l-104-64a4,4,0,0,0-4.2,0l-104,64A4,4,0,0,0,24,100Zm36,0h40v72H60Zm88,0v72H108V100Zm48,72H156V100h40ZM128,36.7,217.87,92H38.13ZM244,208a4,4,0,0,1-4,4H16a4,4,0,0,1,0-8H240A4,4,0,0,1,244,208Z" />
        </G>
      </Svg>
    );
  }

