

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbVacuumCleaner = (props: IconProps) => {

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
          <Path d="M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0z" />
          <Path d="M14 9a2 2 0 1 1 -4 0a2 2 0 0 1 4 0z" />
          <Path d="M12 16h.01" />
        </G>
      </Svg>
    );
  }

