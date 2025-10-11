

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbGenderFemale = (props: IconProps) => {

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
          <Path d="M12 9m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
          <Path d="M12 14v7" />
          <Path d="M9 18h6" />
        </G>
      </Svg>
    );
  }

