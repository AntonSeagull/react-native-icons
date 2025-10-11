

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandNetflix = (props: IconProps) => {

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
          <Path d="M9 3l10 18h-4l-10 -18z" />
          <Path d="M5 3v18h4v-10.5" />
          <Path d="M19 21v-18h-4v10.5" />
        </G>
      </Svg>
    );
  }

