

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiToolboxLight = (props: IconProps) => {

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
          <Path  d="M224,66H174V56a22,22,0,0,0-22-22H104A22,22,0,0,0,82,56V66H32A14,14,0,0,0,18,80V192a14,14,0,0,0,14,14H224a14,14,0,0,0,14-14V80A14,14,0,0,0,224,66ZM94,56a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V66H94ZM32,78H224a2,2,0,0,1,2,2v34H190V104a6,6,0,0,0-12,0v10H78V104a6,6,0,0,0-12,0v10H30V80A2,2,0,0,1,32,78ZM224,194H32a2,2,0,0,1-2-2V126H66v10a6,6,0,0,0,12,0V126H178v10a6,6,0,0,0,12,0V126h36v66A2,2,0,0,1,224,194Z" />
        </G>
      </Svg>
    );
  }

