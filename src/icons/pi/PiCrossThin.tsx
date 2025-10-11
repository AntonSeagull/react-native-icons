

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCrossThin = (props: IconProps) => {

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
          <Path  d="M200,76H156V32a12,12,0,0,0-12-12H112a12,12,0,0,0-12,12V76H56A12,12,0,0,0,44,88v32a12,12,0,0,0,12,12h44v92a12,12,0,0,0,12,12h32a12,12,0,0,0,12-12V132h44a12,12,0,0,0,12-12V88A12,12,0,0,0,200,76Zm4,44a4,4,0,0,1-4,4H152a4,4,0,0,0-4,4v96a4,4,0,0,1-4,4H112a4,4,0,0,1-4-4V128a4,4,0,0,0-4-4H56a4,4,0,0,1-4-4V88a4,4,0,0,1,4-4h48a4,4,0,0,0,4-4V32a4,4,0,0,1,4-4h32a4,4,0,0,1,4,4V80a4,4,0,0,0,4,4h48a4,4,0,0,1,4,4Z" />
        </G>
      </Svg>
    );
  }

