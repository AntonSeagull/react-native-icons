

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbZodiacAries = (props: IconProps) => {

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
          <Path d="M12 5a5 5 0 1 0 -4 8" />
          <Path d="M16 13a5 5 0 1 0 -4 -8" />
          <Path d="M12 21l0 -16" />
        </G>
      </Svg>
    );
  }

