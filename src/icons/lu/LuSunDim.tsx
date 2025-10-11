

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuSunDim = (props: IconProps) => {

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
          <Path d="M12 4h.01" />
          <Path d="M20 12h.01" />
          <Path d="M12 20h.01" />
          <Path d="M4 12h.01" />
          <Path d="M17.657 6.343h.01" />
          <Path d="M17.657 17.657h.01" />
          <Path d="M6.343 17.657h.01" />
          <Path d="M6.343 6.343h.01" />
        </G>
      </Svg>
    );
  }

