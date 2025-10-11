

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowDownCircle = (props: IconProps) => {

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
          <Path d="M12 7v14" />
          <Path d="M9 18l3 3l3 -3" />
          <Path d="M12 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4" />
        </G>
      </Svg>
    );
  }

