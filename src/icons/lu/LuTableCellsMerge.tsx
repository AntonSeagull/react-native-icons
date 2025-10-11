

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuTableCellsMerge = (props: IconProps) => {

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
          <Path d="M12 21v-6" />
          <Path d="M12 9V3" />
          <Path d="M3 15h18" />
          <Path d="M3 9h18" />
        </G>
      </Svg>
    );
  }

