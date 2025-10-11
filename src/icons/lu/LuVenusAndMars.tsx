

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuVenusAndMars = (props: IconProps) => {

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
          <Path d="M10 20h4" />
          <Path d="M12 16v6" />
          <Path d="M17 2h4v4" />
          <Path d="m21 2-5.46 5.46" />
        </G>
      </Svg>
    );
  }

