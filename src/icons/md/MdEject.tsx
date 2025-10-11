

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const MdEject = (props: IconProps) => {

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
          <Path d="M0 24V0h24v24H0z" fill="none" />
          <Path d="M5 17h14v2H5zm7-12L5.33 15h13.34z" />
        </G>
      </Svg>
    );
  }

