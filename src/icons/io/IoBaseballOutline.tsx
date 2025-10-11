

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoBaseballOutline = (props: IconProps) => {

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
          <Path d="M432.94,255.05A192,192,0,0,1,256.63,74.35" />
          <Path d="M255,433.61A192,192,0,0,0,74.29,256.69" />
        </G>
      </Svg>
    );
  }

