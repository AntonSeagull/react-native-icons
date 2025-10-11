

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandDjango = (props: IconProps) => {

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
          <Path d="M3 3m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
          <Path d="M12 7v8.5l-2.015 .201a2.715 2.715 0 1 1 0 -5.402l2.015 .201" />
          <Path d="M16 7v.01" />
          <Path d="M16 10v5.586c0 .905 -.36 1.774 -1 2.414" />
        </G>
      </Svg>
    );
  }

