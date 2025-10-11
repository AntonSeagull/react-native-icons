

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiAlignCenterVerticalBold = (props: IconProps) => {

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
          <Path d="M224,116h-8V72a20,20,0,0,0-20-20H156a20,20,0,0,0-20,20v44H120V48a20,20,0,0,0-20-20H60A20,20,0,0,0,40,48v68H32a12,12,0,0,0,0,24h8v68a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V140h16v44a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V140h8a12,12,0,0,0,0-24ZM96,204H64V52H96Zm96-24H160V76h32Z" />
        </G>
      </Svg>
    );
  }

