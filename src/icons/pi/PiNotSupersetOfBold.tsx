

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNotSupersetOfBold = (props: IconProps) => {

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
          <Path  d="M208,188H89.67l14.55-16H152A68,68,0,0,0,204.86,61.29l12-13.22a12,12,0,0,0-17.76-16.14l-12.4,13.63A67.62,67.62,0,0,0,152,36H56a12,12,0,0,0,0,24h96a43.74,43.74,0,0,1,18.06,3.89L93.6,148H56a12,12,0,0,0,0,24H71.78L39.12,207.93a12,12,0,1,0,17.76,16.14l11-12.07H208a12,12,0,0,0,0-24ZM188.44,79.36A44,44,0,0,1,152,148H126Z" />
        </G>
      </Svg>
    );
  }

