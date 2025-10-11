

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandTripadvisor = (props: IconProps) => {

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
          <Path d="M6.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
          <Path d="M17.5 13.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0" />
          <Path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671l1 -1.671h-4.5z" />
          <Path d="M6.5 9a4.5 4.5 0 1 1 -3.5 1.671l-1 -1.671h4.5z" />
          <Path d="M10.5 15.5l1.5 2l1.5 -2" />
          <Path d="M9 6.75c2 -.667 4 -.667 6 0" />
        </G>
      </Svg>
    );
  }

