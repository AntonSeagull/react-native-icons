

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBorderStyle = (props: IconProps) => {

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
          <Path d="M4 20v-14a2 2 0 0 1 2 -2h14" />
          <Path d="M20 8v.01" />
          <Path d="M20 12v.01" />
          <Path d="M20 16v.01" />
          <Path d="M8 20v.01" />
          <Path d="M12 20v.01" />
          <Path d="M16 20v.01" />
          <Path d="M20 20v.01" />
        </G>
      </Svg>
    );
  }

