

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignCenterVerticalSimpleLight = (props: IconProps) => {

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
          <Path d="M208,122H174V48a14,14,0,0,0-14-14H96A14,14,0,0,0,82,48v74H48a6,6,0,0,0,0,12H82v74a14,14,0,0,0,14,14h64a14,14,0,0,0,14-14V134h34a6,6,0,0,0,0-12Zm-46,86a2,2,0,0,1-2,2H96a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h64a2,2,0,0,1,2,2Z" />
        </G>
      </Svg>
    );
  }

