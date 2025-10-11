

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiSpeakerSimpleNoneLight = (props: IconProps) => {

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
          <Path  d="M162.64,26.61a6,6,0,0,0-6.32.65L85.94,82H40A14,14,0,0,0,26,96v64a14,14,0,0,0,14,14H85.94l70.38,54.74A6,6,0,0,0,166,224V32A6,6,0,0,0,162.64,26.61ZM154,211.73,91.68,163.26A6,6,0,0,0,88,162H40a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H88a6,6,0,0,0,3.68-1.26L154,44.27Z" />
        </G>
      </Svg>
    );
  }

