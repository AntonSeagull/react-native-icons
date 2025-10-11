

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBed = (props: IconProps) => {

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
          <Path d="M7 9m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M22 17v-3h-20" />
          <Path d="M2 8v9" />
          <Path d="M12 14h10v-2a3 3 0 0 0 -3 -3h-7v5z" />
        </G>
      </Svg>
    );
  }

