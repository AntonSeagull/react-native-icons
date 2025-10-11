

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuPersonStanding = (props: IconProps) => {

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
          <Path d="m9 20 3-6 3 6" />
          <Path d="m6 8 6 2 6-2" />
          <Path d="M12 10v4" />
        </G>
      </Svg>
    );
  }

