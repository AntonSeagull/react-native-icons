

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoGridSharp = (props: IconProps) => {

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
          <Path d="M240,240H32V32H240Z" />
          <Path d="M480,240H272V32H480Z" />
          <Path d="M240,480H32V272H240Z" />
          <Path d="M480,480H272V272H480Z" />
        </G>
      </Svg>
    );
  }

