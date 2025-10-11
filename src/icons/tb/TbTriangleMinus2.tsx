

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTriangleMinus2 = (props: IconProps) => {

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
          <Path d="M20.48 15.016l-6.843 -11.426a1.914 1.914 0 0 0 -3.274 0l-8.106 13.535a1.914 1.914 0 0 0 1.636 2.871h8.107" />
          <Path d="M16 19h6" />
        </G>
      </Svg>
    );
  }

