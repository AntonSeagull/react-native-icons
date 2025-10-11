

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBorderStyle2 = (props: IconProps) => {

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
          <Path d="M4 18v.01" />
          <Path d="M8 18v.01" />
          <Path d="M12 18v.01" />
          <Path d="M16 18v.01" />
          <Path d="M20 18v.01" />
          <Path d="M18 12h2" />
          <Path d="M11 12h2" />
          <Path d="M4 12h2" />
          <Path d="M4 6h16" />
        </G>
      </Svg>
    );
  }

