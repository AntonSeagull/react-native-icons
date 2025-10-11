

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbCirclesRelation = (props: IconProps) => {

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
          <Path d="M9.183 6.117a6 6 0 1 0 4.511 3.986" />
          <Path d="M14.813 17.883a6 6 0 1 0 -4.496 -3.954" />
        </G>
      </Svg>
    );
  }

