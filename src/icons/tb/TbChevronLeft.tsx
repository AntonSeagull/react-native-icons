

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbChevronLeft = (props: IconProps) => {

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
          <Path d="M15 6l-6 6l6 6" />
        </G>
      </Svg>
    );
  }

