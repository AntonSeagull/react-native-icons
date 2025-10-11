

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGenderGenderqueer = (props: IconProps) => {

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
          <Path d="M12 11a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
          <Path d="M12 11v-8" />
          <Path d="M14.5 4.5l-5 3" />
          <Path d="M9.5 4.5l5 3" />
        </G>
      </Svg>
    );
  }

