

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiBatteryPlusVerticalFill = (props: IconProps) => {

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
          <Path d="M88,8a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,8ZM200,56V224a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V56A24,24,0,0,1,80,32h96A24,24,0,0,1,200,56Zm-36,84a8,8,0,0,0-8-8H136V112a8,8,0,0,0-16,0v20H100a8,8,0,0,0,0,16h20v20a8,8,0,0,0,16,0V148h20A8,8,0,0,0,164,140Z" />
        </G>
      </Svg>
    );
  }

