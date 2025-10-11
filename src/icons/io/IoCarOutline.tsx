

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoCarOutline = (props: IconProps) => {

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
          <Path d="M80,224l37.78-88.15C123.93,121.5,139.6,112,157.11,112H354.89c17.51,0,33.18,9.5,39.33,23.85L432,224" />
        </G>
      </Svg>
    );
  }

