

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowElbowLeftLight = (props: IconProps) => {

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
          <Path d="M236.24,100.24l-96,96a6,6,0,0,1-8.48,0L30,94.48V152a6,6,0,0,1-12,0V80a6,6,0,0,1,6-6H96a6,6,0,0,1,0,12H38.48L136,183.51l91.76-91.75a6,6,0,0,1,8.48,8.48Z" />
        </G>
      </Svg>
    );
  }

