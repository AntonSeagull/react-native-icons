

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNorthStar = (props: IconProps) => {

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
          <Path d="M3 12h18" />
          <Path d="M12 21v-18" />
          <Path d="M7.5 7.5l9 9" />
          <Path d="M7.5 16.5l9 -9" />
        </G>
      </Svg>
    );
  }

