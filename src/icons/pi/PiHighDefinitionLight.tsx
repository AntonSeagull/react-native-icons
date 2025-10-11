

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHighDefinitionLight = (props: IconProps) => {

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
          <Path d="M176,74H152a6,6,0,0,0-6,6v96a6,6,0,0,0,6,6h24a54,54,0,0,0,0-108Zm0,96H158V86h18a42,42,0,0,1,0,84Zm-62,6V134H54v42a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0v42h60V80a6,6,0,0,1,12,0v96a6,6,0,0,1-12,0ZM26,48a6,6,0,0,1,6-6H224a6,6,0,0,1,0,12H32A6,6,0,0,1,26,48ZM230,208a6,6,0,0,1-6,6H32a6,6,0,0,1,0-12H224A6,6,0,0,1,230,208Z" />
        </G>
      </Svg>
    );
  }

