

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircleChevronsUp = (props: IconProps) => {

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
          <Path d="M9 15l3 -3l3 3" />
          <Path d="M9 11l3 -3l3 3" />
          <Path d="M12 21a9 9 0 1 0 -.265 0l.265 0z" />
        </G>
      </Svg>
    );
  }

