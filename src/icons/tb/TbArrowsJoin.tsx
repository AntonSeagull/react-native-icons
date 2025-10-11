

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsJoin = (props: IconProps) => {

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
          <Path d="M3 7h5l3.5 5h9.5" />
          <Path d="M3 17h5l3.495 -5" />
          <Path d="M18 15l3 -3l-3 -3" />
        </G>
      </Svg>
    );
  }

