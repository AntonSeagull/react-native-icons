

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuCalendarPlus2 = (props: IconProps) => {

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
          <Path d="M10 16h4" />
          <Path d="M12 14v4" />
        </G>
      </Svg>
    );
  }

