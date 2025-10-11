

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRoute = (props: IconProps) => {

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
          <Path d="M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
          <Path d="M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4z" />
          <Path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" />
        </G>
      </Svg>
    );
  }

