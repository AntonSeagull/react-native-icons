

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbRelationManyToMany = (props: IconProps) => {

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
          <Path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
          <Path d="M15 14v-4l3 4v-4" />
          <Path d="M6 14v-4l3 4v-4" />
          <Path d="M12 10.5l0 .01" />
          <Path d="M12 13.5l0 .01" />
        </G>
      </Svg>
    );
  }

