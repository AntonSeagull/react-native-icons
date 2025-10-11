

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiPlusMinusBold = (props: IconProps) => {

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
          <Path d="M208.49,64.49l-144,144a12,12,0,0,1-17-17l144-144a12,12,0,0,1,17,17ZM60,112a12,12,0,0,0,24,0V84h28a12,12,0,0,0,0-24H84V32a12,12,0,0,0-24,0V60H32a12,12,0,0,0,0,24H60Zm164,60H144a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24Z" />
        </G>
      </Svg>
    );
  }

