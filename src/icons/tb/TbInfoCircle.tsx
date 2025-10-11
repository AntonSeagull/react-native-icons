

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbInfoCircle = (props: IconProps) => {

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
          <Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <Path d="M12 9h.01" />
          <Path d="M11 12h1v4h1" />
        </G>
      </Svg>
    );
  }

