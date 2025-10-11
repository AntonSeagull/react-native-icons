

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCircleChevronsDown = (props: IconProps) => {

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
          <Path d="M15 9l-3 3l-3 -3" />
          <Path d="M15 13l-3 3l-3 -3" />
          <Path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z" />
        </G>
      </Svg>
    );
  }

