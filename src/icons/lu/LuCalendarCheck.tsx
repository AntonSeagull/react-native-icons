

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCalendarCheck = (props: IconProps) => {

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
          <Path d="M8 2v4" />
          <Path d="M16 2v4" />
          <Path d="M3 10h18" />
          <Path d="m9 16 2 2 4-4" />
        </G>
      </Svg>
    );
  }

