

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircleChevronsLeft = (props: IconProps) => {

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
          <Path d="M15 15l-3 -3l3 -3" />
          <Path d="M11 15l-3 -3l3 -3" />
          <Path d="M21 12a9 9 0 1 0 0 .265l0 -.265z" />
        </G>
      </Svg>
    );
  }

