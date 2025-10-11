

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuBuilding = (props: IconProps) => {

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
          <Path d="M12 10h.01" />
          <Path d="M12 14h.01" />
          <Path d="M12 6h.01" />
          <Path d="M16 10h.01" />
          <Path d="M16 14h.01" />
          <Path d="M16 6h.01" />
          <Path d="M8 10h.01" />
          <Path d="M8 14h.01" />
          <Path d="M8 6h.01" />
          <Path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
        </G>
      </Svg>
    );
  }

