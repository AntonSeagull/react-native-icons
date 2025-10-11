

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBatteryPlusFill = (props: IconProps) => {

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
          <Path d="M200,56H32A24,24,0,0,0,8,80v96a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V80A24,24,0,0,0,200,56Zm-56,80H124v20a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h20V100a8,8,0,0,1,16,0v20h20a8,8,0,0,1,0,16ZM256,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z" />
        </G>
      </Svg>
    );
  }

