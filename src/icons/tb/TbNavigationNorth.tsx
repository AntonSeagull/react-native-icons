

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNavigationNorth = (props: IconProps) => {

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
          <Path d="M16 21l-4 -8l-4 8l4 -2z" />
          <Path d="M10 9v-6l4 6v-6" />
        </G>
      </Svg>
    );
  }

