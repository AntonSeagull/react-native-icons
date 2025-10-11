

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcUpRight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M6,27v13h8V27c0-2.2,1.8-4,4-4h17v-8H18C11.4,15,6,20.4,6,27z" fill="#3F51B5" />
          <Path d="M6,27v13h8V27c0-2.2,1.8-4,4-4h17v-8H18C11.4,15,6,20.4,6,27z" fill="#3F51B5" />
        </G>
      </Svg>
    );
  }

