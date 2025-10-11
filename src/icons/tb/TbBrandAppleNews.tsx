

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandAppleNews = (props: IconProps) => {

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
          <Path d="M4 14l6 6h-6z" />
          <Path d="M20 10l-6 -6h6z" />
          <Path d="M4 4v4l12 12h4v-4l-12 -12z" />
        </G>
      </Svg>
    );
  }

