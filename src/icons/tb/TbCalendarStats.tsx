

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCalendarStats = (props: IconProps) => {

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
          <Path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
          <Path d="M18 14v4h4" />
          <Path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
          <Path d="M15 3v4" />
          <Path d="M7 3v4" />
          <Path d="M3 11h16" />
        </G>
      </Svg>
    );
  }

