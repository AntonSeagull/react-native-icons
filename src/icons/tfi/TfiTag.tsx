

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiTag = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M8.953 1.008l-3.967 2.882v12.14l3.986-2.794 4.041 2.785v-12.135l-4.060-2.878zM12.014 14.117l-3.045-2.1-2.982 2.091v-9.709l2.975-2.161 3.053 2.165v9.714zM7.254 6.001c0 0.965 0.785 1.75 1.75 1.75s1.75-0.785 1.75-1.75-0.785-1.75-1.75-1.75-1.75 0.785-1.75 1.75zM9.004 5.251c0.413 0 0.75 0.337 0.75 0.75s-0.337 0.75-0.75 0.75-0.75-0.337-0.75-0.75 0.337-0.75 0.75-0.75z" />
        </G>
      </Svg>
    );
  }

