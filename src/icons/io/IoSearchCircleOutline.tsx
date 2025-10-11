

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoSearchCircleOutline = (props: IconProps) => {

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
          <Path d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z" />
          <Path d="M232,160a72,72,0,1,0,72,72A72,72,0,0,0,232,160Z" />
        </G>
      </Svg>
    );
  }

