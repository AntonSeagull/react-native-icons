

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandDenodo = (props: IconProps) => {

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
          <Path d="M11 11h2v2h-2z" />
          <Path d="M3.634 15.634l1.732 -1l1 1.732l-1.732 1z" />
          <Path d="M11 19h2v2h-2z" />
          <Path d="M18.634 14.634l1.732 1l-1 1.732l-1.732 -1z" />
          <Path d="M17.634 7.634l1.732 -1l1 1.732l-1.732 1z" />
          <Path d="M11 3h2v2h-2z" />
          <Path d="M3.634 8.366l1 -1.732l1.732 1l-1 1.732z" />
        </G>
      </Svg>
    );
  }

