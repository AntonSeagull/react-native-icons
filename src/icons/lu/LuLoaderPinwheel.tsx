

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuLoaderPinwheel = (props: IconProps) => {

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
          <Path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
          <Path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
          <Path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
        </G>
      </Svg>
    );
  }

