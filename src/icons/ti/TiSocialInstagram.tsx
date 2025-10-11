

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TiSocialInstagram = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 12, 12)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M18 3h-12c-1.7 0-3 1.3-3 3v12c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-12c0-1.7-1.3-3-3-3zm-6 6c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm3.8-2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2zm2.2 12h-12c-.6 0-1-.4-1-1v-6h2c0 2.8 2.2 5 5 5s5-2.2 5-5h2v6c0 .6-.4 1-1 1z" />
        </G>
      </Svg>
    );
  }

