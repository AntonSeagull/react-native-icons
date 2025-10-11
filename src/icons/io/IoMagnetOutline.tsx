

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMagnetOutline = (props: IconProps) => {

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
          <Path d="M421.83,293.82A144,144,0,0,0,218.18,90.17" />
          <Path d="M353.94,225.94a48,48,0,0,0-67.88-67.88" />
          <Path d="M286.06,158.06,172.92,271.19a32,32,0,0,1-45.25,0L105,248.57a32,32,0,0,1,0-45.26L218.18,90.17" />
          <Path d="M421.83,293.82,308.69,407a32,32,0,0,1-45.26,0l-22.62-22.63a32,32,0,0,1,0-45.26L353.94,225.94" />
        </G>
      </Svg>
    );
  }

