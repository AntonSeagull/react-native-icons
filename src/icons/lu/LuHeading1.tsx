

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuHeading1 = (props: IconProps) => {

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
          <Path d="M4 12h8" />
          <Path d="M4 18V6" />
          <Path d="M12 18V6" />
          <Path d="m17 12 3-2v8" />
        </G>
      </Svg>
    );
  }

