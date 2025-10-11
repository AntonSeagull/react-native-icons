

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuNavigationOff = (props: IconProps) => {

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
          <Path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" />
          <Path d="M17.39 11.73 22 2l-9.73 4.61" />
        </G>
      </Svg>
    );
  }

