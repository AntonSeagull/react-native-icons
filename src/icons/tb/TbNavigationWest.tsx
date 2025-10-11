

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbNavigationWest = (props: IconProps) => {

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
          <Path d="M9 3l1 6l2 -3.75l2 3.75l1 -6" />
          <Path d="M16 21l-4 -8l-4 8l4 -2z" />
        </G>
      </Svg>
    );
  }

