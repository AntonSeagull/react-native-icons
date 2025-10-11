

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbJoinBevel = (props: IconProps) => {

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
          <Path d="M6 4h3a2 2 0 0 1 2 2v6a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-6.586a1 1 0 0 1 -.707 -.293l-6.414 -6.414a1 1 0 0 1 -.293 -.707v-6.586a2 2 0 0 1 2 -2" />
        </G>
      </Svg>
    );
  }

