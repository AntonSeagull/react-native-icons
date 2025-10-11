

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFlipHorizontal = (props: IconProps) => {

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
          <Path d="M3 12l18 0" />
          <Path d="M7 16l10 0l-10 5l0 -5" />
          <Path d="M7 8l10 0l-10 -5l0 5" />
        </G>
      </Svg>
    );
  }

