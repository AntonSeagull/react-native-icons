

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const CiBrightnessUp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12,17.5A5.5,5.5,0,1,1,17.5,12,5.506,5.506,0,0,1,12,17.5Zm0-10A4.5,4.5,0,1,0,16.5,12,4.505,4.505,0,0,0,12,7.5Z" />
        </G>
      </Svg>
    );
  }

