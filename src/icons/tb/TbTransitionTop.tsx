

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTransitionTop = (props: IconProps) => {

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
          <Path d="M21 6a3 3 0 0 0 -3 -3h-12a3 3 0 0 0 -3 3" />
          <Path d="M6 21h12a3 3 0 0 0 0 -6h-12a3 3 0 0 0 0 6z" />
          <Path d="M12 15v-8" />
          <Path d="M9 10l3 -3l3 3" />
        </G>
      </Svg>
    );
  }

