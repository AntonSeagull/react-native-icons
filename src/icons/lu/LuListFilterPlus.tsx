

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuListFilterPlus = (props: IconProps) => {

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
          <Path d="M12 5H2" />
          <Path d="M6 12h12" />
          <Path d="M9 19h6" />
          <Path d="M16 5h6" />
          <Path d="M19 8V2" />
        </G>
      </Svg>
    );
  }

