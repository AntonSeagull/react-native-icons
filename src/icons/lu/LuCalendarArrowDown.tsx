

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCalendarArrowDown = (props: IconProps) => {

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
          <Path d="m14 18 4 4 4-4" />
          <Path d="M16 2v4" />
          <Path d="M18 14v8" />
          <Path d="M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343" />
          <Path d="M3 10h18" />
          <Path d="M8 2v4" />
        </G>
      </Svg>
    );
  }

