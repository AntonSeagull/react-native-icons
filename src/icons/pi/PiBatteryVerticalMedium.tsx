

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBatteryVerticalMedium = (props: IconProps) => {

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
          <Path d="M176,32H80A24,24,0,0,0,56,56V224a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V56A24,24,0,0,0,176,32Zm8,192a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Zm-16-24a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,200ZM88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8Zm80,152a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,160Z" />
        </G>
      </Svg>
    );
  }

