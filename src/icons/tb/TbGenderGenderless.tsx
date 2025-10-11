

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGenderGenderless = (props: IconProps) => {

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
          <Path d="M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
          <Path d="M12 10v-7" />
          <Path d="M7 15h10" />
        </G>
      </Svg>
    );
  }

