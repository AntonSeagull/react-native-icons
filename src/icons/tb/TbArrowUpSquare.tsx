

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowUpSquare = (props: IconProps) => {

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
          <Path d="M12 17l0 -14" />
          <Path d="M15 6l-3 -3l-3 3" />
          <Path d="M10 21v-4h4v4z" />
        </G>
      </Svg>
    );
  }

