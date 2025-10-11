

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUmbrellaClosed = (props: IconProps) => {

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
          <Path d="M9 16l3 -13l3 13z" />
          <Path d="M12 16v3c0 2.667 4 2.667 4 0" />
        </G>
      </Svg>
    );
  }

