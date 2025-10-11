

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAlignRight2 = (props: IconProps) => {

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
          <Path d="M20 4v16" />
          <Path d="M4 6h12" />
          <Path d="M10 12h6" />
          <Path d="M6 18h10" />
        </G>
      </Svg>
    );
  }

