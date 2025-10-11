

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiTreasureChestThin = (props: IconProps) => {

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
          <Path  d="M184,44H72A52.06,52.06,0,0,0,20,96v96a12,12,0,0,0,12,12H224a12,12,0,0,0,12-12V96A52.06,52.06,0,0,0,184,44Zm44,52v12H188V52.19A44.06,44.06,0,0,1,228,96Zm-88,44H116V100h24Zm-28,8h32a4,4,0,0,0,4-4V116h32v80H76V116h32v28A4,4,0,0,0,112,148Zm36-40V96a4,4,0,0,0-4-4H112a4,4,0,0,0-4,4v12H76V52H180v56ZM68,52.19V108H28V96A44.06,44.06,0,0,1,68,52.19ZM28,192V116H68v80H32A4,4,0,0,1,28,192Zm196,4H188V116h40v76A4,4,0,0,1,224,196Z" />
        </G>
      </Svg>
    );
  }

