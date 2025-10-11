

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBrowsersOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M397.82,64H114.18C77.69,64,48,94.15,48,131.2V176H64c0-16,16-32,32-32H416c16,0,32,16,32,32h16V131.2C464,94.15,434.31,64,397.82,64Z" />
        </G>
      </Svg>
    );
  }

