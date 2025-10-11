

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMouseMiddleClickBold = (props: IconProps) => {

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
          <Path  d="M144,12H112A68.07,68.07,0,0,0,44,80v96a68.07,68.07,0,0,0,68,68h32a68.07,68.07,0,0,0,68-68V80A68.07,68.07,0,0,0,144,12Zm44,68v20H160V88a20,20,0,0,0-20-20V36h4A44.05,44.05,0,0,1,188,80ZM120,92h16v40H120Zm-8-56h4V68A20,20,0,0,0,96,88v12H68V80A44.05,44.05,0,0,1,112,36Zm32,184H112a44.05,44.05,0,0,1-44-44V124H96v12a20,20,0,0,0,20,20h24a20,20,0,0,0,20-20V124h28v52A44.05,44.05,0,0,1,144,220Z" />
        </G>
      </Svg>
    );
  }

