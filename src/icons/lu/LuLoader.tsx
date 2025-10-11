

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuLoader = (props: IconProps) => {

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
          <Path d="M12 2v4" />
          <Path d="m16.2 7.8 2.9-2.9" />
          <Path d="M18 12h4" />
          <Path d="m16.2 16.2 2.9 2.9" />
          <Path d="M12 18v4" />
          <Path d="m4.9 19.1 2.9-2.9" />
          <Path d="M2 12h4" />
          <Path d="m4.9 4.9 2.9 2.9" />
        </G>
      </Svg>
    );
  }

