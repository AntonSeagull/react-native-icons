

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbId = (props: IconProps) => {

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
          <Path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
          <Path d="M9 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M15 8l2 0" />
          <Path d="M15 12l2 0" />
          <Path d="M7 16l10 0" />
        </G>
      </Svg>
    );
  }

