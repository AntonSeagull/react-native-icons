

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBatteryEmptyThin = (props: IconProps) => {

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
          <Path d="M200,60H32A20,20,0,0,0,12,80v96a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V80A20,20,0,0,0,200,60Zm12,116a12,12,0,0,1-12,12H32a12,12,0,0,1-12-12V80A12,12,0,0,1,32,68H200a12,12,0,0,1,12,12Zm40-80v64a4,4,0,0,1-8,0V96a4,4,0,0,1,8,0Z" />
        </G>
      </Svg>
    );
  }

