

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GoMarkdown = (props: IconProps) => {

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
          <Path  d="M22.289 4.5A1.71 1.71 0 0 1 24 6.226v11.557c0 .946-.766 1.726-1.726 1.726H1.726A1.74 1.74 0 0 1 0 17.768V6.226C0 5.28.78 4.5 1.726 4.5Zm-8.781 12.007V7.501h-3.002l-2.251 3.002-2.252-3.002H3.002v9.006h3.001v-4.503l2.252 2.882 2.251-2.882v4.503Zm4.489.75 3.767-5.253h-2.251V7.501h-3.002v4.503h-2.252Z" />
        </G>
      </Svg>
    );
  }

