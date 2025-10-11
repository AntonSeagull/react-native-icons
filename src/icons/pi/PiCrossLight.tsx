

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCrossLight = (props: IconProps) => {

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
          <Path d="M200,74H158V32a14,14,0,0,0-14-14H112A14,14,0,0,0,98,32V74H56A14,14,0,0,0,42,88v32a14,14,0,0,0,14,14H98v90a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V134h42a14,14,0,0,0,14-14V88A14,14,0,0,0,200,74Zm2,46a2,2,0,0,1-2,2H152a6,6,0,0,0-6,6v96a2,2,0,0,1-2,2H112a2,2,0,0,1-2-2V128a6,6,0,0,0-6-6H56a2,2,0,0,1-2-2V88a2,2,0,0,1,2-2h48a6,6,0,0,0,6-6V32a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V80a6,6,0,0,0,6,6h48a2,2,0,0,1,2,2Z" />
        </G>
      </Svg>
    );
  }

