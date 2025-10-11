

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuShipWheel = (props: IconProps) => {

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
          <Path d="M12 2v7.5" />
          <Path d="m19 5-5.23 5.23" />
          <Path d="M22 12h-7.5" />
          <Path d="m19 19-5.23-5.23" />
          <Path d="M12 14.5V22" />
          <Path d="M10.23 13.77 5 19" />
          <Path d="M9.5 12H2" />
          <Path d="M10.23 10.23 5 5" />
        </G>
      </Svg>
    );
  }

