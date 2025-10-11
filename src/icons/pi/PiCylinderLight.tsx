

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCylinderLight = (props: IconProps) => {

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
          <Path d="M128,18C88.75,18,58,36.45,58,60V196c0,23.55,30.75,42,70,42s70-18.45,70-42V60C198,36.45,167.25,18,128,18Zm0,12c31.44,0,58,13.74,58,30s-26.56,30-58,30S70,76.26,70,60,96.56,30,128,30Zm0,196c-31.44,0-58-13.74-58-30V83.81C82.48,94.87,103.59,102,128,102s45.52-7.13,58-18.19V196C186,212.26,159.44,226,128,226Z" />
        </G>
      </Svg>
    );
  }

