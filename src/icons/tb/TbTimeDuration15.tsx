

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTimeDuration15 = (props: IconProps) => {

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
          <Path d="M12 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
          <Path d="M9 9v6" />
          <Path d="M3 12v.01" />
          <Path d="M12 21v.01" />
          <Path d="M7.5 4.2v.01" />
          <Path d="M16.5 19.8v.01" />
          <Path d="M7.5 19.8v.01" />
          <Path d="M4.2 16.5v.01" />
          <Path d="M19.8 16.5v.01" />
          <Path d="M4.2 7.5v.01" />
          <Path d="M21 12a9 9 0 0 0 -9 -9" />
        </G>
      </Svg>
    );
  }

