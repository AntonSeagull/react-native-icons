

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodBoy = (props: IconProps) => {

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
          <Path d="M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1 -.29 4.36a9 9 0 0 1 -17.137 0a2.5 2.5 0 0 1 -.29 -4.36a9 9 0 0 1 3.746 -5.81" />
          <Path d="M9.5 16a3.5 3.5 0 0 0 5 0" />
          <Path d="M8.5 2c1.5 1 2.5 3.5 2.5 5" />
          <Path d="M12.5 2c1.5 2 2 3.5 2 5" />
          <Path d="M9 12l.01 0" />
          <Path d="M15 12l.01 0" />
        </G>
      </Svg>
    );
  }

