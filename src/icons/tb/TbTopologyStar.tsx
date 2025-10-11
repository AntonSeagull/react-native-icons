

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbTopologyStar = (props: IconProps) => {

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
          <Path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
          <Path d="M7.5 7.5l3 3" />
          <Path d="M7.5 16.5l3 -3" />
          <Path d="M13.5 13.5l3 3" />
          <Path d="M16.5 7.5l-3 3" />
        </G>
      </Svg>
    );
  }

