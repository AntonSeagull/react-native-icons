

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFold = (props: IconProps) => {

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
          <Path d="M12 3v6l3 -3m-6 0l3 3" />
          <Path d="M12 21v-6l3 3m-6 0l3 -3" />
          <Path d="M4 12l1 0" />
          <Path d="M9 12l1 0" />
          <Path d="M14 12l1 0" />
          <Path d="M19 12l1 0" />
        </G>
      </Svg>
    );
  }

