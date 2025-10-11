

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUmbrella = (props: IconProps) => {

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
          <Path d="M4 12a8 8 0 0 1 16 0z" />
          <Path d="M12 12v6a2 2 0 0 0 4 0" />
        </G>
      </Svg>
    );
  }

