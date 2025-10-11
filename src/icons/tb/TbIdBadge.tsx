

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbIdBadge = (props: IconProps) => {

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
          <Path d="M5 3m0 3a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-8a3 3 0 0 1 -3 -3z" />
          <Path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M10 6h4" />
          <Path d="M9 18h6" />
        </G>
      </Svg>
    );
  }

