

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const BiLogoTumblr = (props: IconProps) => {

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
          <Path  d="M14.078 20.953c-2.692 0-4.699-1.385-4.699-4.7v-5.308H6.931V8.07c2.694-.699 3.821-3.017 3.95-5.023h2.796v4.558h3.263v3.34h-3.263v4.622c0 1.386.699 1.864 1.813 1.864h1.58v3.522h-2.992z" />
        </G>
      </Svg>
    );
  }

