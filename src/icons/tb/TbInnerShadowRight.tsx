

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbInnerShadowRight = (props: IconProps) => {

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
          <Path d="M18.364 18.364a9 9 0 1 1 -12.728 -12.728a9 9 0 0 1 12.728 12.728z" />
          <Path d="M16.243 7.757a6 6 0 0 1 0 8.486" />
        </G>
      </Svg>
    );
  }

